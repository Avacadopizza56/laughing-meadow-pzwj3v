/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (18)",
        "./Sprite1/costumes/pixil-frame-0 (18).svg",
        { x: -2, y: -24.214633382161423 }
      ),
      new Costume(
        "pixil-frame-0 (19)",
        "./Sprite1/costumes/pixil-frame-0 (19).svg",
        { x: -2, y: -24.19905448409358 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "START_PLAY_MESSAGE" },
        this.whenIReceiveStartPlayMessage
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(Trigger.BROADCAST, { name: "B" }, this.whenIReceiveB),
    ];
  }

  *whenIReceiveStartPlayMessage() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.size += 10;
      yield* this.wait(0.5);
      this.size -= 10;
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "pixil-frame-0 (18)";
    this.visible = false;
  }

  *whenIReceiveStwert() {
    this.visible = false;
  }

  *whenIReceiveB() {
    this.costume = "pixil-frame-0 (19)";
  }
}
