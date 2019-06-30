const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Data = require("../models/Data");
router.post("/save", (req, res, next) => {
  if (req.session.isLogin && req.session.firsttime === 0) {
    let id = req.session.uid;
    // console.log(req.session.uid);
    // console.log(req.body);
    //console.log(req.session);
    req.session.firsttime++;
    //console.log(req.session.firsttime);
    User.findOne({ _id: id }, (err, userResponse) => {
      if (err) {
        res.status(500).send("Not Find");
      } else if (userResponse) {
        //console.log("find user");
        const saveData = new Data({
          character: req.body.data.character,
          position: req.body.data.position,
          //map: req.body.data.map,
          openMenu: req.body.data.openMenu,
          moving: req.body.data.moving,
          user: req.session.uid,
          roleInfo: req.body.data.roleInfo,
          arrowPosition: req.body.data.arrowPosition,
          text: req.body.data.text,
          gameOrFight: req.body.data.gameOrFight,
          peaking: req.body.data.peaking,
          youBeatRic: req.body.data.youBeatRic,
          dontMove: req.body.data.dontMove,
          imgFlicker: req.body.data.imgFlicker
        });
        saveData
          .save()
          .then(() => {
            console.log("saved");
          })
          .catch(err => console.log(err));
        res.redirect("/Game");
      }
    });
  } else if (req.session.isLogin && req.session.firsttime !== 0) {
    let id = req.session.uid;
    const updateData = {
      character: req.body.data.character,
      position: req.body.data.position,
      //map: req.body.data.map,
      openMenu: req.body.data.openMenu,
      moving: req.body.data.moving,
      user: req.session.uid,
      roleInfo: req.body.data.roleInfo,
      arrowPosition: req.body.data.arrowPosition,
      text: req.body.data.text,
      gameOrFight: req.body.data.gameOrFight,
      peaking: req.body.data.peaking,
      youBeatRic: req.body.data.youBeatRic,
      dontMove: req.body.data.dontMove,
      imgFlicker: req.body.data.imgFlicker
    };
    Data.update({ user: id }, updateData, (err, updateResponse) => {
      if (err) {
        res.status(500).send("Cant Find id to update");
      } else if (updateResponse) {
        console.log("update");
      }
    });
  } else console.log("no login");
});

router.get("/getData", (req, res, next) => {
  Data.findOne({ user: req.session.uid }, (err, stateData) => {
    if (err) {
      console.log(err);
      res.end();
    } else if (stateData) {
      console.log(stateData);

      res.json(stateData);
    }
  });
});

module.exports = router;
