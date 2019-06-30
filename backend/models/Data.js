const mongoose = require("mongoose");
const positionSchema = new mongoose.Schema({
  top: {
    type: String,
    require: true
  },
  left: {
    type: String,
    require: true
  }
});
const characterFacingSchema = new mongoose.Schema({
  top: {
    type: Boolean,
    require: true
  },
  down: {
    type: Boolean,
    require: true
  },
  left: {
    type: Boolean,
    require: true
  },
  right: {
    type: Boolean,
    require: true
  }
});
const characterItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  explain: {
    type: String,
    reuqire: true
  }
});

const textSchema = new mongoose.Schema({
  upper: {
    type: String,
    require: true
  },
  lower: {
    type: String,
    require: true
  }
});

const enemySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  position: {
    type: positionSchema,
    reuqire: true
  },
  text: {
    type: textSchema,
    require: true
  },
  facing: {
    type: Number,
    require: true
  }
});

const characterSchema = new mongoose.Schema({
  characterPositionInMap: {
    type: positionSchema,
    require: true
  },
  characterFacing: {
    type: characterFacingSchema,
    require: true
  },
  characterBag: {
    type: [characterItemSchema],
    require: true
  },
  moving: Boolean,
  preMove: Number
});

const mapSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  noEntry: {
    type: [positionSchema],
    require: true
  },
  enemy: {
    type: [enemySchema],
    require: true
  }
});

const attackSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  damage: {
    type: Number,
    require: true
  },
  speed: {
    type: Number,
    require: true
  },
  probability: {
    type: Number,
    require: true
  },
  totalPP: {
    type: Number,
    require: true
  },
  currentPP: {
    type: Number,
    require: true
  },
  arrow: {
    type: String,
    require: true
  },
  selfDamage: {
    type: Number,
    require: true
  },
  speed: {
    type: Number,
    require: true
  },
  text: {
    type: String,
    require: true
  }
});

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  level: {
    type: Number,
    require: true
  },
  currentBlood: {
    type: Number,
    require: true
  },
  totalBlood: {
    type: Number,
    require: true
  },
  frontImg: {
    type: String,
    require: true
  },
  attack: {
    type: [attackSchema],
    require: true
  },
  anger: {
    type: Number,
    require: true
  }
});

const roleInfoSchema = new mongoose.Schema({
  player: {
    type: playerSchema,
    require: true
  },
  enemy: {
    type: playerSchema,
    require: true
  }
});

const arrowPositionSchema = new mongoose.Schema({
  x: {
    type: String,
    require: true
  },
  y: {
    type: String,
    require: true
  }
});

const imgFlickerSchema = mongoose.Schema({
  my: {
    type: String,
    require: true
  },
  enemy: {
    type: String,
    require: true
  }
});

const DataSchema = new mongoose.Schema({
  character: {
    type: characterSchema,
    require: true
  },
  position: {
    type: positionSchema,
    require: true
  },
  // map: {
  //   type: [mapSchema],
  //   require: true
  // },
  openMenu: {
    type: Boolean,
    require: true
  },
  moving: { type: Boolean },
  roleInfo: {
    type: roleInfoSchema,
    require: true
  },
  arrowPosition: {
    type: arrowPositionSchema,
    require: true
  },
  text: {
    type: textSchema,
    require: true
  },
  gameOrFight: {
    type: Boolean,
    require: true
  },
  user: { type: String, require: true },
  youBeatRic: {
    type: Boolean,
    require: true
  },
  speaking: {
    type: Boolean,
    require: true
  },
  dontMove: {
    type: Boolean,
    require: true
  },
  imgFlicker: {
    type: imgFlickerSchema,
    require: true
  }
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
