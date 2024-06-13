import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { thisGameHUD } from "./thisGameHUD.js";
import { Image } from "../../../engine/hud/image/image.js";

export class Scene0 {
    constructor(game) {
        this.started = false;

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.musicPlaying = false;
        this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
        this.buttonStart = document.getElementById('buttonStart');

        /**GAME ASSETS*/
        this.backgroundScene1 = document.getElementById('backgroundScene1');
        this.logo = document.getElementById('logo');
        this.akemiImages = document.getElementsByClassName('akemi');
        this.gameTitleImage = document.getElementById('gameTitle');
        this.buttonStart = document.getElementById('buttonStart');
        this.butterflySprite = document.getElementById('butterflies');
        this.cloudImage = document.getElementById('cloud1');
        this.farmSign = document.getElementById('farmSign');

        /**DEBUGGING*/
        this.clickDebug = new ClickDebug(this.game.input, this.game.ctx);

        /**BACKGROUND*/
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
            [this.backgroundScene1],
            true
        );

        /**CLOUDS */
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

        /**CHARACTERS -> BUTTERFLY */
        this.butterfly = new Sprite(
            [
                this.butterflySprite, /**FLYING*/
            ], /**IMAGE*/
            this.game, /**GAME*/
            256, /**SPRITE WIDTH*/
            160, /**SPRITE HEIGHT*/
            this.game.height * 0.0005, /**SIZE X*/
            this.game.height * 0.0005, /**SIZE Y*/
            (this.game.canvas.width * 1.00), /**DESTINY X */
            (this.game.canvas.height * 0.14), /**DESTINY Y */
            4, /**MAX FRAME X */
            0, /**MAX FRAME Y */
            75, /**FRAME SPEED */
            -135, /**ROTATION */
            false /**PLAYER CONTROL */
        );

        /**HUD*/
        this.hud = new thisGameHUD(this.game, 0, 0, this.width, this.height, [
            this.logo,
            this.akemiImages[3],
            this.gameTitleImage,
            this.buttonStart,
            this.butterfly,
            this.cloud1,
            this.farmSign
        ]);

        this.calledNextScene = false;
        this.enterNextScene = false;

        // Full screen event listeners
        this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
        this.handleFullScreenTouchEnd = this.handleFullScreenTouchEnd.bind(this);
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
        /**ELEMENTS APPEARING | ELEMENTS DISAPPEARING*/
        (() => {
            if (!this.calledNextScene) {
                /**LOGO*/
                this.hud.imageLogo.moveTo(this.game.width * 0.02, this.game.height * 0.02, this.game.speed * 0.1);
                /**AKEMI GIRL*/
                this.hud.imageAkemi.moveTo(this.game.width * 0.09, this.game.height * 0.25, this.game.speed * 0.1);
                this.hud.imageAkemi.fadeIn(this.game.speed * 0.001);
                /**GAME TITLE */
                this.hud.imageTitle.moveTo(this.game.width * 0.59, this.game.height * 0.05, this.game.speed * 0.2);
                /**BUTTON START */
                this.hud.buttonStartGame.moveTo(this.game.width * 0.6, this.game.height * 0.7, this.game.speed * 0.15);
                /**BUTTERFLY */
                this.butterfly.moveTo(this.game.width * 0.7, this.game.height * 0.68, this.game.speed * 0.2);
                this.butterfly.rotate(-20, (this.game.speed * 0.048));
            } else {
                /**LOGO*/
                this.hud.imageLogo.moveTo(this.game.width * 0.02, this.game.height * -0.12, this.game.speed * 0.1);
                /**AKEMI GIRL */
                this.hud.imageAkemi.moveTo(this.game.width * 0.09, this.game.height * 0.35, this.game.speed * 0.1);
                this.hud.imageAkemi.fadeOut(this.game.speed * 0.001);
                /**GAME TITLE */
                this.hud.imageTitle.moveTo(this.game.width * 0.59, this.game.height * -0.25, this.game.speed * 0.2);
                /**BUTTON START */
                this.hud.buttonStartGame.moveTo(this.game.width * 0.6, this.game.height * 1.2, this.game.speed * 0.15);
                /**BUTTERFLY */
                this.butterfly.moveTo(this.game.width * 1.00, this.game.height * 0.14, this.game.speed * 0.2);
                this.butterfly.rotate(135, (this.game.speed * 0.038));
            }
        })();

        /**MANAGE CLOUDS MOVEMENT*/
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

        /**HANDLE CLICKS*/
        (() => {
            /**FULL SCREEN BUTTON*/
            if (this.hud.buttonFullScreen.isTouchOver(this.game.input.touches) || this.hud.buttonFullScreen.isMouseClicking(this.game.input.mouse)) {
                window.addEventListener('click', this.handleFullScreenClick);
                window.addEventListener('touchend', this.handleFullScreenTouchEnd);
            }
            /**START BUTTON*/
            if(this.hud.buttonStartGame.isTouchOver(this.game.input.touches) || this.hud.buttonStartGame.isMouseClicking(this.game.input.mouse)){
                this.calledNextScene = true;
            }
        })();

        /**UPDATING ELEMENTS*/
        this.hud.buttonStartGame.update(deltaTime);
        this.hud.buttonFullScreen.update(deltaTime);
        this.butterfly.update(deltaTime);

        /**DEBUGGING */
        (() => {

            this.clickDebug.draw();

            
        })();

        
    }

    draw(ctx, scene) {
        /**PAINT CANVAS BLUE */
        let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
        grd.addColorStop(0, '#87CEEB');
        grd.addColorStop(1, 'lightgray');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.game.width, this.game.height);

        /**BACKGROUND DRAW */
        this.background.draw(this.game.ctx, 0);

        /**CLOUDS DRAW*/
        this.cloud1.draw(ctx, 0);
        this.cloud2.draw(ctx, 0);
        this.cloud3.draw(ctx, 0);
        this.cloud4.draw(ctx, 0);
        this.cloud5.draw(ctx, 0);

        /**LOGO DRAW*/
        this.hud.imageLogo.draw(ctx, 0);

        /**AKEMI GIRL DRAW*/
        this.hud.imageAkemi.draw(ctx, 0);

        /**GAME NAME TITLE DRAW*/
        this.hud.imageTitle.draw(ctx, 0);

        /**BUTTON START DRAW*/
        this.hud.buttonStartGame.draw(ctx, 0);

        /**BUTTON FULL SCREEN DRAW */
        this.hud.buttonFullScreen.draw(ctx, 0);

        /**BUTTERFLY DRAW */
        this.butterfly.draw(ctx);

        /**DEBUGGING */
        this.clickDebug.draw();
    }

    playSound() {
        this.musicMenu.play();
    }
}
