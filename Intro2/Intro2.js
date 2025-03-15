/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Intro2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Intro2/costumes/costume1.svg", {
        x: 66.09007948062157,
        y: 151.8904538401749,
      }),
    ];

    this.sounds = [new Sound("pop", "./Intro2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "shimmy ya" },
        this.whenIReceiveShimmyYa
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "START_PLAY_MESSAGE" },
        this.whenIReceiveStartPlayMessage
      ),
    ];
  }

  *whenIReceiveShimmyYa() {
    this.visible = true;
    this.size = 98;
    while (true) {
      if (this.touching("mouse")) {
        this.size = 100;
        this.costume = "costume2";
      } else {
        this.size = 98;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartPlayMessage() {
    this.visible = false;
  }
}
