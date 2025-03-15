/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.png", {
        x: 201,
        y: 124,
      }),
      new Costume(
        "open-and-close-treasure-chest-in-pixel-art-style-vector",
        "./Sprite3/costumes/open-and-close-treasure-chest-in-pixel-art-style-vector.svg",
        { x: 25.269023649142355, y: 25.250911786799975 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "chest" }, this.whenIReceiveChest),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "chest" },
        this.whenIReceiveChest2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
    ];
  }

  *whenIReceiveChest() {
    this.goto(113, -95);
    this.visible = true;
    this.costume = "costume1";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    for (let i = 0; i < 3; i++) {
      this.stage.vars.chest = 0;
      yield;
    }
    while (true) {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.broadcast("chest");
        this.stage.vars.chest++;
        yield* this.wait(120);
        this.broadcast("did");
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveChest2() {
    while (true) {
      if (
        this.touching(this.sprites["PlayerDat"].andClones()) &&
        this.toNumber(this.stage.vars.invincible) === 0
      ) {
        this.costume =
          "open-and-close-treasure-chest-in-pixel-art-style-vector";
        this.broadcast("did");
        yield* this.wait(0.5);
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    if (this.touching(Color.rgb(132, 129, 167))) {
      this.visible = false;
    }
  }

  *whenIReceiveMessage2() {
    if (this.touching(Color.rgb(73, 69, 67))) {
      this.visible = false;
    }
  }
}
