import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/Image/Image.js";
import { ImageHover } from "../../../engine/hud/ImageHover/ImageHover.js";
import { Sprite } from "../../../engine/hud/sprite/sprite.js"
import { DialogueBox } from "../../../engine/hud/dialogueBox/dialogueBox.js";
import { GardenSign } from "../../gardenSign.js";

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);
      
        this.cloud1 = new Image(this.game, (this.width * 0.1), (this.height * 0.05), (this.width * 0.15), (this.game.height * 0.15), 0, this.images[0], 0.9);
        this.cloud2 = new Image(this.game, (this.width * 0.7), (this.height * 0.05), (this.width * 0.12), (this.game.height * 0.12), 0, this.images[0], 0.7);
        this.cloud3 = new Image(this.game, (this.width * 0.6), (this.height * 0.05), (this.width * 0.1), (this.game.height * 0.1), 0, this.images[0], 0.5);
        this.cloud4 = new Image(this.game, (this.width * 0.9), (this.height * 0.05), (this.width * 0.08), (this.game.height * 0.08), 0, this.images[0], 0.3);
        this.cloud5 = new Image(this.game, (this.width * 0.5), (this.height * 0.05), (this.width * 0.06), (this.game.height * 0.06), 0, this.images[0], 0.4);
   
        this.dialogueText = ["CLIQUE EM UMA DAS ÁREAS:", "POMAR, HORTA, JARDIM"]
        this.dialogueBox = new GardenSign(
            this.game,  /**GAME*/
            (this.width * 0.62), /**X*/
            (this.height * 0.2), /**Y*/
            (this.width * 0.32), /**WIDTH*/
            (this.game.height * 0.25), /**HEIGHT*/
            0, /**ROTATION*/
            this.images[1], /**IMAGE*/
            1, /**OPACITY */
            this.dialogueText,/**TEXT*/
            36, /**TEXT SPACING */
            "PatrickHand", /**FONT*/
            "bold", /**FONT WEIGHT*/
            4.8, /**FONT SIZE*/
            (this.width * 0.62), /**TEXT X*/
            (this.height * 0.2), /**TEXT Y*/
            "black", /**TEXT COLOR*/
            true /**MOUSE HOVER*/
        );

        this.buttonTree = new ImageHover(this.game, (this.width * - 0.01), (this.height * - 0.08), (this.width * 0.5), (this.game.height * 0.85), 0, this.images[2], this.images[3], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.buttonGarden = new ImageHover(this.game, 0, (this.height * 0.55), (this.width), (this.game.height * 0.45), 0, this.images[4], this.images[5], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.buttonFlowers = new ImageHover(this.game, (this.width * 0.44), (this.height * 0.2), (this.width * 0.6), (this.game.height * 0.55), 0, this.images[6], this.images[7], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}