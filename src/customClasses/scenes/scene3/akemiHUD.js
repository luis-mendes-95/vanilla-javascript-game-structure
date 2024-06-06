import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { ImageHover } from "../../../engine/hud/imageHover/imageHover.js";
import { Sprite } from "../../../engine/hud/sprite/sprite.js"
import { DialogueBox } from "../../../engine/hud/dialogueBox/dialogueBox.js";
import { GardenSign } from "../../gardenSign.js";

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);
      
        this.cloud1 = new Image(
            this.game, /**GAME */
            (this.width * 0.1), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.15), /**WIDTH */
            (this.game.height * 0.15), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[0], /**IMAGE */
            0.9, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud2 = new Image(
            this.game,  /**GAME */
            (this.width * 0.7), /**X */
            (this.height * 0.05), /**Y */    
            (this.width * 0.12), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.images[0], /**IMAGE */
            0.7, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
        this.cloud3 = new Image(
            this.game,  /**GAME */
            (this.width * 0.6), /**X */
            (this.height * 0.05), /**Y */  
            (this.width * 0.1), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[0], /**IMAGE */
            0.5, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud4 = new Image(
            this.game, /**GAME */
            (this.width * 0.9), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.08), /**WIDTH */
            (this.game.height * 0.08), /**HEIGHT */
            0, /**ROTATION */
            this.images[0], /**IMAGE */
            0.3, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */

        );
        this.cloud5 = new Image(
            this.game, /**GAME */
            (this.width * 0.5), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.06), /**WIDTH */
            (this.game.height * 0.06), /**HEIGHT */
            0, /**ROTATION */
            this.images[0], /**IMAGE */
            0.4, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
   
        this.dialogueText = [
            "CLIQUE EM UMA DAS ÁREAS:", /*TEXTS[0]*/
            "POMAR, HORTA, JARDIM" /*TEXTS[1]*/
        ]

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
            (this.height * 0.07), /**TEXT SPACING */
            "PatrickHand", /**FONT*/
            "bold", /**FONT WEIGHT*/
            4.7, /**FONT SIZE*/
            (this.width * 0.64), /**TEXT X*/
            (this.height * 0.31), /**TEXT Y*/
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