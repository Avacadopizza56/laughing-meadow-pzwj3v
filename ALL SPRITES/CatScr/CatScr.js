/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CatScr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "white_512x512_8x8",
        "./CatScr/costumes/white_512x512_8x8.png",
        { x: 251, y: 183 }
      ),
      new Costume("hit1", "./CatScr/costumes/hit1.svg", {
        x: -12.534492758620843,
        y: -105.1034432758604,
      }),
      new Costume("hit2", "./CatScr/costumes/hit2.svg", {
        x: -9.91379810344796,
        y: -105.81034982758462,
      }),
      new Costume("hiss1", "./CatScr/costumes/hiss1.png", { x: 26, y: 15 }),
      new Costume("hiss2", "./CatScr/costumes/hiss2.png", { x: 27, y: 15 }),
      new Costume("blink1", "./CatScr/costumes/blink1.png", { x: 19, y: 19 }),
      new Costume("blink2", "./CatScr/costumes/blink2.png", { x: 19, y: 19 }),
      new Costume("blink4", "./CatScr/costumes/blink4.png", { x: 19, y: 19 }),
      new Costume("blink3", "./CatScr/costumes/blink3.png", { x: 19, y: 19 }),
      new Costume("sleep", "./CatScr/costumes/sleep.png", { x: 26, y: -231 }),
      new Costume("found1", "./CatScr/costumes/found1.png", { x: 26, y: 12 }),
      new Costume("found2", "./CatScr/costumes/found2.svg", { x: 13, y: 6 }),
      new Costume("seen1", "./CatScr/costumes/seen1.png", { x: 25, y: 14 }),
      new Costume("seen2", "./CatScr/costumes/seen2.png", { x: 30, y: 16 }),
      new Costume("seen3", "./CatScr/costumes/seen3.png", { x: 26, y: 14 }),
      new Costume("seen4", "./CatScr/costumes/seen4.png", { x: 25, y: 14 }),
      new Costume("walk1", "./CatScr/costumes/walk1.svg", {
        x: 12,
        y: -102.275857068964,
      }),
      new Costume("walk2", "./CatScr/costumes/walk2.png", { x: 25, y: -205 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat2),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat3),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat4),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new level" },
        this.whenIReceiveNewLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCat() {
    this.stage.vars.Cat++;
    this.visible = true;
    this.goto(-244, 7);
    this.costume = "sleep";
  }

  *whenIReceiveCat2() {
    while (true) {
      if (this.touching(this.sprites["PlayerDat"].andClones())) {
        this.broadcast("before did");
        this.costume = "hit1";
        yield* this.wait(0.07);
        this.costume = "hit2";
        yield* this.wait(0.07);
        this.costume = "hit1";
        yield* this.wait(0.07);
        this.costume = "hit2";
        yield* this.wait(0.07);
        this.broadcast("did");
        this.goto(-244, 7);
      }
      yield;
    }
  }

  *whenIReceiveCat3() {
    yield* this.wait(1);
    yield* this.ai();
  }

  *ai() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.move(-5);
      if (this.touching(Color.rgb(132, 129, 167))) {
        /* TODO: Implement stop other scripts in sprite */ null;
        this.costume = "sleep";
        yield* this.wait(0.98);
        this.broadcast("cat");
      }
      yield;
    }
  }

  *walk() {
    while (true) {
      this.costume = "walk1";
      yield* this.wait(0.07);
      this.costume = "walk2";
      yield* this.wait(0.07);
      yield;
    }
  }

  *whenIReceiveCat4() {
    yield* this.wait(1);
    yield* this.walk();
  }

  *whenIReceiveCat5() {
    yield* this.wait(1);
    while (true) {
      if (this.touching(this.sprites["ExitSignExe"].andClones())) {
        this.goto(-244, 7);
      }
      yield;
    }
  }

  *whenIReceiveNewLevel() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.cat = 0;
    while (true) {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.broadcast("cat");
        this.stage.vars.cat++;
        yield* this.wait(120);
        this.broadcast("did");
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
