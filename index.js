import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PlayerDat from "./PlayerDat/PlayerDat.js";
import WaterEnimScr from "./WaterEnimScr/WaterEnimScr.js";
import PixilGifDrawing2 from "./PixilGifDrawing2/PixilGifDrawing2.js";
import ExitSignExe from "./ExitSignExe/ExitSignExe.js";
import LevelNewExe from "./LevelNewExe/LevelNewExe.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Intro1 from "./Intro1/Intro1.js";
import Intro2 from "./Intro2/Intro2.js";
import CatScr from "./CatScr/CatScr.js";
import PictureEngine from "./PictureEngine/PictureEngine.js";
import Mushyman from "./Mushyman/Mushyman.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Acheivment from "./Acheivment/Acheivment.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  PlayerDat: new PlayerDat({
    x: -24,
    y: 7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 2,
    size: 160,
    visible: true,
    layerOrder: 15,
  }),
  WaterEnimScr: new WaterEnimScr({
    x: 107,
    y: -45,
    direction: -90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 2,
    size: 140,
    visible: true,
    layerOrder: 4,
  }),
  PixilGifDrawing2: new PixilGifDrawing2({
    x: -2,
    y: 2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  ExitSignExe: new ExitSignExe({
    x: -2,
    y: -1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  LevelNewExe: new LevelNewExe({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14,
  }),
  Sprite1: new Sprite1({
    x: 193,
    y: -87,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 540.0000000000001,
    visible: false,
    layerOrder: 12,
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: -67,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  Intro1: new Intro1({
    x: 6.999999554952014,
    y: -19.99999830457915,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 98,
    visible: false,
    layerOrder: 6,
  }),
  Intro2: new Intro2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 98,
    visible: false,
    layerOrder: 7,
  }),
  CatScr: new CatScr({
    x: -194,
    y: 6.999999999999991,
    direction: -90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  PictureEngine: new PictureEngine({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Mushyman: new Mushyman({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 380,
    visible: false,
    layerOrder: 10,
  }),
  Sprite3: new Sprite3({
    x: 113,
    y: -95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Acheivment: new Acheivment({
    x: 326,
    y: 169,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 500,
    visible: false,
    layerOrder: 11,
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
