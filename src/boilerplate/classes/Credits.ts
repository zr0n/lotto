export default class Credits {
  private scene: Phaser.Scene;
  private creditsLabel: Phaser.GameObjects.Text;
  private creditsText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createTexts();
  }

  createTexts() {
    const style = {
      font: "bold 14px Arial",
      fill: "#fff",
    };

    this.creditsLabel = this.scene.add.text(400, 500, "Credits", style);
    this.creditsText = this.scene.add.text(400, 525, "1000", style);

    this.setCredits(1000);
  }

  setCredits(credits: number) {
    this.creditsText.setText(credits.toString());
  }
}
