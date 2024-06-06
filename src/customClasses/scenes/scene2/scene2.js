import { Background } from "../../../engine/background/background.js";
import { Hud } from "../../../engine/hud/hud.js";
import { AkemiHUD } from "./akemiHUD.js";

export class Scene2 {
    constructor(game) {

        /**GAME*/
        this.game = game;

        /**WIDTH AND HEIGHT */
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
        /**EASY*/
        this.buttonEasy = document.getElementById('buttonEasy');
        this.buttonEasyHover = document.getElementById('buttonEasyHover');
        /**MEDIUM */
        this.buttonMedium = document.getElementById('buttonMedium');
        this.buttonMediumHover = document.getElementById('buttonMediumHover');
        /**HARD */
        this.buttonHard = document.getElementById('buttonHard');
        this.buttonHardHover = document.getElementById('buttonHardHover');


        /**BACKGROUND*/
        this.background = new Background(
            this, /**GAME */
            0, /**X */
            0,  /**Y */
            (this.game.width * 2), /*WIDTH */
            this.game.height, /**HEIGHT */
            'blue', /**COLOR */
            10, /**SPEED */
            [this.backgroundScene2] /**IMAGES */
        );
           
        /**HUD*/
        this.hud = new AkemiHUD(
            this.game, /**GAME*/
            0, /**X */
            0, /**Y */
            this.width, /**WIDTH */
            this.height, /**HEIGHT */
             [ 
                this.logo, /**0 */
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
    
        /**SCENE STATES THAT RULES RENDERING CONDITIONS*/
        this.calledNextScene = false;
        this.chooseDifficulty = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {

        /**BACKGROUND UPDATING*/
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


        /**WHEN BUTTON CONTINUE HAS BEEN CLICKED*/
        if(this.game.scenes[1].calledNextScene){

            /**MOVE THESE ELEMENTS TO OUTSIDE SCREEN*/
            this.hud.inputText.moveTo((this.width * 1.6035), (this.height * 1.525), 9);
            this.hud.namePanel.moveTo((this.width * 1.55), (this.height * 1.4), 6);
            this.hud.buttonContinue.moveTo((this.width * 1.87), (this.height * 1.84), 1.2);
            this.hud.dialogueArrow.moveTo((this.width * 0.327), (this.height * -1.283), 6.1);
            this.hud.dialogueBox.moveTo((this.width * 0.35), (this.height * -1.15), 5);

            /**APPEAR THIS ELEMENTS INTO SCREEN */
            this.hud.dialogueBox.fadeIn(0.05);
            this.hud.inputText.fadeIn(0.01);
            this.hud.dialogueArrow.fadeIn(0.05);
    
            /**MOVE THE BACKGROUND TO THE LEFT*/
            this.background.moveTo(this.width * -1, 0, 12);


            /**IF THE OTHER CONTINUE BUTTON IS CLICKED AND ACTIVATE CHOOSE DIFFICULTY STATE */
            if(this.chooseDifficulty){

                /**MOVE THESE ELEMENTS OUTSIDE SCREEN */
                this.hud.buttonContinue2.moveTo((this.width * 0.6), (this.height * 1.2), 1.2);
                this.hud.butterfly.moveTo((this.game.canvas.width * -1.25), (this.game.canvas.height * 0.18), 6);

                /**FADE OUT THESE ELEMENTS TO OPACITY 0*/
                this.hud.imageAkemi.fadeOut(0.05);
                this.hud.dialogueBox2.fadeOut(0.03);
                this.hud.dialogueArrow2.fadeOut(0.03);

                /**ROTATE WHILE GOING AWAY FROM SCREEN */
                this.hud.butterfly.rotate(-45, 0.8)


                /**WHEN EASY BUTTON IS CLICKED */
                if(this.hud.buttonEasy.isMouseClicking()){
                    /**SET DIFFICULTY IN MAIN GAME CLASS */
                    this.game.difficulty = "easy";
                    /**CHANGE STATE TO ENTER NEXT SCENE */
                    this.enterNextScene = true;
                }


                /**WHEN MEDIUM BUTTON IS CLICKED */
                if(this.hud.buttonMedium.isMouseClicking()){
                    /**SET DIFFICULTY IN MAIN GAME CLASS */
                    this.game.difficulty = "medium";
                    /**CHANGE STATE TO ENTER NEXT SCENE */
                    this.enterNextScene = true;
                }


                /**WHEN HARD BUTTON IS CLICKED */
                if(this.hud.buttonHard.isMouseClicking()){
                    /**SET DIFFICULTY IN MAIN GAME CLASS */
                    this.game.difficulty = "hard";
                    /**CHANGE STATE TO ENTER NEXT SCENE */
                    this.enterNextScene = true;
                }


                /**IF ENTER NEXT SCENE STATE IS TRUE */
                if(this.enterNextScene){


                    /**MOVE THESE ELEMENTS OUTSIDE SCREEN */
                    this.hud.difficultyPanel.moveTo((this.width * 0.6), (this.height * -0.9), 6);
                    this.hud.buttonEasy.moveTo((this.width * 0.615), (this.height * -0.84), 6);
                    this.hud.buttonMedium.moveTo((this.width * 0.615), (this.height * -0.65), 6);
                    this.hud.buttonHard.moveTo((this.width * 0.615), (this.height * -0.45), 6);
                    this.hud.imageAkemi2.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);


                    /**FADE OUT THESE ELEMENTS TO OPACITY 0 */
                    this.hud.dialogueBox3.fadeOut(0.03);
                    this.hud.dialogueArrow3.fadeOut(0.03);
                    this.hud.imageAkemi2.fadeOut(0.05);

                   

                    /**SET TIME OUT TO CHANGE TO NEXT SCENE IN MAIN GAME CLASS */
                    setTimeout(() => {
                        this.game.currentScene = 2;
                    }
                    , 1500);

                } else { /**IF ENTER NEXT SCENE STATE IS FALSE -> STILL INSIDE "CHOOSE DIFFICULTY" STATE */
                    
                    /**MOVE THESE ELEMENTS INTO SCREEN */
                    this.hud.difficultyPanel.moveTo((this.width * 0.6), (this.height * 0.3), 6);
                    this.hud.buttonEasy.moveTo((this.width * 0.615), (this.height * 0.376), 6);
                    this.hud.buttonMedium.moveTo((this.width * 0.615), (this.height * 0.56), 6);
                    this.hud.buttonHard.moveTo((this.width * 0.615), (this.height * 0.75), 6);
                    
                    /**FADE IN THESE ELEMENTS TO OPACITY 1 */
                    this.hud.dialogueBox3.fadeIn(0.03);
                    this.hud.dialogueArrow3.fadeIn(0.03);
                }


            } else { /**THE OTHER CONTINUE BUTTON TO CHOOSE DIFFICULTY STATE IS NOT CLICKED YET */
                
                /**MOVE THESE ELEMENTS INTO SCREEN */
                this.hud.buttonContinue2.moveTo((this.width * 0.6), (this.height * 0.8), 1.2);
                this.hud.imageAkemi2.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
                this.hud.butterfly.moveTo((this.game.canvas.width * 0.25), (this.game.canvas.height * 0.18), 6);

                /**ROTATING WHILE APPEARING */
                this.hud.butterfly.rotate(45, 0.8)

                /**FADE IN THESE ELEMENTS TO OPACITY 1 */
                this.hud.imageAkemi2.fadeIn(0.01);
                this.hud.dialogueBox2.fadeIn(0.03);
                this.hud.dialogueArrow2.fadeIn(0.03);
                
            }




            /**IF THE OTHER CONTINUE BUTTON IS CLICKED */
            if(this.hud.buttonContinue2.isMouseClicking()){
                this.chooseDifficulty = true;
            }
                

        } else { /**WHEN FIRST CONTINUE BUTTON IS NOT CLICKED YET*/

            /**APPEAR THESE ELEMENTS INTO SCREEN */
            this.hud.imageAkemi.moveTo((this.width * 0.08), (this.height * 0.2), 0.5);
            this.hud.inputText.moveTo((this.width * 0.61), (this.height * 0.6), 10);
            
            this.hud.namePanel.moveTo((this.width * 0.55), (this.height * 0.4), 7);
            this.hud.buttonContinue.moveTo((this.width * 0.87), (this.height * 0.84), 1.2);
            this.hud.dialogueArrow.moveTo((this.width * 0.327), (this.height * 0.283), 6.1);
            this.hud.dialogueBox.moveTo((this.width * 0.35), (this.height * 0.15), 5);
            this.hud.butterfly.moveTo((this.game.canvas.width * 0.85), (this.game.canvas.height * 0.4), 3);


            /**FADE IN THESE ELEMENTS TO OPACITY 1 */
            this.hud.imageAkemi.fadeIn(0.05);
            this.hud.dialogueBox.fadeIn(0.05);
            this.hud.inputText.fadeIn(0.01);
            this.hud.dialogueArrow.fadeIn(0.05);
           

            /**ROTATE WHILE APPEARING */
            this.hud.namePanel.rotate(0, 1);
            this.hud.inputText.rotate(0, 0.7);
            this.hud.butterfly.rotate(-45, 0.3)

        }

        /**UPDATING ELEMENTS IN SCENE */
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

            /** IF USER DIDN'T TYPED A NAME, IT WON'T CALL NEXT SCENE, BUT ROTATE AS WARNING */
            if(this.hud.inputText.currentInputText === ""){

                /**ROTATE WARNING */
                this.hud.namePanel.rotate(10, 9);

            } else { /**IF USER TYPED A NAME, IT CALLS THE NEXT SCENE */

                /**SET PLAYER NAME IN MAIN GAME CLASS */
                this.game.playerName = this.hud.inputText.currentInputText;
                this.hud.dialogueText2[0] = `${this.game.playerName}! PRECISO DA SUA AJUDA!`;

                /**CHANGE STATE TO CALL NEXT SCENE */
                this.calledNextScene = true;

            }
            
        }








    }

    draw(ctx, scene) {

        /**PAINT CANVAS BLUE */
        /**CREATE GRADIENT*/
        let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
        grd.addColorStop(0, '#87CEEB');   // Blue at the top
        grd.addColorStop(1, 'white');  // White at the bottom

        /**FILL WITH GRADIENT */
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.game.width, this.game.height);
        
        /**ELEMENTS DRAWNING */
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

        /**CONDITIONAL DRAWNING -> IF CALL NEXT SCENE STATE IS TRUE*/
        if(this.calledNextScene){
            this.hud.dialogueBox2.draw(ctx, 0);
            this.hud.dialogueArrow2.draw(ctx, 0);
            this.hud.buttonContinue2.draw(ctx, 0);
        }

        /**CONDITIONAL DRAWNING -> IF CHOOSE DIFFICULTY STATE IS TRUE */
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