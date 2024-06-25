import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { thisGameHUD } from "./thisGameHUD.js";
import { Image } from "../../../engine/image/image.js";
import { Scene2 } from "../scene2/scene2.js";
import { Scene0 } from "../scene0/scene0.js";

export class Scene1 {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.musicPlaying = false;

        /**CHANGING SCENES CONTROL */
        this.calledNextScene = false;
        this.enterNextScene = false;
        this.showDifficultyPanel = false;

        // Full screen event listeners
        this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
        this.handleFullScreenTouchEnd = this.handleFullScreenTouchEnd.bind(this);




        /**ASSETS */
        this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
        this.namePanel = document.getElementById('namePanel');
        this.dialogueBox = document.getElementById('dialogueBox');
        this.buttonContinue = document.getElementById('buttonStart');
        this.difficultyPanel = document.getElementById('difficultyPanel');
        this.buttonEasy = document.getElementById('buttonEasy');
        this.buttonEasyHover = document.getElementById('buttonEasyHover');
        this.buttonMedium = document.getElementById('buttonMedium');
        this.buttonMediumHover = document.getElementById('buttonMediumHover');
        this.buttonHard = document.getElementById('buttonHard');
        this.buttonHardHover = document.getElementById('buttonHardHover');


        /** GAME ASSETS */
        this.backgroundScene1 = document.getElementById('backgroundScene2');

        /**AKEMI GIRL */
        this.akemiImages = document.getElementsByClassName('akemi');

        /**NAME PANEL */
        this.namePanel = document.getElementById('namePanel');

        /**BUTTERFLY */
        this.butterflySprite = document.getElementById('butterflies');

        /**CLOUD IMAGE */
        this.cloudImage = document.getElementById('cloud1');

        /**BACKGROUND BUTTON PANEL */
        this.farmSign = document.getElementById('farmSign');
        
        /**KEYBOARD STATES*/
        this.showKeyboard = false;

        /** DEBUGGING */
        //this.clickDebug = new ClickDebug(this.game.input, this.game.ctx);

        /** BACKGROUND */
        this.background = new Background(
            this,
            0,
            0,
            this.game.width * 2,
            this.game.height,
            'blue',
            10,
            0,
            0,
            [this.backgroundScene1],
            true
        );

