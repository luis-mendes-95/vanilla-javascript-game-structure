/** INPUT HANDLER */
import { InputHandler } from './src/engine/input/input.js';

/** INDIVIDUAL SCENES */
import { Scene1 } from './src/customClasses/scenes/scene1/scene1.js';
import { Scene2 } from './src/customClasses/scenes/scene2/scene2.js';
import { Scene3 } from './src/customClasses/scenes/scene3/scene3.js';
import { Scene4 } from './src/customClasses/scenes/scene4/scene4.js';
import { Scene0 } from './src/customClasses/scenes/scene0/scene0.js';

/** AFTER EVERYTHING LOADS, IT WILL RUN */
window.addEventListener('load', function() {
    /** GETTING CANVAS FROM HTML AND SETTING FIXED WIDTH AND HEIGHT */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    /** CANVAS IMAGE SMOOTHING */
    ctx.imageSmoothingEnabled = true;

    /** CLASS GAME WILL CENTRALIZE EVERY GAME ELEMENTS INSIDE OF IT */
    class Game {
        constructor(width, height) {
            /** CANVAS */
            this.canvas = canvas;
            this.ctx = ctx;

            /** INPUT */
            this.input = new InputHandler(this);

            /** MOUSE EFFECTS CONTROL */
            this.mouseOverCount = 0;
            this.hoveredImages = new Set();

            /** PLAYER STATS */
            this.playerName = "MADAGASCAR";
            this.currentStage = 0;
            this.stagesDone = [];
            this.playerPoints = 0;
            this.difficulty = "easy";

            /** SOUNDS */

            /** GLOBAL MEASURES -> WIDTH | HEIGHT | SPEED */
            this.width = width;
            this.height = height;
            this.speed = width / 100;
            this.isFullScreen = false;

            /** LOADING FONTS */
            let font = new FontFace('PatrickHand', 'url(./src/assets/fonts/PatrickHand-Regular.ttf)');
            let font1942 = new FontFace('font1942', 'url(./src/assets/fonts/1942.ttf)');
            Promise.all([font.load(), font1942.load()])
            .then(loadedFonts => {
                loadedFonts.forEach(font => document.fonts.add(font));
            })
            .catch(error => console.log(error));

            /** SCENES MANAGEMENT */
            this.currentScene = new Scene3(this);
        }

        changeScene(newScene) {
            this.currentScene = new newScene(this);
        }

        update(deltaTime) {
            /** UPDATING SCENE */
            this.currentScene.update(deltaTime);

            /** CONSTANTLY LOOK FOR ELEMENTS HOVERING AND THEN CHANGE MOUSE CURSOR */
            this.updateCursorStyle();

        }

        draw() {
            /** DRAWING SCENE */
            this.currentScene.draw(ctx, 0);
        }

        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen(); 
                }
            }
            this.isFullScreen = !this.isFullScreen;
        }

        updateCursorStyle() {
            this.canvas.style.cursor = this.hoveredImages.size > 0 ? 'pointer' : 'default';
        }
        
    }

    /** INSTANTIATING THE GAME CLASS */
    const game = new Game(canvas.width, canvas.height);

    /** GAME LOOP */
    let lastTime = 0;
    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);

    /** HANDLE CANVAS SCALING */
    const resizeCanvas = () => {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const scale = Math.min(viewportWidth / 1920, viewportHeight / 1080);

        canvas.style.width = `${1920 * scale}px`;
        canvas.style.height = `${1080 * scale}px`;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
});