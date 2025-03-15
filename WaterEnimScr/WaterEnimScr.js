/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WaterEnimScr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-gif-drawing (3)",
        "./WaterEnimScr/costumes/pixil-gif-drawing (3).svg",
        { x: 17, y: -57 }
      ),
      new Costume(
        "pixil-gif-drawing (3)3",
        "./WaterEnimScr/costumes/pixil-gif-drawing (3)3.png",
        { x: 17, y: -57 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert3
      ),
      new Trigger(Trigger.BROADCAST, { name: "LOST" }, this.whenIReceiveLost),
    ];
  }

  *whenIReceiveMessage1() {
    if (this.touching(Color.rgb(132, 129, 167))) {
      this.visible = false;
      this.broadcast("diedededid");
    }
  }

  *whenIReceiveStwert() {
    this.visible = true;
    this.goto(94, -2);
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.goto(94, -2);
      this.costume = "pixil-gif-drawing (3)";
      this.direction = 90;
      yield* this.wait(1);
      this.direction = -90;
      yield* this.wait(1);
      this.goto(107, -45);
      this.costume = "pixil-gif-drawing (3)3";
      yield* this.wait(2);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStwert2() {
    this.visible = true;
  }

  *whenIReceiveStwert3() {
    while (true) {
      if (
        this.touching(this.sprites["PlayerDat"].andClones()) &&
        this.toNumber(this.stage.vars.invincible) === 0
      ) {
        this.broadcast("did");
        this.stage.vars.advancement++;
      }
      yield;
    }
  }

  *whenIReceiveLost() {
    this.visible = false;
  }
}
