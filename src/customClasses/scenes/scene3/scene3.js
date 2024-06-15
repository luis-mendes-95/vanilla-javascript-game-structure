import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { Image } from "../../../engine/hud/image/image.js";

export class Scene3 {

    constructor(game) {

        /**THIS SCENE SETUP */
        (()=>{

            /**RANDOM FRUIT (6 FRUITS) */
            this.randomFruit = Math.floor(Math.random() * 6);

            console.log(this.randomFruit)

            this.game = game;
            this.startGame = false;
            this.width = this.game.width;
            this.height = this.game.height;
            this.musicPlaying = false;
            this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
            this.calledNextScene = false;
            this.enterNextScene = false;

            /**FULLSCREEN FUNCTIONS */
            this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
            this.handleFullScreenTouchEnd = this.handleFullScreenTouchEnd.bind(this);
        })();

        /** GAME ASSETS */
        (()=>{
            /**BACKGROUND IMAGE*/
            this.backgroundScene1 = document.getElementById('gameFrame');
            /**CLOUD IMAGE*/
            this.cloudImage = document.getElementById('cloud1');
            /**GAME BACKGROUND*/
            this.gameBackground = document.getElementById('gameBackground');
            /**DIALOGUE IMAGE */
            this.dialogueBox = document.getElementById('dialogueBox');
            /**BUTTON CONTINUE */
            this.buttonContinue = document.getElementById('buttonStart');
            /**AKEMI GIRL */
            this.akemiImages = document.getElementsByClassName('akemi');
            /**BACKGROUND BUTTON PANEL */
            this.farmSign = document.getElementById('farmSign');
            /**BASKET */
            this.basket = document.getElementById('basket');
            /**TREE */
            this.mainTree0 = document.getElementById('mainTree');
        })();

        /** BACKGROUNDS */
        (()=>{
            this.background = new Background(
                this,
                0,
                0,
                this.game.width,
                this.game.height,
                'blue',
                10,
                0,
                0,
                [this.gameBackground],
                true
            );

            this.backgroundGameFrame = new Background(
                this,
                0,
                0,
                this.game.width,
                this.game.height * 0.7,
                'blue',
                10,
                0,
                0,
                [this.backgroundScene1],
                true
            );
        })();

        /** CLOUDS */
        (()=>{

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
        })();

        /**SCENE ELEMENTS */
        (()=>{

            /**AKEMI GIRL */
            (()=>{
                this.imageAkemi = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.09), /**X */
                    (this.height * 0.25), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.75), /**HEIGHT */
                    0, /**ROTATION */
                    this.akemiImages[5],  /**IMAGE */
                    0, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );
            })();

