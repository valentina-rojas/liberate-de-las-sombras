import Phaser from "phaser";
// import events from "./EventCenter";
import { getPhrase } from "../services/traducciones";

export default class Ajustes extends Phaser.Scene {
  constructor() {
    super("ajustes");
  }

  init(language) {
    this.language = language;
  }

  create() {
    this.add.image(960, 540, "ajustes");

    const botonVolver = this.add
      .text(1000, 850, getPhrase("volver"), {
        fontSize: "60px",
        backgroundColor: "#000000",
      })
      .setOrigin(0.5)
      .setInteractive();

    botonVolver.on("pointerover", () => {
      botonVolver.setStyle({ backgroundColor: "#888888" });
    });

    botonVolver.on("pointerout", () => {
      botonVolver.setStyle({ backgroundColor: "#000000" });
    });

    botonVolver.on("pointerup", () => {
      this.scene.start("menu");
    });
  }
}
