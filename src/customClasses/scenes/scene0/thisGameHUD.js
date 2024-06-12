import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Text } from "../../../engine/hud/text/text.js";

export class thisGameHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        let minDimension = Math.min(this.game.width, this.game.height);
        let fontSize = minDimension * 0.090;
     
       this.buttonStartGame = new Image(
            this.game, /**GAME */
            (this.width * 0.30), /**X */
            (this.height * 1.35), /**Y */
            (this.width * 0.40), /**WIDTH */
            (this.game.height * 0.26), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            "NEW GAME", /**TEXT */
            50, /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "row"
        );

        this.buttonLoadGame = new Image(
            this.game, /**GAME */
            (this.width * 0.30), /**X */
            (this.height * 0.65), /**Y */
            (this.width * 0.40), /**WIDTH */
            (this.game.height * 0.26), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            "LOAD GAME", /**TEXT */
            50, /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.width * 0.365), /**TEXT X */
            (this.height * 0.81), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "row"
        );

        this.buttonOptions = new Image(
            this.game, /**GAME */
            (this.width * 0.30), /**X */
            (this.height * 1.65), /**Y */
            (this.width * 0.40), /**WIDTH */
            (this.game.height * 0.26), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            "⚙️PTIONS", /**TEXT */
            50, /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.width * 0.365), /**TEXT X */
            (this.height * 1.81), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "row"
        );

        this.gameTitle = new Text(
            game, // game instance
            this.width * 0.01, // x position
            this.height * -0.10, // y position
            "Fresh Blood", // text
            10, // text spacing
            "font1942", // font
            "bold", // font weight
            this.game.height * 0.135, // font size
            "brown", // text color
            true // mouse hover
        );

        
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}