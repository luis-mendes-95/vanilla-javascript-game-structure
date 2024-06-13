/**INPUT HANDLER*/
import { InputHandler } from './src/engine/input/input.js';

/*INDIVIDUAL SCENES*/
import { Scene1 } from './src/customClasses/scenes/scene1/scene1.js';
import { Scene2 } from './src/customClasses/scenes/scene2/scene2.js';
import { Scene3 } from './src/customClasses/scenes/scene3/scene3.js';
import { Scene4 } from './src/customClasses/scenes/scene4/scene4.js';
import { Scene0 } from './src/customClasses/scenes/scene0/scene0.js';


/**AFTER EVERYTHING LOADS, IT WILL RUN */
window.addEventListener('load', function() {

    /**GETTING CANVAS FROM HTML AND SETTING WIDTH AND HEIGHT PROPORTIONAL 16:9 */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewportWidth = viewportHeight * (16 / 9);
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    /**CANVAS IMAGE SMOOTHING*/
    ctx.imageSmoothingEnabled = true;

    /**CLASS GAME WILL CENTRALIZE EVERY GAME ELEMENTS INSIDE OF IT */
    class Game {
        constructor(width, height) {

            /**CANVAS*/
            this.canvas = canvas;
            this.ctx = ctx;

            /**INPUT*/
            this.input = new InputHandler(this);

            /**MOUSE EFFECTS CONTROL*/
            this.mouseOverCount = 0;
            this.hoveredImages = new Set();

            /**PLAYER STATS*/
            this.playerName = "";
            this.playerPoints = 0;
            this.difficulty = "";

            /**SOUNDS*/

            /**GLOBAL MEASURES -> WIDTH | HEIGHT | SPEED*/
            this.width = width;
            this.height = height;
            this.speed = width / 100;
            this.isFullScreen = false;

            /**LOADING FONTS*/
            let font = new FontFace('PatrickHand', 'url(./src/assets/fonts/PatrickHand-Regular.ttf)');
            let font1942 = new FontFace('font1942', 'url(./src/assets/fonts/1942.ttf)');
            Promise.all([font.load(), font1942.load()])
            .then(loadedFonts => {
                    loadedFonts.forEach(font => document.fonts.add(font));
                    // O código que usa as fontes vai aqui
            })
            .catch(error => console.log(error));

            /**SCENES MANAGEMENT*/
            this.currentScene = 0;
            this.scenes = [
                new Scene0(this)
            ];
            this.visitedScenes = 0;

        }

        update(deltaTime) {
            /**UPDATING SCENE*/
            this.scenes[this.currentScene].update(deltaTime);

            /**CONSTANTLY LOOK FOR ELEMENTS HOVERING AND THEN CHANGE MOUSE CURSOR */
            this.updateCursorStyle();
        }

        draw() {
            /**DRAWING SCENE */
            this.scenes[this.currentScene].draw(ctx, 0);
        }

        toggleFullScreen(){
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen(); 
                }
            }
            if(!game.isFullScreen){
                game.isFullScreen = true;
            } else {
                game.isFullScreen = false;
            }
        }

        updateCursorStyle() {
            this.canvas.style.cursor = this.hoveredImages.size > 0 ? 'pointer' : 'default';
        }
        
        
    }

    /**INSTANTIATING THE GAME CLASS */
    const game = new Game(canvas.width, canvas.height);
    

    /**GAME LOOP */
    let lastTime = 0;
    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);

});

