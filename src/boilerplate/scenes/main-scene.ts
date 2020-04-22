import NumberButton from "../classes/NumberButton";

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;
  private test: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "MainScene",
    });
  }

  preload(): void {
    this.load.image("myImage", "src/boilerplate/assets/phaser.png");
  }

  create(): void {
    let button: NumberButton = new NumberButton(this, 9, 375, 275, 50, 50);
  }
}
