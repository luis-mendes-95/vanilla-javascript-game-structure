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

        /**DIFFICULTY PANEL AND BUTTONS */
        this.difficultyPanel = document.getElementById('difficultyPanel');
        
        this.buttonEasy = document.getElementById('buttonEasy');
        this.buttonEasyHover = document.getElementById('buttonEasyHover');

        this.buttonMedium = document.getElementById('buttonMedium');
        this.buttonMediumHover = document.getElementById('buttonMediumHover');

        this.buttonHard = document.getElementById('buttonHard');
        this.buttonHardHover = document.getElementById('buttonHardHover');


        /**BACKGROUND*/
        this.background = new Background(this, 0, 0, (this.game.width * 2), this.game.height, 'blue', 10, 0, 0, [this.backgroundScene2]);
           
        /**HUD*/
        this.hud = new AkemiHUD(this.game, 0, 0, this.width, this.height,
             [ this.logo, /**0 */
               this.akemiImages[3], /**1 */
               this.gameTitleImage, /**2 */
               this.buttonStart, /**3 */
               this.butterfly, /**4 */
               this.cloud1, /**5 */
               this.dialogueBox, /**6 */
               this.dialogueArrow, /**7 */
               this.namePanel, /**8 */
               this.difficultyPanel, /**9 */
               this.buttonEasy, /**10 */
               this.buttonEasyHover, /**11 */
               this.buttonMedium, /**12 */
               this.buttonMediumHover, /**13 */
               this.buttonHard, /**14 */
               this.buttonHardHover, /**15 */
            ]);
    
        this.calledNextScene = false;
        this.chooseDifficulty = false;
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
        if(this.game.scenes[1].calledNextScene){

            this.hud.inputText.moveTo((this.width * 1.6035), (this.height * 1.525), 9);
            this.hud.namePanel.moveTo((this.width * 1.55), (this.height * 1.4), 6);
            this.hud.buttonContinue.moveTo((this.width * 1.87), (this.height * 1.84), 1.2);

            this.hud.dialogueBox.fadeIn(0.05);
            this.hud.inputText.fadeIn(0.01);
            this.hud.dialogueArrow.fadeIn(0.05);
    
    
            this.hud.dialogueArrow.moveTo((this.width * 0.327), (this.height * -1.283), 6.1);
            this.hud.dialogueBox.moveTo((this.width * 0.35), (this.height * -1.15), 5);




            this.background.moveTo(this.width * -1, 0, 12);



            if(this.chooseDifficulty){
                this.hud.buttonContinue2.moveTo((this.width * 0.6), (this.height * 1.2), 1.2);

                /**MANAGE BUTTERFLY MOVEMENT */
                this.hud.butterfly.moveTo((this.game.canvas.width * -1.25), (this.game.canvas.height * 0.18), 6);
                this.hud.butterfly.rotate(-45, 0.8)
                this.hud.imageAkemi.fadeOut(0.05);

                this.hud.dialogueBox2.fadeOut(0.03);
                this.hud.dialogueArrow2.fadeOut(0.03);





                if(this.hud.buttonEasy.isMouseClicking()){
                    this.game.difficulty = "easy";
                    this.enterNextScene = true;
                }

                if(this.hud.buttonMedium.isMouseClicking()){
                    this.game.difficulty = "medium";
                    this.enterNextScene = true;
                }

                if(this.hud.buttonHard.isMouseClicking()){
                    this.game.difficulty = "hard";
                    this.enterNextScene = true;
                }

                if(this.enterNextScene){
                    this.hud.difficultyPanel.moveTo((this.width * 0.6), (this.height * -0.9), 6);
                    this.hud.buttonEasy.moveTo((this.width * 0.615), (this.height * -0.84), 6);
                    this.hud.buttonMedium.moveTo((this.width * 0.615), (this.height * -0.65), 6);
                    this.hud.buttonHard.moveTo((this.width * 0.615), (this.height * -0.45), 6);

                    this.hud.dialogueBox3.fadeOut(0.03);
                    this.hud.dialogueArrow3.fadeOut(0.03);

                    this.hud.imageAkemi2.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
                    this.hud.imageAkemi2.fadeOut(0.05);

                    setTimeout(() => {
                        this.game.currentScene = 2;
                    }
                    , 1500);

                } else {
                    this.hud.difficultyPanel.moveTo((this.width * 0.6), (this.height * 0.3), 6);
                    this.hud.buttonEasy.moveTo((this.width * 0.615), (this.height * 0.376), 6);
                    this.hud.buttonMedium.moveTo((this.width * 0.615), (this.height * 0.56), 6);
                    this.hud.buttonHard.moveTo((this.width * 0.615), (this.height * 0.75), 6);
                    this.hud.dialogueBox3.fadeIn(0.03);
                    this.hud.dialogueArrow3.fadeIn(0.03);
                }


            } else {
                this.hud.buttonContinue2.moveTo((this.width * 0.6), (this.height * 0.8), 1.2);
                this.hud.buttonContinue2.update();
                this.hud.imageAkemi2.fadeIn(0.01);
                this.hud.imageAkemi2.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);

                /**MANAGE BUTTERFLY MOVEMENT */
                this.hud.butterfly.moveTo((this.game.canvas.width * 0.25), (this.game.canvas.height * 0.18), 6);
                this.hud.butterfly.rotate(45, 0.8)

                this.hud.dialogueBox2.fadeIn(0.03);
                this.hud.dialogueArrow2.fadeIn(0.03);
            }





            if(this.hud.buttonContinue2.isMouseClicking()){
                this.chooseDifficulty = true;
            }
                



            /**CHANGING TO THE NEXT SCENE */
            setTimeout(() => {
                //this.game.currentScene = 2;
            }, 1000);

        } else {

            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
            this.hud.imageAkemi.fadeIn(0.05);

            this.hud.inputText.moveTo((this.width * 0.6035), (this.height * 0.525), 9);
            this.hud.namePanel.moveTo((this.width * 0.55), (this.height * 0.4), 6);
            this.hud.buttonContinue.moveTo((this.width * 0.87), (this.height * 0.84), 1.2);

            this.hud.dialogueBox.fadeIn(0.05);
            this.hud.inputText.fadeIn(0.01);
            this.hud.dialogueArrow.fadeIn(0.05);


    
            this.hud.namePanel.rotate(0, 0.7);
            this.hud.inputText.rotate(0, 0.7);
    
    
            this.hud.dialogueArrow.moveTo((this.width * 0.327), (this.height * 0.283), 6.1);
            this.hud.dialogueBox.moveTo((this.width * 0.35), (this.height * 0.15), 5);

            /**MANAGE BUTTERFLY MOVEMENT */
            this.hud.butterfly.moveTo((this.game.canvas.width * 0.85), (this.game.canvas.height * 0.4), 3);
            this.hud.butterfly.rotate(-45, 0.3)

        }

        this.hud.namePanel.update();
        this.hud.inputText.update();
        this.hud.buttonContinue.update();
        this.hud.buttonContinue2.update();
        this.hud.butterfly.update(deltaTime);
        this.hud.buttonEasy.update();
        this.hud.buttonMedium.update();
        this.hud.buttonHard.update();
     



        /**HANDLE MOUSE BUTTON CLICKING IN START BUTTON */
        if(this.hud.buttonContinue.isMouseClicking()){
            if(this.hud.inputText.currentInputText === ""){
                this.hud.namePanel.rotate(10, 9);
            } else {
                this.game.playerName = this.hud.inputText.currentInputText;
                this.hud.dialogueText2[0] = `${this.game.playerName}! PRECISO DA SUA AJUDA!`;
                this.calledNextScene = true;
            }
            
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

        this.hud.inputText.draw(ctx, 0);

        this.hud.butterfly.draw(ctx);

        this.hud.buttonContinue.draw(ctx, 0);

        if(this.calledNextScene){
            this.hud.dialogueBox2.draw(ctx, 0);
            this.hud.dialogueArrow2.draw(ctx, 0);
            this.hud.buttonContinue2.draw(ctx, 0);
        }

        if(this.chooseDifficulty){
            this.hud.imageAkemi2.draw(ctx, 0);
            this.hud.buttonEasy.draw(ctx, 0);
            this.hud.buttonMedium.draw(ctx, 0);
            this.hud.buttonHard.draw(ctx, 0);
            this.hud.difficultyPanel.draw(ctx, 0);
            this.hud.dialogueBox3.draw(ctx, 0);
            this.hud.dialogueArrow3.draw(ctx, 0);





        }
    }
}