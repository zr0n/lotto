import Button from "./Button";

export default class NumberButton extends Button {
  public value: number;
  constructor(
    scene: Phaser.Scene,
    initialValue: number = 0,
    x: number = 0,
    y: number = 0,
    width: number = 100,
    height: number = 50
  ) {
    super(scene, x, y, width, height);
    this.value = initialValue;
    this.setText(this.value.toString());
    this.setCallback(this.increaseNumber);
  }

  increaseNumber(): void {
    this.value++;
    if (this.value > 9) this.value = 0;

    this.setText(this.value.toString());
  }
}
