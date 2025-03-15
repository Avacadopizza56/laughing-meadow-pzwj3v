/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilGifDrawing2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-gif-drawing (2)",
        "./PixilGifDrawing2/costumes/pixil-gif-drawing (2).svg",
        { x: 282.2396333484588, y: -104.2049065217414 }
      ),
      new Costume(
        "pixil-gif-drawing (2)2",
        "./PixilGifDrawing2/costumes/pixil-gif-drawing (2)2.svg",
        { x: 282.2396333484588, y: -113.17017652174144 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new level" },
        this.whenIReceiveNewLevel
      ),
      new Trigger(Trigger.BROADCAST, { name: "lld" }, this.whenIReceiveLld),
      new Trigger(
        Trigger.BROADCAST,
        { name: "other side" },
        this.whenIReceiveOtherSide
      ),
    ];
  }

  *whenIReceiveStwert() {
    this.costume = "pixil-gif-drawing (2)";
    this.goto(-2, 2);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 0;
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveNewLevel() {
    this.visible = false;
  }

  *whenIReceiveLld() {
    this.visible = true;
    this.stage.vars.level++;
  }

  *whenIReceiveOtherSide() {
    this.costume = "pixil-gif-drawing (2)2";
  }
}
