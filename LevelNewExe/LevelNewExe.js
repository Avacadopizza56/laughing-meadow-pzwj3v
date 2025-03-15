/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LevelNewExe extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LevelNewExe/costumes/costume1.svg", {
        x: 256.8055725097656,
        y: 179.0000000000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./LevelNewExe/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new level" },
        this.whenIReceiveNewLevel
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNewLevel() {
    this.moveAhead();
    this.visible = true;
    yield* this.wait(3);
    for (let i = 0; i < 19; i++) {
      this.effects.ghost += 5;
      yield;
    }
    yield* this.broadcastAndWait("lld");
    this.visible = false;
    this.effects.ghost = 0;
  }
}
