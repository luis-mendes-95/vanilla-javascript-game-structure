import { Background } from "../../../engine/background/background.js";
import { Hud } from "../../../engine/hud/hud.js";
import { AkemiHUD } from "./akemiHUD.js";

export class Scene1 {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        /**GAME ASSETS*/
        this.backgroundScene1 = document.getElementById('backgroundScene1');
        this.logo = document.getElementById('logo');
        this.akemiImages = document.getElementsByClassName('akemi');
        this.gameTitleImage = document.getElementById('gameTitle');
        this.buttonStart = document.getElementById('buttonStart');
        this.butterfly = document.getElementById('butterflies');
        this.cloud1 = document.getElementById('cloud1');

        /**BACKGROUND*/
        this.background = new Background(this, 0, 0, this.game.width, this.game.height, 'blue', 10, 0, 0, [this.backgroundScene1]);
           
        /**HUD*/
        this.hud = new AkemiHUD(this.game, 0, 0, this.width, this.height, [ this.logo, this.akemiImages[3], this.gameTitleImage, this.buttonStart, this.butterfly, this.cloud1 ]);
    
        this.calledNextScene = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {
        this.background.update(deltaTime);

        /**HANDLE MOUSE BUTTON CLICKING IN START BUTTON */
        if(this.hud.buttonStart.isMouseClicking()){
            this.calledNextScene = true;
        }


        /**MANAGE BUTTERFLY MOVEMENT */
        if(this.hud.buttonStart.isMouseOver(this.game.input.mouse) || this.game.scenes[0].calledNextScene){
            this.hud.butterfly.moveTo((this.game.canvas.width * 1.25), (this.game.canvas.height * -0.35), 6);
            this.hud.butterfly.rotate(0, 0.3)
        } else {
            if(!this.game.scenes[0].calledNextScene){
                this.hud.butterfly.moveTo((this.game.canvas.width * 0.7), (this.game.canvas.height * 0.64), 4);
                this.hud.butterfly.rotate(-45, 0.3)
            }
        }
        this.hud.buttonStart.update(deltaTime);
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
        if(this.game.scenes[0].calledNextScene && !this.game.scenes[0].enterNextScene){
            this.hud.imageTitle.moveTo((this.width * 0.5), (-this.game.height * 0.5), 5);
            this.hud.imageLogo.moveTo((this.width * 0.02), (-this.game.height * 0.2), 2);
            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 2), 0.5);
            this.hud.imageAkemi.fadeOut(0.05);
            this.hud.buttonStart.moveTo((this.width * 0.6), (this.height * 2.5), 8);

            /**CHANGING TO THE NEXT SCENE */
            setTimeout(() => {
                this.game.currentScene = 1;
            }, 1000);

        } else {
            this.hud.imageTitle.moveTo((this.width * 0.5), (this.height * 0.05), 5);
            this.hud.imageLogo.moveTo((this.width * 0.02), (this.height * 0.02), 2);
            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
            this.hud.imageAkemi.fadeIn(0.05);
            this.hud.buttonStart.moveTo((this.width * 0.6), (this.height * 0.71), 8);
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

        this.background.draw(this.game.ctx, 0);

        this.hud.cloud1.draw(ctx, 0);
        this.hud.cloud2.draw(ctx, 0);
        this.hud.cloud3.draw(ctx, 0);
        this.hud.cloud4.draw(ctx, 0);
        this.hud.cloud5.draw(ctx, 0);
        this.hud.imageLogo.draw(ctx, 0);
        this.hud.imageAkemi.draw(ctx, 0);
        this.hud.imageTitle.draw(ctx, 0);
        this.hud.buttonStart.draw(ctx, 0);
        this.hud.butterfly.draw(ctx);

    }
}