            /**BASKET */
            (()=>{
                this.basket = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.71), /**X */
                    (this.height * 0.04), /**Y */
                    (this.game.width * 0.28), /**WIDTH */
                    (this.game.height * 0.66), /**HEIGHT */
                    0, /**ROTATION */
                    this.basket,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );
            })();

            /**DIALOGUE BOXES*/
            (()=>{
                /**DIALOGUE BOX 1 */
                this.dialogueBox1 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `${this.game.playerName}, ME AJUDE COLETANDO`, /**TEXT 1 */
                        `               AS FRUTAS NA QUANTIDADE MOSTRADA ABAIXO!  `, /**TEXT 2 */
                        `                    CLIQUE EM UMA DELAS E ARRASTE PARA A CESTA!  `
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    0, /**TEXT OFFSET Y */
                );

                /**DIALOGUE BOX 2 */
                this.dialogueBox2 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `                MAS TOME CUIDADO COM AS AVES!`,
                        `                  ELAS PODEM ROUBAR AS FRUTAS DO POMAR!  `,
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    -15, /**TEXT OFFSET Y */
                );
            })();

            /**CONTINUE BUTTON */
            (()=>{
                /**CONTINUE BUTTON 1 */
                this.continueButton1 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 1), /**X */
                    (this.height * 1.155), /**Y */
                    (this.game.width * 0.2), /**WIDTH */
                    (this.game.height * 0.3), /**HEIGHT */
                    -20, /**ROTATION */
                    this.buttonContinue,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.height * 0.06), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "CONTINUAR", /**UNIQUE TEXT */
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );

                /**CONTINUE BUTTON 2 */
                this.continueButton2 = new Image(
                    this.game, // GAME
                    (this.game.width * 1), // X
                    (this.height * 1.155), // Y
                    (this.game.width * 0.2), // WIDTH
                    (this.game.height * 0.3), // HEIGHT
                    -20, // ROTATION
                    this.buttonContinue, // IMAGE
                    1, // OPACITY
                    "", // TEXT (null changed to empty string to match constructor parameter types)
                    (this.height * 0.1), // TEXT SPACING
                    "PatrickHand", // TEXT FONT
                    "bold", // FONT WEIGHT
                    (this.height * 0.06), // FONT SIZE
                    (this.game.width * 0.365), // TEXT X
                    (this.height * 1.50), // TEXT Y
                    "black", // TEXT COLOR
                    true, // MOUSE HOVER
                    "", // TEXTS ALIGN -> ROW OR COLUMN (null changed to empty string to match constructor parameter types)
                    "CONTINUAR", // UNIQUE TEXT
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    false // HOVER SCALE (added to match constructor parameters)
                );
            })();

            /**TREES | FRUITS*/
            (()=>{
                /**MAIN TREE*/
                this.mainTree = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.19), /**X */
                    (this.height * 0.05), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.75), /**HEIGHT */
                    0, /**ROTATION */
                    this.mainTree0,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );
            })();

        })();

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

                this.imageAkemi.fadeIn(0.01);
                this.dialogueBox1.fadeIn(0.01);

                this.continueButton1.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));

            } else {

                if(!this.startGame){
                    this.dialogueBox1.fadeOut(0.01);
                    this.dialogueBox2.fadeIn(0.01);
    
                    this.continueButton1.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.continueButton2.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                } else {
                    this.dialogueBox1.fadeOut(0.01);
                    this.dialogueBox2.fadeOut(0.01);
                    this.imageAkemi.fadeOut(0.01);  
                    this.continueButton1.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.continueButton2.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.imageAkemi.moveTo(this.game.width * 0.09, this.game.height * 1.155, (this.game.speed * 0.15));

                }




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

            /**CONTINUE BUTTON 1 */
            (()=>{
                if(this.continueButton1.isMouseOver() || this.continueButton1.isTouchOver()){

                    window.addEventListener('click', ()=>{
                        this.calledNextScene = true;
                    });

                    window.addEventListener('touchend', ()=>{
                        this.calledNextScene = true;
                    });

                }
            })();

            /**CONTINUE BUTTON 2 */
            (()=>{
                if(this.continueButton2.isMouseOver() || this.continueButton1.isTouchOver()){

                    window.addEventListener('click', ()=>{
                        this.startGame = true;
                    });

                    window.addEventListener('touchend', ()=>{
                        this.startGame = true;
                    });

                }
            })();

        })();

        /** UPDATING ELEMENTS */
        (() => {
            this.imageAkemi.update(deltaTime);
            this.dialogueBox1.update(deltaTime);
            this.dialogueBox2.update(deltaTime);
            this.continueButton1.update(deltaTime);
            this.continueButton2.update(deltaTime);
        })();

        /**CHANGING SCENE */
        if (this.calledNextScene && this.background.x <= -this.game.width) {
            this.changeScene();
        }
       
    }

    draw(ctx, scene) {

        /** PAINT CANVAS BLUE WITH GRADIENT TO WHITE */
        (()=>{
            let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
            grd.addColorStop(0, '#87CEEB');
            grd.addColorStop(1, 'lightgray');
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, this.game.width, this.game.height);
        })();

        /** BACKGROUNDS DRAWING | CLOUDS DRAWING | TREE DRAWING*/
        (()=>{
            this.backgroundGameFrame.draw(this.game.ctx, 0);

            /** CLOUDS DRAWING */
            (()=>{
                this.cloud1.draw(ctx, 0);
                this.cloud2.draw(ctx, 0);
                this.cloud3.draw(ctx, 0);
                this.cloud4.draw(ctx, 0);
                this.cloud5.draw(ctx, 0);
            })();

            /**MAIN TREE DRAWING */
            this.mainTree.draw(ctx, 0);

            this.background.draw(this.game.ctx, 0);
        })();

        /**AKEMI GIRL DRAWING */
        this.imageAkemi.draw(ctx, 0);

        /**BASKET DRAWING*/
        this.basket.draw(ctx, 0);

        /**DIALOGUE BOXES DRAWING*/
        (()=>{
            this.dialogueBox1.draw(ctx, 0);
            this.dialogueBox2.draw(ctx, 0);
        })();

        /**CONTINUE BUTTON DRAWING */
        (()=>{
            this.continueButton1.draw(ctx, 0);
            this.continueButton2.draw(ctx, 0);
        })();

    }

    playSound() {
        this.musicMenu.play();
    }

    changeScene() {
        this.game.changeScene(Scene3);
    }
}