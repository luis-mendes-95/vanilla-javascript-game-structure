import { Background } from "../../../engine/background/background.js";
import { Hud } from "../../../engine/hud/hud.js";
import { AkemiHUD } from "./akemiHUD.js";

export class Scene3 {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        /**GAME ASSETS*/
        this.backgroundScene4 = document.getElementById('backgroundScene4');
        this.cloud1 = document.getElementById('cloud1');
        this.farmSign = document.getElementById('farmSign');

        /**BUTTONS */
        this.buttonTree = document.getElementById('treeButton');
        this.buttonTreeHover = document.getElementById('treeButtonHover');

        this.buttonGarden = document.getElementById('gardenButton');
        this.buttonGardenHover = document.getElementById('gardenButtonHover');

        this.buttonFlowers = document.getElementById('flowersButton');
        this.buttonFlowersHover = document.getElementById('flowersButtonHover');


        /**BACKGROUND*/
        this.background = new Background(this, 0, 0, this.game.width, this.game.height * 1.15, 'blue', 10, 0, 0, [this.backgroundScene4]);
           
        /**HUD*/
        this.hud = new AkemiHUD(this.game, 0, 0, this.width, this.height, [  this.cloud1, this.farmSign, this.buttonTree, this.buttonTreeHover, this.buttonGarden, this.buttonGardenHover, this.buttonFlowers, this.buttonFlowersHover]);
    
        this.calledNextScene = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {

        this.background.update(deltaTime);


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
        if(this.game.scenes[2].calledNextScene && !this.game.scenes[2].enterNextScene){




        } else {
            this.hud.dialogueBox.moveTo((this.width * 0.62), (this.height * -0.01), 5);
        }

        this.hud.buttonTree.update(deltaTime);
        this.hud.buttonGarden.update(deltaTime);
        this.hud.buttonFlowers.update(deltaTime);


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

        this.hud.dialogueBox.draw(ctx, 0);

        this.hud.buttonTree.draw(ctx, 0);

        this.hud.buttonFlowers.draw(ctx, 0);
        this.hud.buttonGarden.draw(ctx, 0);

    }
}