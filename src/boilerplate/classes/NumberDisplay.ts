export default class NumberDisplay {
  private text: Phaser.GameObjects.Text;
  private scene: Phaser.Scene;
  private x: number;
  private y: number;
  private value: number = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.create();
  }

  create() {
    const style = {
      font: "bold 72px Arial",
      fill: "#ff00ff",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };
    this.text = this.scene.add.text(this.x, this.y, this.getValue(), style);
  }

  private zeroFill(value: number): string {
    return ("000000" + value).slice(-6);
  }

  public getValue(): string {
    return this.zeroFill(this.value);
  }

  public randomize(): void {
    this.value = Math.ceil(Math.random() * 999999);
    this.text.setText(this.getValue());
  }
}
