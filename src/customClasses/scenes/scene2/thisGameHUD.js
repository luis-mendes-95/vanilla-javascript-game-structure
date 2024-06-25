import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/image/image.js";
import { Text } from "../../../engine/hud/text/text.js";

export class thisGameHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        let minDimension = Math.min(this.game.width, this.game.height);
        let fontSize = minDimension * 0.090;

        this.currentGameText = " "

        if(!this.game.stagesDone.includes("TREES")){
            this.currentGameText += " POMAR "
        }

        if(!this.game.stagesDone.includes("FLOWERS")){
            this.currentGameText += " HORTA "
        }

        if(!this.game.stagesDone.includes("GARDEN")){
            this.currentGameText += " JARDIM "
        }     

        /**FARM SIGN */
        this.farmSign = new Image(
            this.game, /**GAME */
            (this.game.width * 0.7), /**X */
            (this.height * -0.18), /**Y */
            (this.game.width * 0.2), /**WIDTH */
            (this.game.height * 0.25), /**HEIGHT */
            0, /**ROTATION */
            this.images[1], /**IMAGE */
            1, /**OPACITY */
            [
                "",
                "  CLIQUE EM UMA DAS ÁREAS:  ",
                this.currentGameText,
            ], /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.4, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "column", /**TEXT LAYOUT */
            null, /**UNIQUE TEXT */
            (this.game.width * 0.032), /**UNIQUE TEXT X */
            (this.height * 0.93), /**UNIQUE TEXT Y */
            false, // cursorVisible
            0, // textOffsetX
            -(this.game.height * 0.005)   // textOffsetY
        );

        this.buttonTree = new Image(
            this.game, /**GAME */
            (this.game.width * -0.04), /**X */
            (this.height * -0.05), /**Y */
            (this.game.width * 0.5), /**WIDTH */
            (this.game.height * 0.8), /**HEIGHT */
            0, /**ROTATION */
            this.images[2],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonTreeHover = new Image(
            this.game, /**GAME */
            (this.game.width * -0.04), /**X */
            (this.height * -0.05), /**Y */
            (this.game.width * 0.5), /**WIDTH */
            (this.game.height * 0.8), /**HEIGHT */
            0, /**ROTATION */
            this.images[3],  /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonGarden = new Image(
            this.game, /**GAME */
            (this.game.width * 0), /**X */
            (this.height * 0.5), /**Y */
            (this.game.width * 1), /**WIDTH */
            (this.game.height * 0.5), /**HEIGHT */
            0, /**ROTATION */
            this.images[4],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonGardenHover = new Image(
            this.game, /**GAME */
            (this.game.width * 0), /**X */
            (this.height * 0.49), /**Y */
            (this.game.width * 1), /**WIDTH */
            (this.game.height * 0.51), /**HEIGHT */
            0, /**ROTATION */
            this.images[5],  /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonFlowers = new Image(
            this.game, /**GAME */
            (this.game.width * 0.4), /**X */
            (this.height * 0.2), /**Y */
            (this.game.width * 0.6), /**WIDTH */
            (this.game.height * 0.5), /**HEIGHT */
            0, /**ROTATION */
            this.images[6],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonFlowersHover = new Image(
            this.game, /**GAME */
            (this.game.width * 0.4), /**X */
            (this.height * 0.2), /**Y */
            (this.game.width * 0.6), /**WIDTH */
            (this.game.height * 0.5), /**HEIGHT */
            0, /**ROTATION */
            this.images[7],  /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.75, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}