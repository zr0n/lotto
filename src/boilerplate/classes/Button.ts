export default class Button {
  private scene: Phaser.Scene;
  private width: number;
  private height: number;
  private x: number;
  private y: number;
  private text: Phaser.GameObjects.Text;
  private onClickCallback: () => void;

  constructor(
    scene: Phaser.Scene,
    x: number = 0,
    y: number = 0,
    width: number = 100,
    height: number = 50
  ) {
    this.scene = scene;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.create();
  }

  create(): void {
    this.text = this.scene.add.text(this.x, this.y, "0");
    this.text.setInteractive(
      new Phaser.Geom.Rectangle(this.x, this.y, this.width, this.height),
      Phaser.Geom.Rectangle.Contains
    );

    this.text.on(
      "pointerdown",
      function () {
        if (this.onClickCallback) this.onClickCallback();
      },
      this
    );
  }

  setText(newText: string): void {
    this.text.setText(newText);
  }

  setCallback(newCallback: () => void): void {
    this.onClickCallback = newCallback;
  }
}
