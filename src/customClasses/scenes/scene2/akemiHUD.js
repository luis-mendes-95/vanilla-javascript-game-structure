import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/Image/Image.js";
import { Sprite } from "../../../engine/hud/sprite/sprite.js"
import { DialogueBox } from "../../../engine/hud/dialogueBox/dialogueBox.js";
import { inputBox } from "../../../engine/hud/inputBox/inputBox.js";

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        this.imageAkemi = new Image(this.game, (this.width * 0.08), (this.height * 0.25), this.game.width * 0.34, this.game.height * 0.8, 0, this.images[1], 0);
        
        this.butterfly = new Sprite(
            images[4],
            this.game,
            256, /**SPRITE WIDTH*/
            160, /**SPRITE HEIGHT*/
            0.5, /**SIZE X*/
            0.5, /**SIZE Y*/
            (this.game.canvas.width * 1.42), /**DESTINY X */
            (this.game.canvas.height * -0.62), /**DESTINY Y */
            3, /**MAX FRAME X */
            1, /**MAX FRAME Y */
            8 /**FRAME SPEED */
        );

        this.cloud1 = new Image(this.game, (this.width * 0.1), (this.height * 0.05), (this.width * 0.15), (this.game.height * 0.15), 0, this.images[5], 0.9);
        this.cloud2 = new Image(this.game, (this.width * 0.7), (this.height * 0.05), (this.width * 0.12), (this.game.height * 0.12), 0, this.images[5], 0.7);
        this.cloud3 = new Image(this.game, (this.width * 0.6), (this.height * 0.05), (this.width * 0.1), (this.game.height * 0.1), 0, this.images[5], 0.5);
        this.cloud4 = new Image(this.game, (this.width * 0.9), (this.height * 0.05), (this.width * 0.08), (this.game.height * 0.08), 0, this.images[5], 0.3);
        this.cloud5 = new Image(this.game, (this.width * 0.5), (this.height * 0.05), (this.width * 0.06), (this.game.height * 0.06), 0, this.images[5], 0.4);
   
        this.dialogueText = ["OLÁ, MEU NOME É AKEMI!", "QUAL É O SEU NOME?"]
        this.dialogueBox = new DialogueBox(this.game, (this.width * 0.35), (this.height * -0.5), (this.width * 0.42), (this.game.height * 0.20), 0, this.images[6], 0, this.dialogueText, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.dialogueArrow = new Image(this.game, (this.width * 0.327), (this.height * -0.5), (this.width * 0.05), (this.game.height * 0.10), 0, this.images[7], 0);
   
        this.inputText = new inputBox(this.game, (this.width * 0.35), (this.height * 0.5), (this.width * 0.42), (this.game.height * 0.20), 0, this.images[6], 1, null, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);

        this.namePanel = new Image(this.game, (this.width * 1.4), (this.height * 1.9), (this.width * 0.42), (this.game.height * 0.60), 110, this.images[8], 1, "", "PatrickHand", "bold", 7, 1.09, 1.56, "black", false);
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}