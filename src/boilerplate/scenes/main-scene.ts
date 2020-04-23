import Card from "../classes/Card";
import NumberDisplay from "../classes/NumberDisplay";

export class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: "MainScene",
    });
  }

  preload(): void {}

  create(): void {
    let numberDisplay = new NumberDisplay(this, 200, 15);

    let card = new Card(this, 150, 200);
    let card2 = new Card(this, 480, 200);
    let card3 = new Card(this, 150, 315);
    let card4 = new Card(this, 480, 315);
  }
}
