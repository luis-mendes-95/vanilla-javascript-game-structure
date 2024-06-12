import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Sprite } from "../../../engine/sprite/sprite.js"
import { DialogueBox } from "../../../engine/hud/dialogueBox/dialogueBox.js";
import { InputBox } from "../../../engine/hud/inputBox/inputBox.js";
import { ImageHover } from "../../../engine/hud/imageHover/imageHover.js";
import { Keyboard } from "../../../engine/hud/keyboard/keyboard.js";
import { KeyboardSign } from "../../keyboardSign.js";

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        /**GAME ASSETS*/
        this.akemiImages = document.getElementsByClassName('akemi');

        this.imageAkemi = new Image(
            this.game, /**GAME*/
            (this.width * 0.08), /**X */
            (this.height * 0.25), /**Y */
            this.game.width * 0.34, /**WIDTH */
            this.game.height * 0.8, /**HEIGHT */
            0, /**ROTATION */
            this.images[1], /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**TEXT FONT WEIGHT */
            null, /**TEXT FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER*/
        );

        this.imageAkemi2 = new Image(
            this.game, /**GAME*/
            (this.width * 0.08), /**X */
            (this.height * 0.25), /**Y */
            this.game.width * 0.34, /**WIDTH */
            this.game.height * 0.8, /**HEIGHT */
            0, /**ROTATION */
            this.akemiImages[5], /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**TEXT FONT WEIGHT */
            null, /**TEXT FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER*/
        );

        this.butterfly = new Sprite(
            images[4], /**IMAGE */
            this.game, /**GAME */
            256, /**SPRITE WIDTH*/
            160, /**SPRITE HEIGHT*/
            this.game.height >= 700 ? 0.6 : 0.3, /**SIZE X*/
            this.game.height >= 700 ? 0.6 : 0.3, /**SIZE Y*/
            (this.game.canvas.width * 1.42), /**DESTINY X */
            (this.game.canvas.height * -0.62), /**DESTINY Y */
            3, /**MAX FRAME X */
            1, /**MAX FRAME Y */
            150 /**FRAME SPEED */
        );

        this.cloud1 = new Image(
            this.game, /**GAME */
            (this.width * 0.1), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.15), /**WIDTH */
            (this.game.height * 0.15), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[5], /**IMAGE */
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
            this.images[5], /**IMAGE */
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
            this.images[5], /**IMAGE */
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
            this.images[5], /**IMAGE */
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
            this.images[5], /**IMAGE */
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
   
        /**TEXT GROUP TO BE RENDERED */
        this.dialogueText = [
            "OLÁ, MEU NOME É AKEMI!", /**TEXTS[0] */
            "QUAL É O SEU NOME?" /**TEXTS[1] */
        ]

        /**DIALOGUE BOX WITH DYNAMIC TEXTS */
        this.dialogueBox = new DialogueBox(
            this.game, /**GAME */
            (this.width * 0.35), /**X */
            (this.height * -0.5), /**Y */
            (this.width * 0.42), /**WIDTH */
            (this.game.height * 0.20), /**HEIGHT */
            0, /**ROTATION */
            this.images[6], /**IMAGE */
            0, /**OPACITY */
            this.dialogueText, /**TEXT */
            (this.height * 0.08), /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            (this.width * 0.38), /**TEXT X */
            (this.height * -0.42), /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.dialogueArrow = new Image(
            this.game, /**GAME */
            (this.width * 0.327), /**X */
            (this.height * -0.5), /**Y */
            (this.width * 0.05), /**WIDTH */
            (this.game.height * 0.10), /**HEIGHT */
            0, /**ROTATION */
            this.images[7], /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
   
        this.dialogueText2 = [
            `${this.game.playerName}! PRECISO DA SUA AJUDA!`, /**TEXTS[0] */
            "PRECISO COLHER FRUTAS, FLORES E LEGUMES PARA", /**TEXTS[1] */
            "SEREM VENDIDOS NA FEIRA DA CIDADE! PARA ME ", /**TEXTS[2] */
            "AJUDAR, VOCÊ DEVE COLHER O NÚMERO EXATO ", /**TEXTS[3] */
            "DESSES PRODUTOS QUE EU LHE PEDIR!", /**TEXTS[4] */
            "VAMOS COMEÇAR?" /**TEXTS[5] */
        ]

        this.dialogueBox2 = new DialogueBox(
            this.game, /**GAME */
            (this.width * 0.35), /**X */
            (this.height * 0.005), /**Y */
            (this.width * 0.52), /**WIDTH */
            (this.game.height * 0.45), /**HEIGHT */
            0, /**ROTATION */
            this.images[6], /**IMAGE */
            0, /**OPACITY */
            this.dialogueText2, /**TEXT */
            (this.height * 0.065), /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            4.5, /**FONT SIZE */
            (this.width * 0.38), /**TEXT X */
            (this.height * 0.08), /**TEXT Y */ 
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.dialogueArrow2 = new Image(
            this.game,
            (this.width * 0.33),
            (this.height * 0.37),
            (this.width * 0.05),
            (this.game.height * 0.10),
            0,
            this.images[7],
            0
        );

        this.dialogueText3 = [
            "ESCOLHA O NÍVEL DE DIFICULDADE!" /*TEXTS[0]*/
        ]

        this.dialogueBox3 = new DialogueBox(
            this.game, /**GAME */
            (this.width * 0.35), /**X */
            (this.height * 0.18), /**Y */
            (this.width * 0.42), /**WIDTH */
            (this.game.height * 0.09), /**HEIGHT */
            0, /**ROTATION */
            this.images[6], /**IMAGE */
            0, /**OPACITY */
            this.dialogueText3, /**TEXT */
            30, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            5.3, /**FONT SIZE */
            (this.width * 0.375), /**TEXT X */
            (this.height * 0.241), /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.dialogueArrow3 = new Image(
            this.game, /**GAME */
            (this.width * 0.33), /**X */
            (this.height * 0.21), /**Y */
            (this.width * 0.045), /**WIDTH */
            (this.game.height * 0.10), /**HEIGHT */
            0, /**ROTATION */
            this.images[7], /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.inputText = new InputBox(
            this.game, /**GAME */
            (this.width * 2.11), /**X */
            (this.height * 0.6), /**Y */
            (this.width * 0.32), /**WIDTH */
            (this.game.height * 0.10), /**HEIGHT */
            0, /**ROTATION */
            null, /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            50, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            (this.width * 2.11), /**TEXT X */
            (this.height * 0.6), /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.keyboard = new Keyboard(
            this.game, /**GAME */
            (this.width * 0.01), /**X */
            (this.height * 1.6), /**Y */
            (this.width * 0.54), /**WIDTH */
            (this.game.height * 0.35), /**HEIGHT */
            0, /**ROTATION */
            null, /**IMAGE */
            1, /**OPACITY */
            "PatrickHand", /**FONT */
            (this.height * 0.005), /**FONT SIZE */
            "black" /**TEXT COLOR */
        )

        this.namePanel = new Image(
            this.game, /**GAME */
            (this.width * 1.4), /**X */
            (this.height * 1.9), /**Y */
            (this.width * 0.42), /**WIDTH */
            (this.game.height * 0.60), /**HEIGHT */
            110, /**ROTATION */
            this.images[8], /**IMAGE */
            1, /**OPACITY */
            "", /**TEXT */
            50,  /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
   
        this.buttonContinue = new Image(
            this.game, /**GAME */
            (this.width * 1.2), /**X */
            (this.height * 1.43), /**Y */ 
            (this.width * 0.15), /**WIDTH */
            (this.game.height * 0.20), /**HEIGHT */
            -30, /**ROTATION */
            this.images[3], /**IMAGE */
            1, /**OPACITY */
            "CONTINUAR", /**TEXT */
            50, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            4, /**FONT SIZE */
            (this.width * 1.23), /**TEXT X */
            (this.height * 1.5), /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );
        

        this.buttonContinue2 = new Image(
            this.game, /**GAME */
            (this.width * 0.6), /**X */
            (this.height * 1.2), /**Y */
            (this.width * 0.20), /**WIDTH */
            (this.game.height * 0.25), /**HEIGHT */
            0, /**ROTATION */
            this.images[3], /**IMAGE */
            1, /**OPACITY */
            "CONTINUAR", /**TEXT */
            50, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            5, /**FONT SIZE */
            (this.width * 0.64), /**TEXT X */
            (this.height * 1.29), /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );
    
        this.difficultyPanel = new Image(
            this.game, /**GAME */
            (this.width * 0.6), /**X */
            (this.height * -0.9), /**Y */
            (this.width * 0.22), /**WIDTH */
            (this.game.height * 0.60), /**HEIGHT */
            0, /**ROTATION */
            this.images[9], /**IMAGE */
            1, /**OPACITY */
            "", /**TEXT */
            50, /**TEXT SPACING */
            "PatrickHand", /**FONT */
            "bold", /**FONT WEIGHT */
            7,  /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
    
        this.buttonEasy = new ImageHover(
            this.game, /**GAME */
            (this.width * 0.615), /**X */
            (this.height * -0.84), /**Y */
            (this.width * 0.19), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.images[10], /**IMAGE */
            this.images[11], /**HOVER IMAGE */
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

        this.buttonMedium = new ImageHover(
            this.game, /**GAME */
            (this.width * 0.615), /**X */
            (this.height * -0.65), /**Y */
            (this.width * 0.19), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.images[12], /**IMAGE */
            this.images[13], /**HOVER IMAGE */
            0.99, /**OPACITY */
            "", /**TEXT */
            25, /**TEXT SPACING */
            "PatrickHand",  /**FONT */
            "bold", /**FONT WEIGHT */
            7, /**FONT SIZE */
            1.09, /**TEXT X */
            1.56, /**TEXT Y */
            "black", /**TEXT COLOR */
            true /**MOUSE HOVER */
        );

        this.buttonHard = new ImageHover(
            this.game, /**GAME */
            (this.width * 0.615), /**X */
            (this.height * -0.45), /**Y */
            (this.width * 0.19), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.images[14], /**IMAGE */
            this.images[15], /**HOVER IMAGE */
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

        this.keyboardSign = new KeyboardSign(
            this.game,  /**GAME*/
            (this.width * 0.18), /**X*/
            (this.height * 0.85), /**Y*/
            (this.width * 0.32), /**WIDTH*/
            (this.game.height * 0.25), /**HEIGHT*/
            0, /**ROTATION*/
            this.images[3], /**IMAGE*/
            1, /**OPACITY */
            ["MOSTRAR", "TECLADO"],/**TEXT*/
            (this.height * 0.06), /**TEXT SPACING */
            "PatrickHand", /**FONT*/
            "bold", /**FONT WEIGHT*/
            4.7, /**FONT SIZE*/
            (this.width * 0.30), /**TEXT X*/
            (this.height * 0.91), /**TEXT Y*/
            "black", /**TEXT COLOR*/
            true /**MOUSE HOVER*/
        );

        this.keyboardSign2 = new KeyboardSign(
            this.game,  /**GAME*/
            (this.width * 0.18), /**X*/
            (this.height * 1.85), /**Y*/
            (this.width * 0.32), /**WIDTH*/
            (this.game.height * 0.25), /**HEIGHT*/
            0, /**ROTATION*/
            this.images[16], /**IMAGE*/
            1, /**OPACITY */
            ["ESCONDER", "TECLADO"],/**TEXT*/
            (this.height * 0.06), /**TEXT SPACING */
            "PatrickHand", /**FONT*/
            "bold", /**FONT WEIGHT*/
            4.7, /**FONT SIZE*/
            (this.width * 0.30), /**TEXT X*/
            (this.height * 1.96), /**TEXT Y*/
            "black", /**TEXT COLOR*/
            true /**MOUSE HOVER*/
        );
    
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}