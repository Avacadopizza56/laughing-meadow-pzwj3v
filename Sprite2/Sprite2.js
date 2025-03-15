/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 255.99999999999983,
        y: 8,
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 255.99999999999983,
        y: 8,
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.svg", {
        x: 255.99999999999983,
        y: 8,
      }),
      new Costume("costume4", "./Sprite2/costumes/costume4.svg", {
        x: 255.99999999999983,
        y: 8,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "START_PLAY_MESSAGE" },
        this.whenIReceiveStartPlayMessage
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartPlayMessage() {
    this.broadcast("stwert");
  }
}
