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


        /**BACKGROUND*/
        this.background = new Background(
            this, /**GAME */
            0,  /**X */
            0, /**Y */
            this.game.width * 1, /**WIDTH */
            this.game.height * 1, /**HEIGHT */
            'blue', /**COLOR */
            10, /**SPEED */
            0, /**VELOCITY Y */
            0, /**VELOCITY X */
            [
                this.backgroundScene1 /**IMAGES[0] */
            ],
            true /**MOUSE HOVER */
        );

        /**CLOUDS */
        this.cloud1 = new Image(
            this.game, /**GAME */
            (this.width * 0.1), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.15), /**WIDTH */
            (this.game.height * 0.15), /**HEIGHT */
            0, /**ROTATION */ 
            this.cloudImage, /**IMAGE */
            0.9, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud2 = new Image(
            this.game,  /**GAME */
            (this.width * 0.7), /**X */
            (this.height * 0.05), /**Y */    
            (this.width * 0.12), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.cloudImage, /**IMAGE */
            0.7, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
        this.cloud3 = new Image(
            this.game,  /**GAME */
            (this.width * 0.6), /**X */
            (this.height * 0.05), /**Y */  
            (this.width * 0.1), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */ 
            this.cloudImage, /**IMAGE */
            0.5, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud4 = new Image(
            this.game, /**GAME */
            (this.width * 0.9), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.08), /**WIDTH */
            (this.game.height * 0.08), /**HEIGHT */
            0, /**ROTATION */
            this.cloudImage, /**IMAGE */
            0.3, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */

        );
        this.cloud5 = new Image(
            this.game, /**GAME */
            (this.width * 0.5), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.06), /**WIDTH */
            (this.game.height * 0.06), /**HEIGHT */
            0, /**ROTATION */
            this.cloudImage, /**IMAGE */
            0.4, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        /**CHARACTERS -> BUTTERFLY */
        this.butterfly = new Sprite(
            this.butterflySprite,
            this.game,
            256, /**SPRITE WIDTH*/
            160, /**SPRITE HEIGHT*/
            this.game.height >= 700 ? 0.6 : 0.3, /**SIZE X*/
            this.game.height >= 700 ? 0.6 : 0.3, /**SIZE Y*/
            (this.game.canvas.width * 1.42), /**DESTINY X */
            (this.game.canvas.height * -0.62), /**DESTINY Y */
            3, /**MAX FRAME X */
            1, /**MAX FRAME Y */
            150, /**FRAME SPEED */
            -200 /**ROTATION */
        );
    

        /**HUD*/
        this.hud = new thisGameHUD(this.game, 0, 0, this.width, this.height, [ 
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
        this.hud.buttonStartGame.moveTo(this.game.width * 0.5, this.game.height * 0.8);

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

        /**BUTTERFLY DRAW */
        this.butterfly.draw(ctx);

    }

    playSound(){
        this.musicMenu.play();
    }
}