        /** CLOUDS */
        this.cloud1 = new Image(
            this.game,
            this.width * 0.1,
            this.height * 0.05,
            this.width * 0.15,
            this.game.height * 0.15,
            0,
            this.cloudImage,
            0.9,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud2 = new Image(
            this.game,
            this.width * 0.7,
            this.height * 0.05,
            this.width * 0.12,
            this.game.height * 0.12,
            0,
            this.cloudImage,
            0.7,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud3 = new Image(
            this.game,
            this.width * 0.6,
            this.height * 0.05,
            this.width * 0.1,
            this.game.height * 0.1,
            0,
            this.cloudImage,
            0.5,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud4 = new Image(
            this.game,
            this.width * 0.9,
            this.height * 0.05,
            this.width * 0.08,
            this.game.height * 0.08,
            0,
            this.cloudImage,
            0.3,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud5 = new Image(
            this.game,
            this.width * 0.5,
            this.height * 0.05,
            this.width * 0.06,
            this.game.height * 0.06,
            0,
            this.cloudImage,
            0.4,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        /** CHARACTERS -> BUTTERFLY */
        this.butterfly = new Sprite(
            [
                this.butterflySprite, /** FLYING */
            ], /** IMAGE */
            this.game, /** GAME */
            256, /** SPRITE WIDTH */
            160, /** SPRITE HEIGHT */
            this.game.height * 0.0005, /** SIZE X */
            this.game.height * 0.0005, /** SIZE Y */
            (this.game.canvas.width * 1.02), /** DESTINY X */
            (this.game.canvas.height * 0.14), /** DESTINY Y */
            4, /** MAX FRAME X */
            0, /** MAX FRAME Y */
            75, /** FRAME SPEED */
            -135, /** ROTATION */
            false /** PLAYER CONTROL */
        );

        /** HUD */
        this.hud = new thisGameHUD(this.game, 0, 0, this.width, this.height, [
            this.akemiImages[3], /**IMAGES[0] */
            this.namePanel, /**IMAGES[1] */
            this.butterfly, /**IMAGES[2] */
            this.cloud1, /**IMAGES[3] */
            this.farmSign, /**IMAGES[4] */
            this.dialogueBox, /**IMAGES[5] */
            this.buttonContinue, /**IMAGES[6] */
            this.difficultyPanel, /**IMAGES[7] */
            this.buttonEasy, /**IMAGES[8] */
            this.buttonEasyHover, /**IMAGES[9] */
            this.buttonMedium, /**IMAGES[10] */
            this.buttonMediumHover, /**IMAGES[11] */
            this.buttonHard, /**IMAGES[12] */
            this.buttonHardHover, /**IMAGES[13] */
            this.akemiImages[0], /**IMAGES[14] */
            this.akemiImages[1], /**IMAGES[15] */
            this.akemiImages[2], /**IMAGES[16] */
            this.akemiImages[4], /**IMAGES[17] */
            this.akemiImages[5], /**IMAGES[18] */
            this.akemiImages[6], /**IMAGES[19] */
        ]);



        this.namePanel.addEventListener('click', () => {
            this.game.changeScene(Scene1);
        });

        window.addEventListener('keydown', (e) => {
            if(e.key == "Enter"){
                if(this.hud.namePanel.uniqueText != ""
                    && this.hud.namePanel.uniqueText != " "
                    && this.hud.namePanel.uniqueText != "  "
                    && this.hud.namePanel.uniqueText != "   "
                    && this.hud.namePanel.uniqueText != "    "
                    && this.hud.namePanel.uniqueText != "     "
                    && this.hud.namePanel.uniqueText != "      "
                    && this.hud.namePanel.uniqueText != "       " 
                    && this.hud.namePanel.uniqueText != "        "
                    && this.hud.namePanel.uniqueText != "         "
                    && this.hud.namePanel.uniqueText != "          "
                    && this.hud.namePanel.uniqueText != "           "
                    && this.hud.namePanel.uniqueText != "            "
                    && this.hud.namePanel.uniqueText != "             "
                    && this.hud.namePanel.uniqueText != "              "
                ){
                    this.game.playerName = this.hud.namePanel.uniqueText;
                    this.hud.dialogueBox2.text[1] = `                        ${this.game.playerName}, PRECISO DA SUA AJUDA! PRECISO COLHER FRUTAS, FLORES E  `;
                    this.calledNextScene = true;
                } else {
                    this.hud.namePanel.rotate(10, this.game.speed * 0.05);
                }
            }
        });
    }

    handleFullScreenClick() {
        this.game.toggleFullScreen();
        window.removeEventListener('click', this.handleFullScreenClick);
        this.game.input.mouse.clicked = false;
    }

    handleFullScreenTouchEnd() {
        this.game.toggleFullScreen();
        window.removeEventListener('touchend', this.handleFullScreenTouchEnd);
        this.game.input.mouse.clicked = false;
    }

    update(deltaTime) {
        
        /** ELEMENTS APPEARING | ELEMENTS DISAPPEARING */
        (() => {
            if (!this.calledNextScene) {

                /**AKEMI GIRL*/
                this.hud.imageAkemi.fadeIn(0.04);
                this.hud.imageAkemi.moveTo(this.game.width * 0.09, this.game.height * 0.25, (this.game.speed * 0.05));

                /**NAME PANEL*/
                this.hud.namePanel.fadeIn(0.01);
                if(!this.showKeyboard){
                    this.hud.namePanel.moveTo(this.game.width * 0.55, this.game.height * 0.42, (this.game.speed * 0.35));
                }
                this.hud.namePanel.rotate(0, this.game.speed * 0.032);

                /**BUTTERFLY */
                if(!this.showKeyboard){
                    this.butterfly.moveTo(this.game.canvas.width * 0.85, this.game.canvas.height * 0.44, (this.game.speed * 0.15));
                    this.butterfly.rotate(-15, this.game.speed * 0.053);
                }

                /**FULL SCREEN BUTTON*/
                this.hud.buttonFullScreen.moveTo(this.game.width * 0.01, this.game.height * 0.89, (this.game.speed * 0.5));

                /**KEYBOARD*/
                if(this.showKeyboard){
                    this.hud.keyboard.moveTo(this.game.width * 0.01, this.game.height * 0.19, (this.game.speed * 1));
                    this.hud.buttonHideKeyboard.moveTo(this.game.width * 0.2, this.game.height * 0.89, (this.game.speed * 0.5));
                    this.hud.buttonShowKeyboard.moveTo(this.game.width * 0.2, this.game.height * 1.1, (this.game.speed * 0.5));
                    this.hud.namePanel.moveTo(this.game.width * 0.6, this.game.height * 0.52, (this.game.speed * 0.35));
                    this.butterfly.moveTo(this.game.canvas.width * 0.92, this.game.canvas.height * 0.56, (this.game.speed * 0.10));
                    this.butterfly.rotate(15, this.game.speed * 0.033);

                    /**DIALOGUE BOX*/
                    this.hud.dialogueBox.fadeOut(0.02);

                    /**CONTINUE BUTTON*/
                    this.hud.buttonContinue.moveTo(this.game.width * 0.80, this.game.height * 0.85, (this.game.speed * 0.15));

                } else {
                    this.hud.keyboard.moveTo(this.game.width * 0.01, this.game.height * 1.1, (this.game.speed * 1));
                    this.hud.buttonShowKeyboard.moveTo(this.game.width * 0.2, this.game.height * 0.89, (this.game.speed * 0.5));
                    this.hud.buttonHideKeyboard.moveTo(this.game.width * 0.2, this.game.height * 1.1, (this.game.speed * 0.5));
                
                    /**DIALOGUE BOX*/
                    this.hud.dialogueBox.fadeIn(0.01);

                    /**CONTINUE BUTTON*/
                    this.hud.buttonContinue.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                }



            } else {


                if(!this.showDifficultyPanel){



                    /**BUTTERFLY */
                    this.butterfly.moveTo(this.game.canvas.width * 0.25, this.game.canvas.height * 0.32, (this.game.speed * 0.32));
                    if(this.butterfly.x < this.game.width * 0.5){
                        this.butterfly.rotate(30, this.game.speed * 0.073);
                    } else {
                        this.butterfly.rotate(-80, this.game.speed * 0.033);
                    }

                    /**DIALOGUE BOX */
                    this.hud.dialogueBox.fadeOut(0.05);
                    this.hud.dialogueBox2.fadeIn(0.02);
                  

                    /**CONTINUE BUTTON 2 */
                    this.hud.buttonContinue2.moveTo(this.game.width * 0.6, this.game.height * 0.8, (this.game.speed * 0.15));

                    /**BUTTON HIDE KEYBOARD */
                    this.hud.buttonHideKeyboard.moveTo(this.game.width * 0.2, this.game.height * 1.1, (this.game.speed * 0.5));

                    



                } else {

                    if(!this.enterNextScene){
                        this.butterfly.moveTo(this.game.canvas.width * -0.25, this.game.canvas.height * -0.22, (this.game.speed * 0.32));
                        this.butterfly.rotate(-80, this.game.speed * 0.033);
    
                        /**DIALOGUE TEXT 2 */
                        this.hud.dialogueBox2.fadeOut(0.03);
    
                        /**CONTINUE BUTTON 2 */
                        this.hud.buttonContinue2.moveTo(this.game.width * 0.6, this.game.height * 1.1, (this.game.speed * 0.15));
                        
                        /**DIFFICULTY PANEL AND BUTTONS*/
                        this.hud.difficultyPanel.moveTo(this.game.width * 0.55, this.game.height * 0.28, (this.game.speed * 0.75));
                        this.hud.buttonEasy.moveTo(this.game.width * 0.56, this.game.height * 0.355, (this.game.speed * 0.75));
                        this.hud.buttonMedium.moveTo(this.game.width * 0.57, this.game.height * 0.539, (this.game.speed * 0.75));
                        this.hud.buttonHard.moveTo(this.game.width * 0.57, this.game.height * 0.719, (this.game.speed * 0.75));
                        
                        this.hud.dialogueBox3.fadeIn(0.01);
    
                        this.hud.imageAkemi.fadeOut(0.01);
                        this.hud.imageAkemiPointing.fadeIn(0.01);
                    } else {

                        this.hud.difficultyPanel.fadeOut(0.01);
                        this.hud.buttonEasy.fadeOut(0.01);
                        this.hud.buttonMedium.fadeOut(0.01);
                        this.hud.buttonHard.fadeOut(0.01);
                        this.hud.dialogueBox3.fadeOut(0.01);
                        this.hud.imageAkemiPointing.fadeOut(0.01);
                        
                        setTimeout(() => {
                            this.changeScene();
                        }, 1000);

                    }
                
                }


                /**NAME PANEL */
                this.hud.namePanel.fadeOut(0.01);
                this.hud.namePanel.moveTo(this.game.width * 0.85, this.game.height * 0.75, (this.game.speed * 0.35));



                /**KEYBOARD */
                this.hud.keyboard.moveTo(this.game.width * 0.01, this.game.height * 1.1, (this.game.speed * 1));
                this.hud.buttonShowKeyboard.moveTo(this.game.width * 0.2, this.game.height * 1.1, (this.game.speed * 0.5));
                


                /**CONTINUE BUTTON */
                this.hud.buttonContinue.moveTo(this.game.width * 0.8, this.game.height * 1.1, (this.game.speed * 0.15));



                /**BACKGROUND MOVE */
                this.background.moveTo(this.background.width * -0.5, 0, (this.game.speed * 1));


            }
        })();

        /** MANAGE CLOUDS MOVEMENT */
        (() => {
            if (this.cloud1.x > this.game.canvas.width) {
                this.cloud1.x = 0 - this.cloud1.width;
            } else {
                this.cloud1.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.045));
            }
            if (this.cloud2.x > this.game.canvas.width) {
                this.cloud2.x = 0 - this.cloud2.width;
            } else {
                this.cloud2.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.035));
            }
            if (this.cloud3.x > this.game.canvas.width) {
                this.cloud3.x = 0 - this.cloud3.width;
            } else {
                this.cloud3.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.05));
            }
            if (this.cloud4.x > this.game.canvas.width) {
                this.cloud4.x = 0 - this.cloud4.width;
            } else {
                this.cloud4.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.025));
            }
            if (this.cloud5.x > this.game.canvas.width) {
                this.cloud5.x = 0 - this.cloud5.width;
            } else {
                this.cloud5.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.015));
            }
        })();

        /** HANDLE CLICKS */
        (() => {
            /** FULL SCREEN BUTTON */
            if (this.hud.buttonFullScreen.isTouchOver(this.game.input.touches) || this.hud.buttonFullScreen.isMouseClicking(this.game.input.mouse)) {
                window.addEventListener('click', this.handleFullScreenClick);
                window.addEventListener('touchend', this.handleFullScreenTouchEnd);
            }

            /**KEYBOARD BUTTONS */
            if(this.hud.buttonShowKeyboard.isTouchOver(this.game.input.touches) || this.hud.buttonShowKeyboard.isMouseClicking(this.game.input.mouse)){
                this.showKeyboard = true;
            }
            if(this.hud.buttonHideKeyboard.isTouchOver(this.game.input.touches) || this.hud.buttonHideKeyboard.isMouseClicking(this.game.input.mouse)){
                this.showKeyboard = false;
            }

            /**CONTINUE BUTTON */
            if(this.hud.buttonContinue.isTouchOver(this.game.input.touches) || this.hud.buttonContinue.isMouseClicking(this.game.input.mouse)){
                if(this.hud.namePanel.uniqueText != ""
                    && this.hud.namePanel.uniqueText != " "
                    && this.hud.namePanel.uniqueText != "  "
                    && this.hud.namePanel.uniqueText != "   "
                    && this.hud.namePanel.uniqueText != "    "
                    && this.hud.namePanel.uniqueText != "     "
                    && this.hud.namePanel.uniqueText != "      "
                    && this.hud.namePanel.uniqueText != "       " 
                    && this.hud.namePanel.uniqueText != "        "
                    && this.hud.namePanel.uniqueText != "         "
                    && this.hud.namePanel.uniqueText != "          "
                    && this.hud.namePanel.uniqueText != "           "
                    && this.hud.namePanel.uniqueText != "            "
                    && this.hud.namePanel.uniqueText != "             "
                    && this.hud.namePanel.uniqueText != "              "
                ){
                    this.game.playerName = this.hud.namePanel.uniqueText;
                    this.hud.dialogueBox2.text[1] = `                        ${this.game.playerName}, PRECISO DA SUA AJUDA! PRECISO COLHER FRUTAS, FLORES E  `;
                    this.calledNextScene = true;
                } else {
                    this.hud.namePanel.rotate(10, this.game.speed * 0.05);
                }
            }

            /**CONTINUE BUTTON 2 */
            if(this.hud.buttonContinue2.isTouchOver(this.game.input.touches) || this.hud.buttonContinue2.isMouseClicking(this.game.input.mouse)){
                this.showDifficultyPanel = true;
            }


            /**EASY BUTTON */
            if(this.hud.buttonEasy.isTouchOver(this.game.input.touches) || this.hud.buttonEasy.isMouseClicking(this.game.input.mouse)){
                this.game.difficulty = "easy";
                this.enterNextScene = true;
            }
            /**MEDIUM BUTTON */
            if(this.hud.buttonMedium.isTouchOver(this.game.input.touches) || this.hud.buttonMedium.isMouseClicking(this.game.input.mouse)){
                this.game.difficulty = "medium";
                this.enterNextScene = true;
            }
            /**HARD BUTTON */
            if(this.hud.buttonHard.isTouchOver(this.game.input.touches) || this.hud.buttonHard.isMouseClicking(this.game.input.mouse)){
                this.game.difficulty = "hard";
                this.enterNextScene = true;
            }

            /**NAME PANEL */
            (()=>{
                if(this.hud.namePanel.isTouchOver() && !this.showKeyboard){
                    this.showKeyboard = true;
                    this.game.input.touches = [];
                };
            })();



        })();

        /** UPDATING ELEMENTS */
        this.hud.namePanel.update(deltaTime);
        this.hud.buttonFullScreen.update(deltaTime);
        this.butterfly.update(deltaTime);
        this.hud.keyboard.update(deltaTime);
        this.hud.buttonShowKeyboard.update(deltaTime);
        this.hud.buttonHideKeyboard.update(deltaTime);
        this.hud.buttonContinue.update(deltaTime);
        this.hud.buttonContinue2.update(deltaTime);
        this.hud.dialogueBox.update(deltaTime);
        this.hud.namePanel.update();
        this.hud.buttonEasy.update(deltaTime);
        this.hud.buttonMedium.update(deltaTime);
        this.hud.buttonHard.update(deltaTime);

        /**NAME PANEL BLINKING CURSOR*/
        this.hud.namePanel.startBlinkingCursor();

        /**UPDATE PLAYER NAME IN NAME PANEL */
        this.hud.namePanel.uniqueText = this.hud.keyboard.currentInput;

        /** CHANGING SCENE */
        if(this.calledNextScene){
            //this.changeScene();
        }
        
        /**HOVERING BUTTON CHANGING IMAGES */
        /**BUTTON EASY*/
        if(this.hud.buttonEasy.isTouchOver(this.game.input.touches) || this.hud.buttonEasy.isMouseOver(this.game.input.mouse)){
            this.hud.buttonEasy.image = this.buttonEasyHover;
        } else {
            this.hud.buttonEasy.image = this.buttonEasy;
        }
        /**BUTTON MEDIUM */
        if(this.hud.buttonMedium.isTouchOver(this.game.input.touches) || this.hud.buttonMedium.isMouseOver(this.game.input.mouse)){
            this.hud.buttonMedium.image = this.buttonMediumHover;
        } else {
            this.hud.buttonMedium.image = this.buttonMedium;
        }
        /**BUTTON HARD */
        if(this.hud.buttonHard.isTouchOver(this.game.input.touches) || this.hud.buttonHard.isMouseOver(this.game.input.mouse)){
            this.hud.buttonHard.image = this.buttonHardHover;
        } else {
            this.hud.buttonHard.image = this.buttonHard;
        }

       
    }

    draw(ctx, scene) {
        /** PAINT CANVAS BLUE */
        let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
        grd.addColorStop(0, '#87CEEB');
        grd.addColorStop(1, 'lightgray');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.game.width, this.game.height);

        /** BACKGROUND DRAW */
        this.background.draw(this.game.ctx, 0);

        /** CLOUDS DRAW */
        this.cloud1.draw(ctx, 0);
        this.cloud2.draw(ctx, 0);
        this.cloud3.draw(ctx, 0);
        this.cloud4.draw(ctx, 0);
        this.cloud5.draw(ctx, 0);

        /** AKEMI GIRL DRAW */
        this.hud.imageAkemi.draw(ctx, 0);
        this.hud.imageAkemiPointing.draw(ctx, 0);



        /** NAME PANEL DRAW */
        this.hud.namePanel.draw(ctx, 0);

        /** BUTTON FULL SCREEN DRAW */
        this.hud.buttonFullScreen.draw(ctx, 0);

        /**BUTTON CONTINUE */
        this.hud.buttonContinue.draw(ctx, 0);
        this.hud.buttonContinue2.draw(ctx, 0);

        /**BUTTONS KEYBOARD CONTROL */
        this.hud.buttonShowKeyboard.draw(ctx, 0);
        this.hud.buttonHideKeyboard.draw(ctx, 0);

        /**DIFFICULTY PANEL AND BUTTONS */
        this.hud.buttonEasy.draw(ctx, 0);
        this.hud.buttonMedium.draw(ctx, 0);
        this.hud.buttonHard.draw(ctx, 0);
        this.hud.difficultyPanel.draw(ctx, 0);


        /**KEYBOARD */
        this.hud.keyboard.draw(ctx);

        /**DIALOGUE BOX */
        this.hud.dialogueBox.draw(ctx, 0);
        this.hud.dialogueBox2.draw(ctx, 0);
        this.hud.dialogueBox3.draw(ctx, 0);

        /** BUTTERFLY DRAW */
        this.butterfly.draw(ctx);

        /** DEBUGGING */
        //this.clickDebug.draw();
    }

    playSound() {
        this.musicMenu.play();
    }

    changeScene() {
        this.game.changeScene(Scene2);
    }


}