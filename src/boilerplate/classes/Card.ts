import NumberButton from "./NumberButton";
import Button from "./Button";

export default class Card {
  public clean;

  private scene: Phaser.Scene;
  private x: number;
  private y: number;
  private buttons: NumberButton[];
  private firstPickButton: Button;
  private clearButton: Button;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.createNumberButtons();
    this.createOptionButtons();
  }

  createNumberButtons() {
    this.buttons = [];
    for (let i = 0; i < 6; i++) {
      let button: NumberButton = new NumberButton(
        this.scene,
        0,
        this.x + i * 50,
        this.y,
        50,
        50
      );

      button.onSetNumber(() => {
        this.clean = false;
      });

      this.buttons.push(button);
    }
  }

  createOptionButtons() {
    this.firstPickButton = new Button(
      this.scene,
      this.x + 90,
      this.y + 50,
      100,
      40
    );
    this.firstPickButton.setText("Random");
    this.firstPickButton.setCallback(this.onClickFirstPick.bind(this));

    this.clearButton = new Button(
      this.scene,
      this.x + 200,
      this.y + 50,
      100,
      40
    );
    this.clearButton.setText("Clear");
    this.clearButton.setCallback(this.onClickClearButton.bind(this));

    const style = {
      font: "bold 14px Arial",
      fill: "#fff",
    };

    this.firstPickButton.setStyle(style);
    this.clearButton.setStyle(style);

    this.firstPickButton.setInnerPosition(this.x + 115);
  }

  onClickFirstPick() {
    this.clean = false;
    this.buttons.forEach((button) => {
      button.randomize();
    });
  }
  onClickClearButton() {
    this.clean = true;
    this.buttons.forEach((button) => {
      button.clear();
    });
  }
  getValue(): string {
    let value: string = "";

    this.buttons.forEach((button) => {
      value += button.value.toString();
    });

    return value;
  }
}
