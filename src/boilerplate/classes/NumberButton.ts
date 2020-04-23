import Button from "./Button";

export default class NumberButton extends Button {
  public value: number;

  private callbackSetNumber: () => void;

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
    this.setCallback(() => {
      this.increaseNumber();
      if (this.callbackSetNumber) this.callbackSetNumber();
    });
  }

  private increaseNumber(): void {
    this.value++;
    if (this.value > 9) this.value = 0;

    this.setText(this.value.toString());
  }

  randomize(): void {
    this.value = Math.floor(Math.random() * 10);
    this.setText(this.value.toString());
  }

  clear() {
    this.value = 0;
    this.setText(this.value.toString());
  }

  onSetNumber(callback: () => void) {
    this.callbackSetNumber = callback;
  }
}
