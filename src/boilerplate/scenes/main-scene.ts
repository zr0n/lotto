import Button from "../classes/Button";

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
    let button: Button = new Button(this);
    button.setText("Click");
    button.setCallback(() => console.log("Clicked"));
  }
}
