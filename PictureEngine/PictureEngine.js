/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PictureEngine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PictureEngine/costumes/costume1.svg", {
        x: 264.0270275375375,
        y: 283.1081077027026,
      }),
      new Costume("costume2", "./PictureEngine/costumes/costume2.svg", {
        x: 66.2120366045925,
        y: 68.91664238159075,
      }),
      new Costume("costume3", "./PictureEngine/costumes/costume3.svg", {
        x: 127.96804258410758,
        y: 65.68765890065863,
      }),
      new Costume("costume4", "./PictureEngine/costumes/costume4.svg", {
        x: 142.0555555820464,
        y: 19.48125190734862,
      }),
    ];

    this.sounds = [new Sound("pop", "./PictureEngine/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "shimmy ya" },
        this.whenIReceiveShimmyYa
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShimmyYa() {
    this.goto(0, 0);
    this.moveBehind();
    this.visible = true;
    while (true) {
      for (let i = 0; i < 20; i++) {
        this.effects.ghost -= 5;
        yield;
      }
      yield* this.wait(1);
      this.costume = this.random(1, 4);
      if (this.costumeNumber === 1 && this.random(1, 4) === 1) {
        this.costume = this.random(1, 4);
      }
      if (this.costumeNumber === 2 && this.random(1, 4) === 2) {
        this.costume = this.random(1, 4);
      }
      if (this.costumeNumber === 3 && this.random(1, 4) === 3) {
        this.costume = this.random(1, 4);
      }
      if (this.costumeNumber === 4 && this.random(1, 4) === 4) {
        this.costume = this.random(1, 4);
      }
      yield* this.wait(5);
      for (let i = 0; i < 20; i++) {
        this.effects.ghost += 5;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveStwert() {
    this.visible = false;
  }
}
