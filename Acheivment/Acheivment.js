/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Acheivment extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("walk", "./Acheivment/costumes/walk.png", { x: 100, y: 100 }),
      new Costume("hunter", "./Acheivment/costumes/hunter.png", {
        x: 100,
        y: 100,
      }),
      new Costume("oh no!", "./Acheivment/costumes/oh no!.png", {
        x: 100,
        y: 100,
      }),
      new Costume("lost", "./Acheivment/costumes/lost.png", { x: 100, y: 100 }),
    ];

    this.sounds = [new Sound("Coin", "./Acheivment/sounds/Coin.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(Trigger.BROADCAST, { name: "did" }, this.whenIReceiveDid),
      new Trigger(
        Trigger.BROADCAST,
        { name: "diedededid" },
        this.whenIReceiveDiedededid
      ),
      new Trigger(Trigger.BROADCAST, { name: "cat" }, this.whenIReceiveCat),
      new Trigger(
        Trigger.BROADCAST,
        { name: "diedededid" },
        this.whenIReceiveDiedededid2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(326, 169);
    this.visible = false;
  }

  *whenIReceiveStwert() {
    this.stage.vars.advancement = 0;
    while (true) {
      if (this.keyPressed("right arrow")) {
        yield* this.playSoundUntilDone("Coin");
        this.costume = "walk";
        this.visible = true;
        yield* this.glide(1, 140, 169);
        yield* this.wait(1);
        yield* this.glide(1, 326, 169);
        this.visible = false;
        return;
      }
      yield;
    }
  }

  *whenIReceiveDid() {
    while (true) {
      if (this.toNumber(this.stage.vars.advancement) === 1) {
        yield* this.playSoundUntilDone("Coin");
        this.costume = "oh no!";
        this.visible = true;
        yield* this.glide(1, 140, 169);
        yield* this.wait(1);
        yield* this.glide(1, 326, 169);
        this.visible = false;
        yield* this.wait(4.575348956374573e36);
        yield* this.wait(4.575348956374573e36);
        yield* this.wait(4.575348956374573e36);
      }
      yield;
    }
  }

  *whenIReceiveDiedededid() {
    while (true) {
      yield* this.playSoundUntilDone("Coin");
      this.costume = "hunter";
      this.visible = true;
      yield* this.glide(1, 140, 169);
      yield* this.wait(1);
      yield* this.glide(1, 326, 169);
      this.visible = false;
      return;
      yield;
    }
  }

  *whenIReceiveCat() {
    while (true) {
      if (this.toNumber(this.stage.vars.advancement) === 1) {
        yield* this.playSoundUntilDone("Coin");
        this.costume = "oh no!";
        this.visible = true;
        yield* this.glide(1, 140, 169);
        yield* this.wait(1);
        yield* this.glide(1, 326, 169);
        this.visible = false;
        yield* this.wait(4.575348956374573e36);
        yield* this.wait(4.575348956374573e36);
        yield* this.wait(4.575348956374573e36);
      }
      yield;
    }
  }

  *whenIReceiveDiedededid2() {
    while (true) {
      yield* this.playSoundUntilDone("Coin");
      this.costume = "hunter";
      this.visible = true;
      yield* this.glide(1, 140, 169);
      yield* this.wait(1);
      yield* this.glide(1, 326, 169);
      this.visible = false;
      return;
      yield;
    }
  }

  *whenbackdropswitchesto() {
    while (true) {
      yield* this.playSoundUntilDone("Coin");
      this.costume = "lost";
      this.visible = true;
      yield* this.glide(1, 140, 169);
      yield* this.wait(1);
      yield* this.glide(1, 326, 169);
      this.visible = false;
      return;
      yield;
    }
  }
}
