export default class Button {
  private scene: Phaser.Scene;
  private width: number;
  private height: number;
  private x: number;
  private y: number;
  private background: Phaser.GameObjects.Graphics;
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
    //background
    this.background = this.scene.add.graphics();
    this.background.fillStyle(0xff00ff, 1.0);
    this.background.fillRect(this.x, this.y, this.width, this.height);
    this.background.strokeRect(this.x, this.y, this.width, this.height);

    var style = {
      font: "bold 32px Arial",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };
    this.text = this.scene.add.text(
      this.x + this.width / 3,
      this.y + this.height / 5,
      "0",
      style
    );
    this.text.setInteractive(
      new Phaser.Geom.Rectangle(-13, -13, this.width, this.height),
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
