/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sky", "./Stage/costumes/sky.svg", {
        x: 241.9223753443222,
        y: 179.49986426960018,
      }),
      new Costume(
        "Screenshot 2025-01-03 152603",
        "./Stage/costumes/Screenshot 2025-01-03 152603.svg",
        { x: 214.14494729697086, y: 96.8956968121596 }
      ),
      new Costume(
        "Screenshot 2025-01-04 115423",
        "./Stage/costumes/Screenshot 2025-01-04 115423.svg",
        { x: 294.2522522522518, y: 211.03852689899182 }
      ),
      new Costume(
        "pixil-frame-0 (14)",
        "./Stage/costumes/pixil-frame-0 (14).svg",
        { x: 172.05898118749076, y: 72.52042290745194 }
      ),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [
      new Sound("1", "./Stage/sounds/1.wav"),
      new Sound("2", "./Stage/sounds/2.wav"),
      new Sound("Video Game 1", "./Stage/sounds/Video Game 1.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "other side" },
        this.whenIReceiveOtherSide
      ),
    ];

    this.vars.myVariable = 0;
    this.vars.fsqwsf = -10;
    this.vars.level = 0;
    this.vars.cat = 0;
    this.vars.chest = 0;
    this.vars.invincible = 0;
    this.vars.advancement = 3;
    this.vars.Cat = 0;
  }

  *whenGreenFlagClicked() {
    this.broadcast("stwert");
  }

  *whenIReceiveStwert() {
    this.effects.ghost = 0;
    this.costume = "sky";
    while (true) {
      yield* this.wait(1);
      yield* this.playSoundUntilDone(this.random(1, 2));
      yield;
    }
  }

  *whenIReceiveOtherSide() {
    this.costume = "backdrop1";
  }
}
