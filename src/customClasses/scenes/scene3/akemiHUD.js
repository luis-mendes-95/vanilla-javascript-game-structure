import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { GardenSign } from "../../gardenSign.js";
import { ButtonTree } from "../../buttonTree.js";

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

        this.buttonTree = new ButtonTree(
            this.game, /**GAME */
            (this.width * - 0.01), /**X */
            (this.height * - 0.08), /**Y */
            (this.width * 0.5), /**WIDTH */
            (this.game.height * 0.85), /**HEIGHT */
            0, /**ROTATION */
            this.images[2], /**IMAGE */
            this.images[3], /**HOVER IMAGE */
            0.99, /**OPACITY */
            "", /**TEXT */
            25, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.buttonGarden = new ButtonTree(
            this.game, /**GAME */
            0, /**X */
            (this.height * 0.55), /**Y */
            (this.width), /**WIDTH */
            (this.game.height * 0.45), /**HEIGHT */
            0, /**ROTATION */
            this.images[4], /**IMAGE */
            this.images[5], /**HOVER IMAGE */
            0.99, /**OPACITY */
            "", /**TEXT */
            25, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
        );
        
        this.buttonFlowers = new ButtonTree(
            this.game, /**GAME */
            (this.width * 0.44), /**X */
            (this.height * 0.2), /**Y */
            (this.width * 0.6), /**WIDTH */
            (this.game.height * 0.55), /**HEIGHT */
            0, /**ROTATION */
            this.images[6], /**IMAGE */
            this.images[7], /**HOVER IMAGE */
            0.99, /**OPACITY */
            "", /**TEXT */
            25, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}