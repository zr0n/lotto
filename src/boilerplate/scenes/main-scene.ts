import Card from "../classes/Card";
import NumberDisplay from "../classes/NumberDisplay";
import PlayButton from "../classes/PlayButton";

export class MainScene extends Phaser.Scene {
  private numberDisplay: NumberDisplay;
  private card: Card;
  private card2: Card;
  private card3: Card;
  private card4: Card;

  constructor() {
    super({
      key: "MainScene",
    });
  }

  preload(): void {}

  create(): void {
    this.numberDisplay = new NumberDisplay(this, 200, 15);

    this.card = new Card(this, 150, 200);
    this.card2 = new Card(this, 480, 200);
    this.card3 = new Card(this, 150, 315);
    this.card4 = new Card(this, 480, 315);

    let playButton = new PlayButton(this, 650, 500, 100, 30);
    playButton.setCallback(this.onClickPlay.bind(this));
  }

  onClickPlay(): void {
    this.numberDisplay.randomize();
  }
}
