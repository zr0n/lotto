import Card from "../classes/Card";
import NumberDisplay from "../classes/NumberDisplay";
import PlayButton from "../classes/PlayButton";
import Credits from "../classes/Credits";

export class MainScene extends Phaser.Scene {
  private numberDisplay: NumberDisplay;
  private cards: Card[];
  private credits: number = 1000;
  private creditsObj: Credits;

  constructor() {
    super({
      key: "MainScene",
    });
  }

  preload(): void {}

  create(): void {
    this.numberDisplay = new NumberDisplay(this, 200, 15);

    this.cards = [];
    this.cards[0] = new Card(this, 150, 200);
    this.cards[1] = new Card(this, 480, 200);
    this.cards[2] = new Card(this, 150, 315);
    this.cards[3] = new Card(this, 480, 315);

    let playButton = new PlayButton(this, 650, 500, 100, 30);
    playButton.setCallback(this.onClickPlay.bind(this));

    this.creditsObj = new Credits(this);
  }

  private onClickPlay(): void {
    this.numberDisplay.randomize();

    this.cards.forEach((card) => {
      if (!card.clean) this.credits--;
    });

    this.credits += this.calcScore();

    this.creditsObj.setCredits(this.credits);
  }

  private calcScore(): number {
    let value = this.numberDisplay.getValue();
    let score = 0;
    this.cards.forEach((card) => {
      if (card.clean) return;

      let cardValue = card.getValue();
      let firstNumbers: number = 0;
      let matches: number = 0;
      let brokeFirstNumbers = false;
      let scoreCard = 0;

      for (let i = 0; i < cardValue.length; i++) {
        let char = cardValue.charAt(i);
        if (char == value.charAt(i)) {
          if (!brokeFirstNumbers) firstNumbers++;
          matches++;
        } else {
          brokeFirstNumbers = true;
        }
      }

      switch (firstNumbers) {
        case 1:
          scoreCard += 1;
          break;
        case 2:
          scoreCard += 3;
          break;
        case 3:
          scoreCard += 16;
          break;
        case 4:
          scoreCard += 100;
          break;
        case 5:
          scoreCard += 200;
          break;
        case 6:
          scoreCard += 1000;
          break;
      }

      switch (matches) {
        case 2:
          scoreCard += 3;
          break;
        case 3:
          scoreCard += 16;
          break;
        case 4:
          scoreCard += 100;
          break;
        case 5:
          scoreCard += 200;
          break;
      }

      score += scoreCard;
    });

    return score;
  }
}
