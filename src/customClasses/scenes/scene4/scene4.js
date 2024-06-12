import { Background } from "../../../engine/background/background.js";
import { Hud } from "../../../engine/hud/hud.js";
import { AkemiHUD } from "./akemiHUD.js";




/**LEVEL 0 - TREES */
/** FRUTAS ALEATÓRIAS -> CAJU | LARANJA | LIMAO | MAÇÃ | PERA | MANGA */
/**EASY -> 1 TREE -> QTDS PARA ARRASTAR -> 1 A 9 */ 
/**MEDIUM -> 2 TREES -> QTDS PARA ARRASTAR -> 1 A 6 POR ÁRVORE */
/**HARD -> 3 TREES -> QTDS PARA ARRASTAR ->  1 A 5 */ 





/**LEVEL 1 - GARDEN */
/**VEGETAIS ALEATÓRIOS -> ABÓBORA | ALFACE | BETERRABA | CENOURA | TOMATE */
/**EASY -> 1 VEGETABLE -> 5 UNIDADES POR VEGETAL | 1 VEGETAL */
/**MEDIUM -> 2 VEGETABLES -> 5 UNIDADES POR VEGETAL | 2 VEGETAIS*/
/**HARD -> 3 VEGETABLES -> 5 UNIDADES POR VEGETAL | 3 VEGETAIS*/ 




/**LEVEL 2 - FLOWERS */
/**FLORES ALEATÓRIAS ->  */
/**EASY -> 1 FLOWER -> 10 FLORES POR TIPO*/
/**MEDIUM -> 2 FLOWERS -> 10 FLORES SORTIDAS DE 2 TIPOS*/
/**HARD -> 3 FLOWERS */





export class Scene4 {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        /**GAME ASSETS*/
        this.gameBackground = document.getElementById('gameBackground');
        this.logo = document.getElementById('logo');
        this.akemiImages = document.getElementsByClassName('akemi');
        this.gameTitleImage = document.getElementById('gameTitle');
        this.buttonStart = document.getElementById('buttonStart');
        this.butterfly = document.getElementById('butterflies');
        this.cloud1 = document.getElementById('cloud1');



        /**BACKGROUND*/
        this.background = new Background(
            this,   /**GAME */
            0, /**X*/
            0,  /**Y*/
            this.game.width, /**WIDTH*/
            this.game.height, /**HEIGHT*/
            'blue', /**COLOR*/
            10, /**SPEED*/
            [this.gameBackground] /**IMAGES*/
        );
           
        /**HUD*/
        this.hud = new AkemiHUD(
            this.game, /**GAME */
            0, /**X */
            0, /**Y */
            this.width, /**WIDTH */
            this.height, /**HEIGHT */
            [ 
                this.logo, /**IMAGE[0] */
                this.akemiImages[3], /**IMAGE[1] */
                this.gameTitleImage, /**IMAGE[2] */
                this.buttonStart, /**IMAGE[3] */
                this.butterfly, /**IMAGE[4] */
                this.cloud1 /**IMAGE[5] */
            ]);
    
        this.calledNextScene = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {


        /**MANAGE CLOUDS MOVEMENT*/
        if(this.hud.cloud1.x > this.game.canvas.width){
            this.hud.cloud1.x = 0 - this.hud.cloud1.width;
        } else {
            this.hud.cloud1.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, 0.9);
        }
        if(this.hud.cloud2.x > this.game.canvas.width){
            this.hud.cloud2.x = 0 - this.hud.cloud2.width;
        } else {
            this.hud.cloud2.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, 0.7);
        }
        if(this.hud.cloud3.x > this.game.canvas.width){
            this.hud.cloud3.x = 0 - this.hud.cloud3.width;
        } else {
            this.hud.cloud3.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, 1);
        }
        if(this.hud.cloud4.x > this.game.canvas.width){
            this.hud.cloud4.x = 0 - this.hud.cloud4.width;
        } else {
            this.hud.cloud4.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, 0.5);
        }
        if(this.hud.cloud5.x > this.game.canvas.width){
            this.hud.cloud5.x = 0 - this.hud.cloud5.width;
        } else {
            this.hud.cloud5.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, 0.2);
        }


        if(this.game.currentLevel === 0) {
            console.log("ÁRVORES | FRUTAS | PÁSSARO", this.game.difficulty)
        }

        if(this.game.currentLevel === 1) {
            console.log("HORTA | VEGETAIS | TOUPEIRA", this.game.difficulty)
        }

        if(this.game.currentLevel === 2) {
            console.log("FLORES | FLORES | LAGARTA", this.game.difficulty)
        }




    }

    draw(ctx, scene) {

        /**PAINT CANVAS BLUE */
        // Create gradient
        let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
        grd.addColorStop(0, '#87CEEB');   // Blue at the top
        grd.addColorStop(1, 'white');  // White at the bottom

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.game.width, this.game.height);




        /**CLOUDS DRAW*/
        this.hud.cloud1.draw(ctx, 0);
        this.hud.cloud2.draw(ctx, 0);
        this.hud.cloud3.draw(ctx, 0);
        this.hud.cloud4.draw(ctx, 0);
        this.hud.cloud5.draw(ctx, 0);

        /**BACKGROUND DRAW */
        this.background.draw(this.game.ctx, 0);

        /**LOGO DRAW*/
        this.hud.imageLogo.draw(ctx, 0);

        /**AKEMI GIRL DRAW*/
        this.hud.imageAkemi.draw(ctx, 0);

        /**GAME NAME TITLE DRAW*/
        this.hud.imageTitle.draw(ctx, 0);

        /**BUTTON START DRAW*/
        this.hud.buttonStart.draw(ctx, 0);

    }
}