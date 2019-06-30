const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

//User model
const User = require("../models/User");

router.get("/login", (req, res) => res.send("Login"));

//router.get("/register", (req, res) => res.send("Register"));

router.post("/register", (req, res, next) => {
  console.log(req.body);
  const { name, email, password, password2 } = req.body;

  //check req fields
  if (!name || !email || !password || !password2) {
    res.redirect("/users/register");
  }
  //check password same
  if (password != password2) {
    res.redirect("users/register");
  } else {
    //success
    User.findOne({ email: email }).then(user => {
      if (user) {
        res.redirect("/users/register");
        next();
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password
        });
        //Hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set password to hash
            newUser.password = hash;
            //save user
            newUser
              .save()
              .then(() => {
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
});

// login;
router.post("/login", (req, res) => {
  console.log(req.body);
  // console.log(req.session);
  const { email, password } = req.body;
  if (!email) {
    res.redirect("/users/login");
  } else if (!password) {
    res.redirect("/users/login");
  } else {
    User.findOne({ email: email }, (err, userResponse) => {
      if (err) {
        res.status(500).send("Not find");
      } else if (userResponse) {
        bcrypt.compare(password, userResponse.password, (err, cmpResponse) => {
          if (err) {
          } else if (cmpResponse) {
            //console.log("USER login:", userResponse._id, password);
            req.session.uid = userResponse._id;
            req.session.isLogin = true;
            req.session.firsttime = 0;
            //console.log("session", req.session, req.session.uid);
            res.redirect("/Game");
          } else {
            res.redirect("/users/login");
          }
        });
      } else {
        res.redirect("/users/login");
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.end();
});
module.exports = router;
