import React, { Component } from "react";
//component
import Gameview from '../components/game/gameview';
import TextArea from './Speaking';
import Fight from './Fight';
// function
// import moveLeft from '../components/functions/move/moveLeft';
// import moveRight from '../components/functions/move/moveRight';
// import moveTop from '../components/functions/move/moveTop';
// import moveDown from '../components/functions/move/moveDown';
import move from "../components/functions/move/move";
import open from "../components/functions/openMenu";
import playerImg from "../img/playerImg";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        characterPositionInMap: {   top: 450,  left: 500   },
        characterFacing: {top: true, down: false, left: false, right: false},
        characterBag: [
          {
            name: "傷藥",
            amount: 5,
            explain: "可回覆25滴血"
          },
          {
            name: "pp提升藥劑",
            amount: 5,
            explain: "回覆1pp"
          }
        ],
        movingImgOneTwo: false,
        moving: false,
        preMove: 38
      },

      position: {top: "0", left: "0"},

      roleInfo: {
        player: {
          name: "Ian",          level: 18,
          anger: 0,
          currentBlood: 150,    totalBlood: 150,
          frontImg: "",         backImg: require("../img/Player2.png"),
          attack: [{
              name: "幫你github按點心", damage: 20, selfDamage: 0,  speed: 5,
              probability:1,  totalPP: 25,   currentPP: 25,
              arrow: "visible", text: 'Ian開心Ric就開心'
            },
            {
              name: "好拉這我之後看",   damage: 40, selfDamage: 0,     speed: 5,
              probability: 1, totalPP: 10,    currentPP: 10,
              arrow: "hidden", text: '我的意思是你一定要看啦(你讓Ric憤怒並提升20點傷害)'
            },
            {
                name: "醜到爆的css",    damage: 80, selfDamage: 0,     speed: 5,
                probability: 0.4,     totalPP: 10,    currentPP: 10,
                arrow: "hidden", text: '雖然css不算分，但你這個......恩'
            },
            {
                name: "助教抱歉我名字打錯",     damage: 30, selfDamage: 0,    speed: 5,
                probability: 0.8,   totalPP: 20,    currentPP: 20,
                arrow: "hidden", text: '可以請助教再clone一次嗎'
            }]
          },
          enemy: {
            name: "Ric",
            level: 43,
            anger: 0,
            currentBlood: 300,
            totalBlood: 300,
            frontImg: require("../img/RicBattle.png"),
  
            backImg: "",
  
            attack: [
              {
                name: "吃我的尚方寶劍啦",  damage: 80, selfDamage: 0,    speed: 5,
                probability: 0.2,   totalPP: 5,     currentPP: 5,
                arrow: "visible", text: '不好意思，不小心捅到'
              },
              {
                name: "我不是歧視windows",  damage: 30, selfDamage: 0,     speed: 5,
                probability: 1,   totalPP: 20,    currentPP: 20,
                arrow: "hidden", text: '好拉我就是拉'
              },
              {
                name: "crazy week",    damage: 0, selfDamage: 20,     speed: 5,
                probability: 1,     totalPP: 2,    currentPP: 2,
                arrow: "hidden", text: '今天slide只有5頁喔'
              },
              {
                name: "電機系的課多半小時很正常啊",     damage: 0, selfDamage: -50,    speed: 5,
                probability: 1,   totalPP: 5,    currentPP: 5,
                arrow: "hidden", text: '那我們現在開始講重點喔'
              }
            ]
          },
        },
        map: {
                name: "1",
                noEntry: [
                    {top:50, left:-250},{top:50, left:-200},{top:50, left:-150},{top:50, left:-100},{top:50, left:-50},{top:50, left:0},
                    {top:50, left:400},{top:50, left:350},{top:50, left:300},{top:50, left:250},{top:50, left:200},{top:50, left:150},
                    {top:150, left:-250},{top:150, left:-200},{top:150, left:-150},{top:150, left:-100},{top:150, left:-50},{top:150, left:0},
                    {top:150, left:400},{top:150, left:350},{top:150, left:300},{top:150, left:250},{top:150, left:200},{top:150, left:150},
                    {top:-50, left:-250},{top:-50, left:-200},{top:-50, left:-150},{top:-50, left:-100},{top:-50, left:-50},{top:-50, left:0},
                    {top:-50, left:400},{top:-50, left:350},{top:-50, left:300},{top:-50, left:250},{top:-50, left:200},{top:-50, left:150},
                    {top:-150, left:-250},{top:-150, left:-200},{top:-150, left:-150},{top:-150, left:-100},{top:-150, left:-50},{top:-150, left:0},
                    {top:-150, left:400},{top:-150, left:350},{top:-150, left:300},{top:-150, left:250},{top:-150, left:200},{top:-150, left:150},
                    {top:-250, left:-250},{top:-250, left:-200},{top:-250, left:-150},{top:-250, left:-100},{top:-250, left:-50},{top:-250, left:0},
                    {top:-250, left:400},{top:-250, left:350},{top:-250, left:300},{top:-250, left:250},{top:-250, left:200},{top:-250, left:150},
                    {top:-350, left:-250},{top:-350, left:-200},{top:-350, left:-150},{top:-350, left:-100},{top:-350, left:-50},{top:-350, left:0},
                    {top:-350, left:400},{top:-350, left:350},{top:-350, left:300},{top:-350, left:250},{top:-350, left:200},{top:-350, left:150},
                    {top:450, left:450},{top:450, left:400},{top:450, left:350},{top:450, left:300},{top:450, left:250},{top:450, left:200},{top:450, left:150},{top:450, left:100},
                    {top:450, left:50},{top:450, left:0},{top:450, left:-50},{top:450, left:-100},{top:450, left:-150},{top:450, left:-200},{top:450, left:-250},
                    {top:450, left:-300},
                    {top:-600, left:450},{top:-600, left:400},{top:-600, left:350},{top:-600, left:300},{top:-600, left:250},{top:-600, left:200},{top:-600, left:150},{top:-600, left:100},
                    {top:-600, left:50},{top:-600, left:0},{top:-600, left:-50},{top:-600, left:-100},{top:-600, left:-150},{top:-600, left:-200},{top:-600, left:-250},
                    {top:-600, left:-300},
                    {top:450, left:-350},{top:400, left:-350},{top:350, left:-350},{top:300, left:-350},{top:250, left:-350},{top:200, left:-350},{top:150, left:-350},
                    {top:100, left:-350},{top:50, left:-350},{top:0, left:-350},{top:-50, left:-350},{top:-100, left:-350},{top:-150, left:-350},{top:-200, left:-350},
                    {top:-250, left:-350},{top:-300, left:-350},{top:-350, left:-350},{top:-400, left:-350},{top:-450, left:-350},{top:-500, left:-350},{top:-550, left:-350},
                    {top:-600, left:-350},
                    {top:450, left:500},{top:400, left:500},{top:350, left:500},{top:300, left:500},{top:250, left:500},{top:200, left:500},{top:150, left:500},
                    {top:100, left:500},{top:50, left:500},{top:0, left:500},{top:-50, left:500},{top:-100, left:500},{top:-150, left:500},{top:-200, left:500},
                    {top:-250, left:500},{top:-300, left:500},{top:-350, left:500},{top:-400, left:500},{top:-450, left:500},{top:-500, left:500},{top:-550, left:500},
                    {top:-600, left:500},
                    {top:400, left:-250}, {top:350, left:-250}, {top:300, left:-250},
                    {top:400, left:250}, {top:400, left:200}, {top:400, left:150}, {top:400, left:100}, {top:400, left:50}, {top:400, left:0}, {top:400, left:-50}, {top:400, left:-100},
                    {top:300, left:350}, {top:300, left:300}, {top:300, left:250},
                ],
                enemy: [
                    {name:"ric", position:{top:100, left:200}, facing:0,
                    text:{
                        upper:"",
                        lower:"",
                    }},
                ]
        },
      arrowPosition: { x: 0, y: 0 },
      text: {
        upper: "",
        lower: ""
      },
      gameOrFight: true,
      openMenu: false,
      speaking: false,
      youBeatRic: false,
      dontMove: false,
      imgFlicker: {my: 'visible', enemy: 'visible'},
    };
  }


  sleep = function sleep(time) {
    return new Promise(res => setTimeout(res, time));
  };
  
  moving = e => {
    if(!this.state.gameOrFight) return 0;
    if(this.state.speaking) return 0;
    e.preventDefault();
    if (
      e.keyCode === 37 ||
      e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 40
    ) {
      this.turing(e);
      move.call(this, e);
      this.setState({
        character: {
          ...this.state.character,
          movingImgOneTwo: !this.state.character.movingImgOneTwo
        }
      });
      this.setState({
        character: { ...this.state.character, preMove: e.keyCode }
      });
      document.removeEventListener("keydown", this.moving);
      setTimeout(() => {
        document.addEventListener("keydown", this.moving);
      }, 200);
    }
  };

  turing = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.setState({
          character: {...this.state.character,  characterFacing: {top:false, down:false, left:true, right:false}}
        });
        break;
      case 38:
        this.setState({
          character: {...this.state.character,  characterFacing: {top:true, down:false, left:false, right:false}}
        });
        break;
      case 39:
        this.setState({
            character: {...this.state.character, characterFacing: {top:false, down:false, left:false, right:true}}
        });
        break;
      case 40:
        this.setState({
          character: {...this.state.character,  characterFacing: {top:false, down:true, left:false, right:false}}
        });
        break;
      default:
        break;
    }
  };

  openMenu = e => {
    if(!this.state.gameOrFight) return 0;
    e.preventDefault();
    e.keyCode === 73 &&
      this.state.openMenu &&
      document.addEventListener("keydown", this.moving);
    open.call(this, e);
    this.state.openMenu && document.removeEventListener("keydown", this.moving);
  };

  bagUse = item => {
    console.log(item);
  };

  fetchData = async () => {
    const map = this.state.map
    await fetch("/api/getData")
      .then(res => res.json())
      .then(jsonData => {
        console.log(jsonData)
        this.setState({
          ...jsonData,
          openMenu: false,
          map: map
        });
      })
      .catch(err => console.log(err));
    };
    
    enemyExcuteAttack = async index => {
      this.textDisplay({ upper: "", lower: "" });
      var roleInfo = this.state.roleInfo;
      
      roleInfo.enemy.attack[index%4].currentPP--;
      
      this.textDisplay({ upper: roleInfo.enemy.name + "使出", lower: "" });
      await this.sleep(this.state.text.upper.length * 100);
      this.textDisplay({
        upper: roleInfo.enemy.name + "使出",
        lower: roleInfo.enemy.attack[index].name
      });
      await this.sleep(this.state.text.lower.length * 100+200);
      
      if (Math.random() < roleInfo.enemy.attack[index].probability) {
        roleInfo.player.currentBlood -= (roleInfo.enemy.attack[index].damage+roleInfo.enemy.anger);
        roleInfo.enemy.currentBlood -= roleInfo.enemy.attack[index].selfDamage;
        this.sparkle('my');
      this.textDisplay({ upper: roleInfo.enemy.attack[index].text, lower: "" });
      await this.sleep(this.state.text.upper.length * 100+200);
    } else {
      this.textDisplay({ upper: "但是失敗了...", lower: "" });
      await this.sleep(this.state.text.upper.length * 100+200);
    }

    if (roleInfo.player.currentBlood <= 0) {
      this.textDisplay({ upper: "你輸了...", lower: "" });
      await this.sleep(3000);
      this.setState({gameOrFight: true, speaking: false});
      this.setState({      roleInfo: {
        player: {
          name: "Ian",          level: 18,
          anger: 0,
          currentBlood: 75,    totalBlood: 150,
          frontImg: "",         backImg: require("../img/Player2.png"),
          attack: [{
              name: "幫你github按點心", damage: 20, selfDamage: 0,  speed: 5,
              probability:1,  totalPP: 25,   currentPP: 25,
              arrow: "visible", text: 'Ian開心Ric就開心'
            },
            {
              name: "好拉這我之後看",   damage: 40, selfDamage: 0,     speed: 5,
              probability: 1, totalPP: 10,    currentPP: 10,
              arrow: "hidden", text: '我的意思是你一定要看啦(你讓Ric憤怒並提升20點傷害)'
            },
            {
                name: "醜到爆的css",    damage: 80, selfDamage: 0,     speed: 5,
                probability: 0.4,     totalPP: 10,    currentPP: 10,
                arrow: "hidden", text: '雖然css不算分，但你這個......恩'
            },
            {
                name: "助教抱歉我名字打錯",     damage: 30, selfDamage: 0,    speed: 5,
                probability: 0.8,   totalPP: 20,    currentPP: 20,
                arrow: "hidden", text: '可以請助教再clone一次嗎'
            }]
          },
          enemy: {
            name: "Ric",
            level: 43,
            anger: 0,
            currentBlood: roleInfo.enemy.currentBlood,
            totalBlood: 300,
            frontImg: require("../img/RicBattle.png"),
  
            backImg: "",
  
            attack: [
              {
                name: "吃我的尚方寶劍啦",  damage: 80, selfDamage: 0,    speed: 5,
                probability: 0.2,   totalPP: 5,     currentPP: 5,
                arrow: "visible", text: '不好意思，不小心捅到'
              },
              {
                name: "我不是歧視windows",  damage: 30, selfDamage: 0,     speed: 5,
                probability: 1,   totalPP: 20,    currentPP: 20,
                arrow: "hidden", text: '好拉我就是拉'
              },
              {
                name: "crazy week",    damage: 0, selfDamage: 20,     speed: 5,
                probability: 1,     totalPP: 2,    currentPP: 2,
                arrow: "hidden", text: '今天slide只有5頁喔'
              },
              {
                name: "電機系的課多半小時很正常啊",     damage: 0, selfDamage: -50,    speed: 5,
                probability: 1,   totalPP: 5,    currentPP: 5,
                arrow: "hidden", text: '那我們現在開始講重點喔'
              }
            ]
          },
        }})
        this.setState({dontMove: true, displayState: "control"});
        this.textDisplay({ upper: "", lower: "" });
        return 0;
    }

    this.setState({ roleInfo: roleInfo, displayState: "control", dontMove: false });

    this.textDisplay({ upper: "", lower: "" });
  };

  moveArrow = e => {
    var roleInfo = this.state.roleInfo;
    var arrowPosition = this.state.arrowPosition;

    console.log(roleInfo.player);
    roleInfo.player.attack[arrowPosition.x + 2 * arrowPosition.y].arrow =
      "hidden";
    arrowPosition = {
      x: (arrowPosition.x + e.x) % 2,
      y: (arrowPosition.y + e.y) % 2
    };
    roleInfo.player.attack[arrowPosition.x + 2 * arrowPosition.y].arrow =
      "visible";

    this.setState({ arrowPosition: arrowPosition, roleInfo: roleInfo });
  };

  letsBattle = (e)=>{
    if(!this.state.gameOrFight) return 0;
    if(this.state.speaking) return 0;
    e.preventDefault();
    const facing = this.state.character.characterFacing;
    const top = parseInt(this.state.position.top);
    const left = parseInt(this.state.position.left);
    const enemyTop = this.state.character.characterPositionInMap.top-this.state.map.enemy[0].position.top;
    const enemyLeft = this.state.character.characterPositionInMap.left-this.state.map.enemy[0].position.left;
    if(e.keyCode===32){
        // if(top===enemyTop+50&&left===enemyLeft&&facing.down){console.log("you meet ric downward!")};
        if(top===enemyTop-100&&left===enemyLeft&&facing.top){
            if(!this.state.youBeatRic){
                this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
                setTimeout(()=>this.setState({gameOrFight: false, dontMove: false}), 5000);
            }else{
                this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"哇，你真厲害",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:0, text:{upper:"哇，你真厲害",lower:"來幫我寫個graphql的tutorial吧",}}]}}), 1000)
                setTimeout(()=>this.setState({speaking: false}), 3000);
            }
        };
        if(top===enemyTop&&left===enemyLeft-50&&facing.left){
            if(!this.state.youBeatRic){
                this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
                setTimeout(()=>this.setState({gameOrFight: false, dontMove: false}), 5000);
            }else{
                this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"哇，你真厲害",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:1, text:{upper:"哇，你真厲害",lower:"來幫我寫個graphql的tutorial吧",}}]}}), 1000)
                setTimeout(()=>this.setState({speaking: false}), 3000);
            }
        };
        if(top===enemyTop&&left===enemyLeft+50&&facing.right){
            if(!this.state.youBeatRic){
            this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"優拓現在缺人噢",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"優拓現在缺人噢",lower:"但你github的星星數......我們先來對戰吧！",}}]}}), 1000)
                setTimeout(()=>this.setState({gameOrFight: false, dontMove: false}), 5000);
            }else{
                this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"哇，你真厲害",lower:"",}}]}});
                this.setState({speaking: true});
                setTimeout(()=>this.setState({map: {...this.state.map,
                    enemy:[{name:"ric", position:{top:100, left:200}, facing:2, text:{upper:"哇，你真厲害",lower:"來幫我寫個graphql的tutorial吧",}}]}}), 1000)
                setTimeout(()=>this.setState({speaking: false}), 3000);
            }
        };}
    }

    // skipClass2 = async () => {
    //     this.textDisplay({ upper: "優拓現在缺人噢", lower: "" });
    //     await this.sleep(this.state.text.upper.length * 300);
    //     this.textDisplay({ upper: "優拓現在缺人噢", lower: "但你github的星星數......我們先來對戰吧！" });
    //     await this.sleep(this.state.text.lower.length * 300);
    //     this.textDisplay({ upper: "", lower: "" });
    // }

  playerExecuteAttack = async index => {
    if(this.state.dontMove) return 0;
    
    this.setState({ dontMove: true });
    var roleInfo = this.state.roleInfo;

    if (roleInfo.player.attack[index].currentPP > 0) {
      this.setState({ displayState: "text" });
      roleInfo.player.attack[index].currentPP--;

      this.textDisplay({ upper: roleInfo.player.name + "使出", lower: "" });
      await this.sleep(this.state.text.upper.length * 100);
      this.textDisplay({
        upper: roleInfo.player.name + "使出",
        lower: roleInfo.player.attack[index].name
      });
      await this.sleep(this.state.text.lower.length * 100+200);
      if (Math.random() < roleInfo.player.attack[index].probability) {
          if(index === 1){
              roleInfo.enemy.anger += 20;
          } else if(index === 0 && roleInfo.enemy.anger > 0){
            roleInfo.enemy.anger -= 10;
          }
        roleInfo.enemy.currentBlood -= roleInfo.player.attack[index].damage;
        roleInfo.player.currentBlood -= roleInfo.player.attack[index].selfDamage;
        this.sparkle('enemy');
        this.textDisplay({ upper: roleInfo.player.attack[index].text, lower: "" });
        await this.sleep(this.state.text.upper.length * 100+200);
      } else {
        this.textDisplay({ upper: "但是失敗了...", lower: "" });
        await this.sleep(this.state.text.upper.length * 100+200);
      }
      
      this.setState({ roleInfo: roleInfo });
      
      if (roleInfo.enemy.currentBlood <= 0) {
        this.textDisplay({ upper: "你贏了!", lower: "" });
        await this.sleep(3000);
        this.setState({gameOrFight: true, speaking: false, youBeatRic: true});
      } else {
        index = Math.floor(Math.random() * 4);
        var count = 0;
        
        while (
          count < 4 &&
          roleInfo.enemy.attack[(index + count)%4].currentPP == 0
          ) {
          count++;
        }
        
        this.enemyExcuteAttack(index + count);
      }
    } else this.setState({ dontMove: false });
  };
  
  textDisplay = obj => {
    this.setState({ text: { upper: obj.upper, lower: obj.lower } });
  };
  
  skipClass = async () => {
    if(this.state.dontMove) return 0;
    this.setState({ displayState: "text", dontMove: true });
    this.textDisplay({ upper: "想進優拓，", lower: "" });
    await this.sleep(this.state.text.upper.length * 100);
    this.textDisplay({ upper: "想進優拓，", lower: "現在翹課可不行哦!" });
    await this.sleep(this.state.text.lower.length * 100+200);
    this.textDisplay({ upper: "", lower: "" });
    this.setState({ displayState: "prepare", dontMove: false });
  };

  sparkle = async e => {
    if(e === 'enemy'){
        this.setState({imgFlicker: {my: 'visible', enemy: 'hidden'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'hidden'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'hidden'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}});

    } else{
        this.setState({imgFlicker: {my: 'hidden', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'hidden', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'hidden', enemy: 'visible'}});
        await this.sleep(100);
        this.setState({imgFlicker: {my: 'visible', enemy: 'visible'}}); 
    }
  }
  
  useItem = (item, amount, attacknum) => {
    const roleInfo = this.state.roleInfo
    const prevBlood = roleInfo.player.currentBlood;
    roleInfo.player.currentBlood += 25
    //console.log(prevBlood)
    console.log(roleInfo.player.currentBlood)
    if (item === "傷藥" && amount > 0 && prevBlood < 150) {
      if(roleInfo.player.currentBlood > 150){
        roleInfo.player.currentBlood = 150
      }
      this.setState({
        roleInfo: roleInfo
      });
    }
    console.log(this.state.roleInfo.player.currentBlood);

    if (item === "pp提升藥劑" && amount > 0) {
      const attackArray = this.state.roleInfo.player.attack[attacknum];
      const prePPAmount = this.state.roleInfo.player.attack[attacknum]
        .currentPP;
      delete attackArray.currentPP;
      const newAttackArray = { ...attackArray, currentPP: prePPAmount + 1 };
      console.log(newAttackArray);
      const ArrayA = this.state.roleInfo.player.attack;
      console.log(ArrayA);
      ArrayA.splice(0, 1, newAttackArray);
      console.log(ArrayA);
      this.setState({
        roleInfo: {
          player: {
            attack: ArrayA
          }
        }
      });
    }
  };

  
  componentWillMount(){
    this.fetchData();
    console.log("fetching")
  }

  componentDidMount() {
      setTimeout(()=>this.setState(),10)
      this.fetchData()
      document.addEventListener("keydown", this.moving);
      document.addEventListener("keydown", this.openMenu);
      document.addEventListener("keyup", () => {
        this.setState({
          character: { ...this.state.character, moving: false }
        });
      });
      document.addEventListener("keydown", this.letsBattle);
  }

  render() {
    console.log(this.state.map)
    console.log(this.state.map.enemy)
    // console.log(this.state.moving);
    return (
      <div>
        {this.state.speaking&&!this.state.youBeatRic&&<div style={style}></div>}
        {this.state.gameOrFight ? (
        <div>
          <Gameview
            playerImg={playerImg}
            position={this.state.position}
            character={this.state.character}
            openMenu={this.state.openMenu}
            map={this.state.map}
            Data={this.state}
            bagUse={this.bagUse}
            useItem={this.useItem}
            roleInfo={this.state.roleInfo}
            />
          <TextArea text = {this.state.map.enemy[0].text} displayState = {this.state.speaking}/>
        </div>
        ) : (
          <Fight
            roleInfo={this.state.roleInfo}
            moveArrow={this.moveArrow}
            arrowPosition={this.state.arrowPosition}
            playerExecuteAttack={this.playerExecuteAttack}
            text={this.state.text}
            skipClass={this.skipClass}
            imgFlicker = {this.state.imgFlicker}
          />
        )}
      </div>
    );
  }
}


var style = {
    opacity: "0",
    width: "1000px",
    height: "800px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)",
    background: "black",
    zIndex: "1",
    animationDelay: "3s",
    animationName: "dimToBlackBegin",
    animationDuration: "2.5s",
    animationTimingFunction: "linear",
    mixBlendMode: "darken",
  }

export default Game;
