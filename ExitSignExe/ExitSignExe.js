/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ExitSignExe extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ExitSignExe/costumes/costume1.svg", {
        x: -198.3909408339748,
        y: -81.4190402106077,
      }),
    ];

    this.sounds = [new Sound("pop", "./ExitSignExe/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "LOST" }, this.whenIReceiveLost),
    ];
  }

  *whenIReceiveStwert() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLost() {
    this.visible = false;
  }
}
