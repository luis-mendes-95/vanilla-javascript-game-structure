import { Background } from "../../../engine/background/background.js";
import { Hud } from "../../../engine/hud/hud.js";
import { AkemiHUD } from "./akemiHUD.js";

export class Scene2 {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        /**GAME ASSETS*/
        this.backgroundScene2 = document.getElementById('backgroundScene2');
        this.logo = document.getElementById('logo');
        this.akemiImages = document.getElementsByClassName('akemi');
        this.gameTitleImage = document.getElementById('gameTitle');
        this.buttonStart = document.getElementById('buttonStart');
        this.butterfly = document.getElementById('butterflies');
        this.cloud1 = document.getElementById('cloud1');
        this.dialogueBox = document.getElementById('dialogueBox');
        this.dialogueArrow = document.getElementById('dialogueArrow');
        this.namePanel = document.getElementById('namePanel');

        /**BACKGROUND*/
        this.background = new Background(this, 0, 0, (this.game.width * 2), this.game.height, 'blue', 10, 0, 0, [this.backgroundScene2]);
           
        /**HUD*/
        this.hud = new AkemiHUD(this.game, 0, 0, this.width, this.height, [ this.logo, this.akemiImages[3], this.gameTitleImage, this.buttonStart, this.butterfly, this.cloud1, this.dialogueBox, this.dialogueArrow, this.namePanel]);
    
        this.calledNextScene = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {
        this.background.update(deltaTime);



        /**MANAGE BUTTERFLY MOVEMENT */

        this.hud.butterfly.moveTo((this.game.canvas.width * 0.85), (this.game.canvas.height * 0.4), 3);
        this.hud.butterfly.rotate(-45, 0.3)

        this.hud.butterfly.update(deltaTime);


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




        /**MANAGE THE MOVING ELEMENTS IN HUD, ENTERING AND GETTING OUT */
        if(this.game.scenes[1].calledNextScene && !this.game.scenes[1].enterNextScene){

            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 2), 0.5);
            this.hud.imageAkemi.fadeOut(0.05);

            /**CHANGING TO THE NEXT SCENE */
            setTimeout(() => {
                this.game.currentScene = 1;
            }, 1000);

        } else {

            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
            this.hud.imageAkemi.fadeIn(0.05);
        }


        this.hud.dialogueBox.fadeIn(0.05);
        this.hud.dialogueArrow.fadeIn(0.05);
        this.hud.dialogueArrow.moveTo((this.width * 0.327), (this.height * 0.283), 6.1);
        this.hud.dialogueBox.moveTo((this.width * 0.35), (this.height * 0.15), 5);

        this.hud.namePanel.update();
        this.hud.namePanel.moveTo((this.width * 0.55), (this.height * 0.4), 6);
        this.hud.namePanel.rotate(0, 0.7);


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
        




        this.hud.cloud1.draw(ctx, 0);
        this.hud.cloud2.draw(ctx, 0);
        this.hud.cloud3.draw(ctx, 0);
        this.hud.cloud4.draw(ctx, 0);
        this.hud.cloud5.draw(ctx, 0);
        this.background.draw(this.game.ctx, 0);
        this.hud.imageAkemi.draw(ctx, 0);
        this.hud.dialogueBox.draw(ctx, 0);
        this.hud.dialogueArrow.draw(ctx, 0);



        this.hud.namePanel.draw(ctx, 0);
        this.hud.butterfly.draw(ctx);

    }
}