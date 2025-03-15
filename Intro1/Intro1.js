/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Intro1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Intro1/costumes/costume1.svg", {
        x: 56.00001000000006,
        y: -54.999990000000025,
      }),
      new Costume("costume2", "./Intro1/costumes/costume2.svg", {
        x: 56.00001000000006,
        y: -54.999990000000025,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Intro1/sounds/pop.wav"),
      new Sound("Coin", "./Intro1/sounds/Coin.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "shimmy ya" },
        this.whenIReceiveShimmyYa
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "START_PLAY_MESSAGE" },
        this.whenIReceiveStartPlayMessage
      ),
    ];

    this.audioEffects.volume = 0;
  }

  *whenIReceiveShimmyYa() {
    this.visible = true;
    this.size = 98;
    while (true) {
      if (this.touching("mouse")) {
        this.direction = 90;
        this.size = 100;
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
        this.size = 98;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("START_PLAY_MESSAGE");
  }

  *whenIReceiveStartPlayMessage() {
    this.visible = false;
  }
}
