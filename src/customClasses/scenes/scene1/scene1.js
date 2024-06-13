import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { thisGameHUD } from "./thisGameHUD.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Scene2 } from "../scene2/scene2.js";

export class Scene1 {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.musicPlaying = false;
        this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
        this.namePanel = document.getElementById('namePanel');

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


        this.farmSign = document.getElementById('farmSign');

        /** DEBUGGING */
        // this.clickDebug = new ClickDebug(this.game.input, this.game.ctx);

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
            this.akemiImages[3],
            this.namePanel,
            this.butterfly,
            this.cloud1,
            this.farmSign
        ]);

        this.calledNextScene = false;
        this.enterNextScene = false;

        // Full screen event listeners
        this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
        this.handleFullScreenTouchEnd = this.handleFullScreenTouchEnd.bind(this);

        this.namePanel.addEventListener('click', () => {
            this.game.changeScene(Scene1);
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
                this.hud.imageAkemi.fadeIn(0.01);
                this.hud.imageAkemi.moveTo(this.game.width * 0.09, this.game.height * 0.25, (this.game.speed * 0.05));

                /**NAME PANEL*/
                this.hud.namePanel.fadeIn(0.01);
                this.hud.namePanel.moveTo(this.game.width * 0.55, this.game.height * 0.42, (this.game.speed * 0.35));
                this.hud.namePanel.rotate(0, this.game.speed * 0.032);

                /**BUTTERFLY */
                this.butterfly.moveTo(this.game.canvas.width * 0.85, this.game.canvas.height * 0.44, (this.game.speed * 0.15));
                this.butterfly.rotate(-15, this.game.speed * 0.053);

            } else {

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
            /** START BUTTON */
            if(this.hud.namePanel.isTouchOver(this.game.input.touches) || this.hud.namePanel.isMouseClicking(this.game.input.mouse)){
                this.calledNextScene = true;
            }
        })();

        /** UPDATING ELEMENTS */
        this.hud.namePanel.update(deltaTime);
        this.hud.buttonFullScreen.update(deltaTime);
        this.butterfly.update(deltaTime);

        /** CHANGING SCENE */
        if(this.calledNextScene){
            this.changeScene();
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

        /** NAME PANEL DRAW */
        this.hud.namePanel.draw(ctx, 0);

        /** BUTTON FULL SCREEN DRAW */
        this.hud.buttonFullScreen.draw(ctx, 0);

        /** BUTTERFLY DRAW */
        this.butterfly.draw(ctx);

        /** DEBUGGING */
        // this.clickDebug.draw();
    }

    playSound() {
        this.musicMenu.play();
    }

    changeScene() {
        this.game.changeScene(Scene1);
    }
}