import { Hud } from "../engine/hud/hud.js";
import { Image } from "../engine/hud/Image/Image.js";
import { Sprite } from "../engine/hud/sprite/sprite.js"

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        this.imageLogo = new Image(this.game, 0, -this.game.height * 0.2, this.game.width * 0.3, this.game.height * 0.1, this.images[0], 1);
        this.imageAkemi = new Image(this.game, (this.width * 0.13), (this.height * 0.25), this.game.width * 0.34, this.game.height * 0.8, this.images[1], 0);
        this.imageTitle = new Image(this.game, (this.width * 0.5), (this.height * -0.5), (this.width * 0.35), this.game.height * 0.20, this.images[2], 1);
        
        this.buttonStart = new Image(this.game, (this.width * 0.6), (this.height * 2.5), (this.width * 0.2), (this.game.height * 0.30), this.images[3], 1, "INICIAR", "PatrickHand", "bold", 7, 1.08, 1.16, "black", true);
        this.butterfly = new Sprite(
            images[4],
            this.game,
            256, /**SPRITE WIDTH*/
            160, /**SPRITE HEIGHT*/
            0.5, /**SIZE X*/
            0.5, /**SIZE Y*/
            (this.game.canvas.width * 1.25), /**DESTINY X */
            (this.game.canvas.height * -0.35), /**DESTINY Y */
            3, /**MAX FRAME X */
            1, /**MAX FRAME Y */
            8 /**FRAME SPEED */
        );

        this.cloud1 = new Image(this.game, (this.width * 0.1), (this.height * 0.05), (this.width * 0.15), (this.game.height * 0.15), this.images[5], 0.9);
        this.cloud2 = new Image(this.game, (this.width * 0.7), (this.height * 0.05), (this.width * 0.12), (this.game.height * 0.12), this.images[5], 0.7);
        this.cloud3 = new Image(this.game, (this.width * 0.6), (this.height * 0.05), (this.width * 0.1), (this.game.height * 0.1), this.images[5], 0.5);
        this.cloud4 = new Image(this.game, (this.width * 0.9), (this.height * 0.05), (this.width * 0.08), (this.game.height * 0.08), this.images[5], 0.3);
        this.cloud5 = new Image(this.game, (this.width * 0.5), (this.height * 0.05), (this.width * 0.06), (this.game.height * 0.06), this.images[5], 0.1);
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}