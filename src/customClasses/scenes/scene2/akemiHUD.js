import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/Image/Image.js";
import { Sprite } from "../../../engine/hud/sprite/sprite.js"
import { DialogueBox } from "../../../engine/hud/dialogueBox/dialogueBox.js";
import { InputBox } from "../../../engine/hud/inputBox/inputBox.js";
import { ImageHover } from "../../../engine/hud/imageHover/imageHover.js";

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        /**GAME ASSETS*/
        this.akemiImages = document.getElementsByClassName('akemi');

        this.imageAkemi = new Image(this.game, (this.width * 0.08), (this.height * 0.25), this.game.width * 0.34, this.game.height * 0.8, 0, this.images[1], 0);
        this.imageAkemi2 = new Image(this.game, (this.width * 0.08), (this.height * 0.25), this.game.width * 0.34, this.game.height * 0.8, 0, this.akemiImages[5], 0);

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
        this.dialogueBox = new DialogueBox(this.game, (this.width * 0.35), (this.height * -0.5), (this.width * 0.42), (this.game.height * 0.20), 0, this.images[6], 0, this.dialogueText, 50, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.dialogueArrow = new Image(this.game, (this.width * 0.327), (this.height * -0.5), (this.width * 0.05), (this.game.height * 0.10), 0, this.images[7], 0);
   
        this.dialogueText2 = [`${this.game.playerName}! PRECISO DA SUA AJUDA!`, "PRECISO COLHER FRUTAS, FLORES E LEGUMES PARA", "SEREM VENDIDOS NA FEIRA DA CIDADE! PARA ME ", "AJUDAR, VOCÊ DEVE COLHER O NÚMERO EXATO ", "DESSES PRODUTOS QUE EU LHE PEDIR!", "VAMOS COMEÇAR?"]
        this.dialogueBox2 = new DialogueBox(this.game, (this.width * 0.35), (this.height * 0.005), (this.width * 0.52), (this.game.height * 0.45), 0, this.images[6], 0, this.dialogueText2, 30, "PatrickHand", "bold", 4.5, 1.1, 20, "black", true);
        this.dialogueArrow2 = new Image(this.game, (this.width * 0.33), (this.height * 0.37), (this.width * 0.05), (this.game.height * 0.10), 0, this.images[7], 0);

        this.dialogueText3 = ["ESCOLHA O NÍVEL DE DIFICULDADE!"]
        this.dialogueBox3 = new DialogueBox(this.game, (this.width * 0.35), (this.height * 0.18), (this.width * 0.42), (this.game.height * 0.09), 0, this.images[6], 0, this.dialogueText3, 30, "PatrickHand", "bold", 5.3, 1.07, 1.35, "black", true);
        this.dialogueArrow3 = new Image(this.game, (this.width * 0.33), (this.height * 0.21), (this.width * 0.045), (this.game.height * 0.10), 0, this.images[7], 0);

        this.inputText = new InputBox(this.game, (this.width * 1.9), (this.height * 0.525), (this.width * 0.32), (this.game.height * 0.10), 110, this.images[6], 0, null, 50, "PatrickHand", "bold", 7, 1.05, 1.15, "black", true);

        this.namePanel = new Image(this.game, (this.width * 1.4), (this.height * 1.9), (this.width * 0.42), (this.game.height * 0.60), 110, this.images[8], 1, "", 50, "PatrickHand", "bold", 7, 1.09, 1.56, "black", false);
   
        this.buttonContinue = new Image(this.game, (this.width * 1.2), (this.height * 1.43), (this.width * 0.15), (this.game.height * 0.20), -30, this.images[3], 1, "CONTINUAR", 50, "PatrickHand", "bold", 4, 1.03, 1.085, "black", true);
        this.buttonContinue2 = new Image(this.game, (this.width * 0.6), (this.height * 1.2), (this.width * 0.20), (this.game.height * 0.25), 0, this.images[3], 1, "CONTINUAR", 50, "PatrickHand", "bold", 5, 1.07, 1.1, "black", true);
    
        this.difficultyPanel = new Image(this.game, (this.width * 0.6), (this.height * -0.9), (this.width * 0.22), (this.game.height * 0.60), 0, this.images[9], 1, "", 50, "PatrickHand", "bold", 7, 1.09, 1.56, "black", false);
    
        this.buttonEasy = new ImageHover(this.game, (this.width * 0.615), (this.height * -0.84), (this.width * 0.19), (this.game.height * 0.12), 0, this.images[10], this.images[11], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.buttonMedium = new ImageHover(this.game, (this.width * 0.615), (this.height * -0.65), (this.width * 0.19), (this.game.height * 0.12), 0, this.images[12], this.images[13], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
        this.buttonHard = new ImageHover(this.game, (this.width * 0.615), (this.height * -0.45), (this.width * 0.19), (this.game.height * 0.12), 0, this.images[14], this.images[15], 0.99, "", 25, "PatrickHand", "bold", 7, 1.09, 1.56, "black", true);
    
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}