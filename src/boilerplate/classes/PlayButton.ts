import Button from "./Button";

export default class PlayButton extends Button {
  constructor(
    scene: Phaser.Scene,
    x: number = 0,
    y: number = 0,
    width: number = 100,
    height: number = 50
  ) {
    super(scene, x, y, width, height);

    this.setText("Play");

    const style = {
      font: "bold 14px Arial",
      fill: "#fff",
    };
    this.setStyle(style);
  }
}
