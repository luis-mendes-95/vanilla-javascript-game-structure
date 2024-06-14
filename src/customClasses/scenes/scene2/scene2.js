import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { thisGameHUD } from "./thisGameHUD.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Scene1 } from "../scene1/scene1.js";

export class Scene2 {
    constructor(game) {

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.musicPlaying = false;
        this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;

        /** GAME ASSETS */
        this.backgroundScene1 = document.getElementById('backgroundScene3');
        this.cloudImage = document.getElementById('cloud1');
        this.farmSign = document.getElementById('farmSign');
        this.treeButton = document.getElementById('treeButton');
        this.treeButtonHover = document.getElementById('treeButtonHover');
        this.gardenButton = document.getElementById('gardenButton');
        this.gardenButtonHover = document.getElementById('gardenButtonHover');
        this.flowerButton = document.getElementById('flowersButton');
        this.flowerButtonHover = document.getElementById('flowersButtonHover');
        this.gameBackground = document.getElementById('gameBackground');

        /** DEBUGGING */
        // this.clickDebug = new ClickDebug(this.game.input, this.game.ctx);

        /** BACKGROUND */
        this.background = new Background(
            this,
            0,
            0,
            this.game.width,
            this.game.height * 1.2,
            'blue',
            10,
            0,
            0,
            [this.backgroundScene1],
            true
        );

        this.nextBackground = new Background(
            this,
            this.game.width,
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


        /** HUD */
        this.hud = new thisGameHUD(this.game, 0, 0, this.width, this.height, [
            this.cloud1, /**IMAGES[0] */
            this.farmSign, /**IMAGES[1] */
            this.treeButton, /**IMAGES[2] */
            this.treeButtonHover, /**IMAGES[3] */
            this.gardenButton, /**IMAGES[4] */
            this.gardenButtonHover, /**IMAGES[5] */
            this.flowerButton, /**IMAGES[6] */
            this.flowerButtonHover /**IMAGES[7] */
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
        /** ELEMENTS APPEARING | ELEMENTS DISAPPEARING */
        (() => {
            if (!this.calledNextScene) {

                this.hud.farmSign.moveTo(this.game.width * 0.7, this.game.height * 0.00, (this.game.speed * 0.2));


            } else {
                /**MOVE ALL BUTTONS OUT OF SCREEN */
                this.hud.buttonTree.moveTo(this.game.width * -1.4, this.game.height * -0.05, (this.game.speed * 1));
                this.hud.buttonTreeHover.moveTo(this.game.width * -1.4, this.game.height * -0.05, (this.game.speed * 1));
                this.hud.buttonGarden.moveTo(this.game.width * -1.4, this.game.height * 0.5, (this.game.speed * 1));
                this.hud.buttonGardenHover.moveTo(this.game.width * -1.4, this.game.height * 0.5, (this.game.speed * 1));
                this.hud.buttonFlowers.moveTo(this.game.width * -1.4, this.game.height * 0.2, (this.game.speed * 1));
                this.hud.buttonFlowersHover.moveTo(this.game.width * -1.4, this.game.height * 0.2, (this.game.speed * 1));
                this.hud.farmSign.moveTo(this.game.width * 0.7, this.game.height * -0.40, (this.game.speed * 0.2));
                this.background.moveTo(this.width * -1, 0, (this.game.speed * 1));
                this.nextBackground.moveTo(0, 0, (this.game.speed * 1));
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

            /**TREE BUTTON CLICK OR TOUCH */
            if (this.hud.buttonTree.isMouseClicking() || this.hud.buttonTree.isTouchOver(this.game.input.touches)) {
                this.game.currentStage = 0;
                this.game.input.mouse.clicked = false;
                this.game.input.touches = [];
                this.calledNextScene = true;
            }

            /**GARDEN BUTTON CLICK OR TOUCH */
            if (this.hud.buttonGarden.isMouseClicking() || this.hud.buttonGarden.isTouchOver(this.game.input.touches)) {
                this.game.currentStage = 1;
                this.game.input.mouse.clicked = false;
                this.game.input.touches = [];
                this.calledNextScene = true;
            }

            /**FLOWERS BUTTON CLICK OR TOUCH */
            if (this.hud.buttonFlowers.isMouseClicking() || this.hud.buttonFlowers.isTouchOver(this.game.input.touches)) {
                this.game.currentStage = 2;
                this.game.input.mouse.clicked = false;
                this.game.input.touches = [];
                this.calledNextScene = true;
            }

        })();

        /** UPDATING ELEMENTS */
        this.hud.buttonTree.update(deltaTime);
        this.hud.buttonTreeHover.update(deltaTime);
        this.hud.buttonGarden.update(deltaTime);
        this.hud.buttonGardenHover.update(deltaTime);


        /**HOVER ELEMENTS WITH CHANGING IMAGES */
        (() => {

            const treeHoveredOrTouched = this.hud.buttonTree.isMouseOver(this.game.input.mouse) || this.hud.buttonTree.isTouchOver(this.game.input.touches);
            const gardenHoveredOrTouched = this.hud.buttonGarden.isMouseOver(this.game.input.mouse) || this.hud.buttonGarden.isTouchOver(this.game.input.touches);
            const flowersHoveredOrTouched = this.hud.buttonFlowers.isMouseOver(this.game.input.mouse) || this.hud.buttonFlowers.isTouchOver(this.game.input.touches);

            const treeAndFlowersHoveredOrTouched = treeHoveredOrTouched && flowersHoveredOrTouched;
            const gardenAndFlowersHoveredOrTouched = gardenHoveredOrTouched && flowersHoveredOrTouched;

            // TREE BUTTON HOVERING LOGIC
            // Adjusted logic to not prioritize Tree when both Tree and Flowers are hovered
            if (treeHoveredOrTouched && !flowersHoveredOrTouched && !gardenHoveredOrTouched) {
                this.hud.buttonTreeHover.fadeIn(this.game.speed * 0.01);
                this.game.hoveredImages.add(1);
            } else {
                this.hud.buttonTreeHover.fadeOut(this.game.speed * 0.01);
                this.game.hoveredImages.delete(1);
            }

            // GARDEN BUTTON HOVERING LOGIC
            // Ensure Garden is not prioritized when Garden and Flowers are hovered together
            if (gardenHoveredOrTouched && !gardenAndFlowersHoveredOrTouched && !treeAndFlowersHoveredOrTouched) {
                this.hud.buttonGardenHover.fadeIn(this.game.speed * 0.01);
                this.game.hoveredImages.add(2);
            } else {
                this.hud.buttonGardenHover.fadeOut(this.game.speed * 0.01);
                this.game.hoveredImages.delete(2);
            }

            // FLOWERS BUTTON HOVERING LOGIC
            // Flowers has priority when hovered with Tree or Garden
            if (flowersHoveredOrTouched) {
                this.hud.buttonFlowersHover.fadeIn(this.game.speed * 0.01);
                this.game.hoveredImages.add(3);
            } else {
                this.hud.buttonFlowersHover.fadeOut(this.game.speed * 0.01);
                this.game.hoveredImages.delete(3);
            }
        })();
       
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

        /**NEXT BACKGROUND */
        this.nextBackground.draw(this.game.ctx, 0);

        /**FARM SIGN */
        this.hud.farmSign.draw(ctx, 0);

        /**BUTTONS */
        this.hud.buttonTree.draw(ctx, 0);
        this.hud.buttonTreeHover.draw(ctx, 0);
        this.hud.buttonFlowers.draw(ctx, 0);
        this.hud.buttonFlowersHover.draw(ctx, 0);
        this.hud.buttonGarden.draw(ctx, 0);
        this.hud.buttonGardenHover.draw(ctx, 0);





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