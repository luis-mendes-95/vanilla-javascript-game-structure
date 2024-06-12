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
            (this.game.width * 0.6), /**X */
            (this.height * 1), /**Y */
            (this.game.width * 0.2), /**WIDTH */
            (this.game.height * 0.3), /**HEIGHT */
            0, /**ROTATION */
            this.images[3],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.9, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "INICIAR", /**UNIQUE TEXT */
            (this.game.width * 0.64), /**UNIQUE TEXT X */
            (this.height * 1.12), /**UNIQUE TEXT Y */
        );

        this.buttonFullScreen = new Image(
            this.game, /**GAME */
            (this.game.width * 0.01), /**X */
            (this.height * 0.84), /**Y */
            (this.game.width * 0.2), /**WIDTH */
            (this.game.height * 0.15), /**HEIGHT */
            0, /**ROTATION */
            this.images[6],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.5, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "🖥 TELA CHEIA", /**UNIQUE TEXT */
            (this.game.width * 0.032), /**UNIQUE TEXT X */
            (this.height * 0.93), /**UNIQUE TEXT Y */
        );

        this.imageLogo = new Image(
            this.game, /**GAME */
            (this.game.width * 0.02), /**X */
            (this.height * -0.12), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.10), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
        );

        this.imageAkemi = new Image(
            this.game, /**GAME */
            (this.game.width * 0.09), /**X */
            (this.height * 0.35), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.75), /**HEIGHT */
            0, /**ROTATION */
            this.images[1],  /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
        );

        this.imageTitle = new Image(
            this.game, /**GAME */
            (this.game.width * 0.59), /**X */
            (this.height * -0.2), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.2), /**HEIGHT */
            0, /**ROTATION */
            this.images[2],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
        );

        this.buttonLoadGame = new Image(
            this.game, /**GAME */
            (this.game.width * 0.30), /**X */
            (this.height * 0.65), /**Y */
            (this.game.width * 0.40), /**WIDTH */
            (this.game.height * 0.26), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            "LOAD GAME", /**TEXT */
            50, /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 0.81), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "row"
        );

        this.buttonOptions = new Image(
            this.game, /**GAME */
            (this.game.width * 0.30), /**X */
            (this.height * 1.65), /**Y */
            (this.game.width * 0.40), /**WIDTH */
            (this.game.height * 0.26), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
            1, /**OPACITY */
            "⚙️PTIONS", /**TEXT */
            50, /**TEXT SPACING */
            "font1942", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.81), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "row"
        );

        this.gameTitle = new Text(
            game, // game instance
            this.game.width * 0.01, // x position
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