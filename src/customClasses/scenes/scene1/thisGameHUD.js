import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Keyboard } from "../../../engine/hud/keyboard/keyboard.js";
import { Text } from "../../../engine/hud/text/text.js";

export class thisGameHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        let minDimension = Math.min(this.game.width, this.game.height);
        let fontSize = minDimension * 0.090;

        this.buttonShowKeyboard = new Image(
            this.game, /**GAME */
            (this.game.width * 0.2), /**X */
            (this.height * 1), /**Y */
            (this.game.width * 0.15), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */
            this.images[4],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            (fontSize * 0.3), /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "⌨ TECLADO", /**UNIQUE TEXT */
            (this.game.width * 0.235), /**UNIQUE TEXT X */
            (this.height * 1.06), /**UNIQUE TEXT Y */
        );


        this.buttonHideKeyboard = new Image(
            this.game, /**GAME */
            (this.game.width * 0.2), /**X */
            (this.height * 1), /**Y */
            (this.game.width * 0.15), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */
            this.images[4],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            (fontSize * 0.3), /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "⌨ ESCONDER", /**TEXT */
            (this.game.width * 0.235), /**UNIQUE TEXT X */
            (this.height * 1.06), /**UNIQUE TEXT Y */
        );

        this.keyboard = new Keyboard(
            this.game,  /**GAME */
            this.width * 0.01, /**X */
            this.height * 0.99, /**Y */
            "PatrickHand", /**FONT */
            12, /**MAX LENGTH */
        );
     
        this.namePanel = new Image(
            this.game, /**GAME */
            (this.game.width * 0.85), /**X */
            (this.height * 0.75), /**Y */
            (this.game.width * 0.4), /**WIDTH */
            (this.game.height * 0.59), /**HEIGHT */
            50, /**ROTATION */
            this.images[1],  /**IMAGE */
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
            "NOME DO MELIANTE", /**UNIQUE TEXT */
            (this.game.width * 0.91), /**UNIQUE TEXT X */
            (this.height * 0.95), /**UNIQUE TEXT Y */
        );

        this.buttonFullScreen = new Image(
            this.game, /**GAME */
            (this.game.width * 0.01), /**X */
            (this.height * 1), /**Y */
            (this.game.width * 0.15), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */
            this.images[4],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            (fontSize * 0.3), /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "🖥 TELA CHEIA", /**UNIQUE TEXT */
            (this.game.width * 0.032), /**UNIQUE TEXT X */
            (this.height * 1.06), /**UNIQUE TEXT Y */
        );

        this.imageAkemi = new Image(
            this.game, /**GAME */
            (this.game.width * 0.09), /**X */
            (this.height * 0.35), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.75), /**HEIGHT */
            0, /**ROTATION */
            this.images[0],  /**IMAGE */
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

        this.dialogueBox = new Image(
            this.game, /**GAME */
            (this.game.width * 0.3), /**X */
            (this.height * 0.28), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.35), /**HEIGHT */
            0, /**ROTATION */
            this.images[5],  /**IMAGE */
            0, /**OPACITY */
            [
                " ",
                "         OLÁ, MEU NOME É AKEMI!  ",
                "         QUAL O SEU NOME ?",
            ], /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "patrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.5, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            "column", /**TEXTS ALIGN -> ROW OR COLUMN */
        );

        this.dialogueBox2 = new Image(
            this.game, /**GAME */
            (this.game.width * 0.3), /**X */
            (this.height * 0.15), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.35), /**HEIGHT */
            0, /**ROTATION */
            this.images[5],  /**IMAGE */
            0, /**OPACITY */
            [
                " ",
                "                     PRECISO COLHER FRUTAS, FLORES E",
                "                     LEGUMES PARA SEREM VENDIDOS NA FEIRA DA CIDADE!   ",
                "                    PARA ME AJUDAR, VOCÊ DEVE COLHER O NÚMERO EXATO  ",
                "                    DESSES PRODUTOS QUE EU LHE PEDIR! VAMOS COMEÇAR ? ",
            ], /**TEXT */
            (this.height * 0.01), /**TEXT SPACING */
            "patrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.35, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            false, /**MOUSE HOVER */
            "column", /**TEXTS ALIGN -> ROW OR COLUMN */
        );
        
        this.playerName = new Image(
            this.game, /**GAME */
            (this.game.width * 0.3), /**X */
            (this.height * 0.35), /**Y */
            (this.game.width * 0.30), /**WIDTH */
            (this.game.height * 0.35), /**HEIGHT */
            0, /**ROTATION */
            null,  /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "patrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.5, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            "column", /**TEXTS ALIGN -> ROW OR COLUMN */
            "TEXTO DIGITADO PELO USER", /**UNIQUE TEXT */
            (this.game.width * 0.032), /**UNIQUE TEXT X */
            (this.height * 1.06), /**UNIQUE TEXT Y */
            true /** CURSOR VISIBLE */
        );

        this.buttonContinue = new Image(
            this.game, /**GAME */
            (this.game.width * 1), /**X */
            (this.height * 1.155), /**Y */
            (this.game.width * 0.2), /**WIDTH */
            (this.game.height * 0.3), /**HEIGHT */
            -20, /**ROTATION */
            this.images[6],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.7, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "CONTINUAR", /**UNIQUE TEXT */
            (this.game.width * 1.025), /**UNIQUE TEXT X */
            (this.game.height * 1.265), /**UNIQUE TEXT Y */
        );

        this.buttonContinue2 = new Image(
            this.game, /**GAME */
            (this.game.width * 1), /**X */
            (this.height * 1.155), /**Y */
            (this.game.width * 0.2), /**WIDTH */
            (this.game.height * 0.3), /**HEIGHT */
            0, /**ROTATION */
            this.images[6],  /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            (this.height * 0.1), /**TEXT SPACING */
            "PatrickHand", /**TEXT FONT */
            "bold", /**FONT WEIGHT */
            fontSize * 0.7, /**FONT SIZE */
            (this.game.width * 0.365), /**TEXT X */
            (this.height * 1.50), /**TEXT Y */
            "black", /**TEXT COLOR */
            true, /**MOUSE HOVER */
            null, /**TEXTS ALIGN -> ROW OR COLUMN */
            "CONTINUAR", /**UNIQUE TEXT */
            (this.game.width * 1.025), /**UNIQUE TEXT X */
            (this.game.height * 1.265), /**UNIQUE TEXT Y */
        );
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}