import Phaser from "phaser";
import events from "./EventCenter";
import Enemigo from "./Enemigo";

export default class Objetos extends Phaser.Physics.Arcade.Sprite {
  jugador;

  body;

  recolectables;

  puerta;

  llave;

  palanca;

  ojos;

  musicaAmbiente;

  puertaAbierta;

  madera;

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.body.setImmovable(true);
    this.body.allowGravity = false;
  }

  recolectarLlave() {
    this.puertaAbierta.play();
    this.llave.disableBody(true, true);
    this.recolectables += 1;
    events.emit("mostrarLlave");
    this.puerta.setTexture("puerta-abierta");
    console.log("llave recolectada");
    setTimeout(() => {
      this.ojos = new Enemigo(this, 1350, 300, "ojos")
        .setPipeline("Light2D")
        .setImmovable(true);
      this.ojos.desactivarGravedad();
      this.ojos.aparicionOjos();
    }, 2000);
  }

  recolectarPalanca() {
    this.madera.play();
    this.palanca.disableBody(true, true);
    this.recolectables += 1;
    events.emit("mostrarLlave");
    events.emit("colisionConPalanca");
    this.puerta.setTexture("puerta-abierta");
    console.log("palanca recolectada");
    console.log(`recolectables${this.recolectables}`);
  }
}
