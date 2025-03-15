/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mushyman extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 - 2025-02-25T163222",
        "./Mushyman/costumes/pixil-frame-0 - 2025-02-25T163222.png",
        { x: 8, y: 8 }
      ),
      new Costume(
        "pixil-frame-0 - 2025-02-25T163336",
        "./Mushyman/costumes/pixil-frame-0 - 2025-02-25T163336.png",
        { x: 10, y: 9 }
      ),
      new Costume(
        "pixil-frame-0 - 2025-02-25T163357",
        "./Mushyman/costumes/pixil-frame-0 - 2025-02-25T163357.png",
        { x: 8, y: 9 }
      ),
      new Costume(
        "pixil-frame-0 - 2025-02-25T163414",
        "./Mushyman/costumes/pixil-frame-0 - 2025-02-25T163414.png",
        { x: 10, y: 8 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Mushyman/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
