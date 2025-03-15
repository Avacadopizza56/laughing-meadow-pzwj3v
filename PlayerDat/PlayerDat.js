/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerDat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("IDLE", "./PlayerDat/costumes/IDLE.png", { x: 42, y: -108 }),
      new Costume("LEFT EYE LOOK", "./PlayerDat/costumes/LEFT EYE LOOK.png", {
        x: 42,
        y: -108,
      }),
      new Costume(
        "LEFT EYE WALK 1",
        "./PlayerDat/costumes/LEFT EYE WALK 1.png",
        { x: 42, y: -108 }
      ),
      new Costume(
        "LEFT EYE WALK 2",
        "./PlayerDat/costumes/LEFT EYE WALK 2.png",
        { x: 42, y: -108 }
      ),
      new Costume(
        "LEFT EYE WALK 3",
        "./PlayerDat/costumes/LEFT EYE WALK 3.png",
        { x: 42, y: -108 }
      ),
      new Costume(
        "LEFT EYE WALK 4",
        "./PlayerDat/costumes/LEFT EYE WALK 4.png",
        { x: 42, y: -108 }
      ),
      new Costume(
        "LEFT EYE WALK 5",
        "./PlayerDat/costumes/LEFT EYE WALK 5.png",
        { x: 44, y: -108 }
      ),
      new Costume(
        "LEFT EYE WALK 6 END",
        "./PlayerDat/costumes/LEFT EYE WALK 6 END.png",
        { x: 42, y: -108 }
      ),
      new Costume(
        "LEFT EYE SLASH 1",
        "./PlayerDat/costumes/LEFT EYE SLASH 1.png",
        { x: 38, y: -108 }
      ),
      new Costume(
        "LEFT EYE SLASH 2",
        "./PlayerDat/costumes/LEFT EYE SLASH 2.png",
        { x: 38, y: -108 }
      ),
      new Costume(
        "LEFT EYE SLASH 3 END",
        "./PlayerDat/costumes/LEFT EYE SLASH 3 END.png",
        { x: 38, y: -108 }
      ),
      new Costume(
        "LEFT EYE STAB 1",
        "./PlayerDat/costumes/LEFT EYE STAB 1.png",
        { x: 38, y: -108 }
      ),
      new Costume(
        "LEFT EYE STAB 2",
        "./PlayerDat/costumes/LEFT EYE STAB 2.png",
        { x: 38, y: -108 }
      ),
      new Costume("IDLE2", "./PlayerDat/costumes/IDLE2.svg", {
        x: 1.2434210526325842,
        y: -59.17434210526312,
      }),
    ];

    this.sounds = [new Sound("C2 Guitar", "./PlayerDat/sounds/C2 Guitar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "did" }, this.whenIReceiveDid),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new level" },
        this.whenIReceiveNewLevel
      ),
      new Trigger(Trigger.BROADCAST, { name: "lld" }, this.whenIReceiveLld),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stwert" },
        this.whenIReceiveStwert7
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.y += this.toNumber(this.stage.vars.fsqwsf);
      this.stage.vars.fsqwsf = -10;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      yield;
    }
  }

  *whenIReceiveDid() {
    this.goto(-184, 7);
  }

  *whenIReceiveStwert() {
    this.stage.vars.invincible = 0;
    this.size = 160;
    this.goto(-184, 7);
    while (true) {
      if (!this.keyPressed("any")) {
        this.costume = "LEFT EYE LOOK";
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.costume = "LEFT EYE WALK 1";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 2";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 2";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 4";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 5";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 6 END";
        yield* this.wait(0.05);
      }
      if (this.keyPressed("left arrow")) {
        this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
        this.direction = -90;
        this.costume = "LEFT EYE WALK 1";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 2";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 2";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 4";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 5";
        yield* this.wait(0.05);
        this.costume = "LEFT EYE WALK 6 END";
        yield* this.wait(0.05);
      }
      if (this.toBoolean(/* TODO: Implement microbit_isButtonPressed */ null)) {
        this.stage.vars.myVariable = this.random(1, 2);
        while (
          !this.toBoolean(/* TODO: Implement microbit_isButtonPressed */ null)
        ) {
          yield;
        }
        if (this.toNumber(this.stage.vars.myVariable) === 2) {
          this.costume = "LEFT EYE STAB 1";
          yield* this.wait(0.05);
          this.costume = "LEFT EYE STAB 2";
          this.stage.vars.myVariable = 0;
          this.broadcast("message1");
        }
        if (this.toNumber(this.stage.vars.myVariable) === 1) {
          this.costume = "LEFT EYE SLASH 1";
          yield* this.wait(0.05);
          this.costume = "LEFT EYE SLASH 2";
          yield* this.wait(0.05);
          this.costume = "LEFT EYE SLASH 3 END";
          this.stage.vars.myVariable = 0;
          this.broadcast("message1");
        }
      }
      yield;
    }
  }

  *whenIReceiveStwert2() {
    while (true) {
      if (this.touching(Color.rgb(252, 255, 240))) {
        this.y += 10;
      }
      yield;
    }
  }

  *whenIReceiveStwert3() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenIReceiveStwert4() {
    this.visible = true;
  }

  *whenIReceiveStwert5() {
    this.moveAhead();
    while (true) {
      if (this.touching(this.sprites["ExitSignExe"].andClones())) {
        this.broadcast("new level");
      }
      yield;
    }
  }

  *whenIReceiveNewLevel() {
    this.goto(-184, 7);
    this.visible = false;
  }

  *whenIReceiveLld() {
    this.goto(-184, 7);
    this.visible = true;
  }

  *whenIReceiveStwert6() {
    while (true) {
      if (this.touching(Color.rgb(76, 175, 80))) {
        this.y += 10;
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.stage.vars.invincible = 1;
    for (let i = 0; i < 10; i++) {
      null;
      yield;
    }
    this.stage.vars.invincible = 0;
  }

  *whenIReceiveStwert7() {
    this.stage.vars.Cat = 0;
    while (true) {
      if (
        this.x === -258 &&
        this.toNumber(this.stage.vars.advancement) === 0 &&
        this.toNumber(this.stage.vars.Cat) === 0
      ) {
        this.broadcast("other side");
      }
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.broadcast("LOST");
  }

  *whenKey0Pressed() {
    this.broadcast("stwert");
  }
}
