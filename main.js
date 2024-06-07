/**ALL ELEMENTS WILL LOAD FIRST, AND THEN THIS FUNCTION WILL BE CALLED */
import { Player } from './src/engine/player/player.js';
import { InputHandler } from './src/engine/input/input.js';
import { Background } from './src/engine/background/background.js';
import { Hud } from './src/engine/hud/hud.js';
import { Scene1 } from './src/customClasses/scenes/scene1/scene1.js';
import { Scene2 } from './src/customClasses/scenes/scene2/scene2.js';
import { Scene3 } from './src/customClasses/scenes/scene3/scene3.js';
import { Scene4 } from './src/customClasses/scenes/scene4/scene4.js';

window.addEventListener('load', function() {

    /**GETTING CANVAS FROM HTML AND SETTING WIDTH AND HEIGHT PROPORTIONAL 16:9 */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewportWidth = viewportHeight * (16 / 9);
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

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

            /**PLAYER STATS*/
            this.playerName = "";
            this.playerPoints = 0;
            this.difficulty = "";
            this.currentLevel = "";
            this.levelsDone = [];

            /**WIDTH AND HEIGHT*/
            this.width = width;
            this.height = height;

            /**LOADING FONTS*/
            let font = new FontFace('PatrickHand', 'url(./src/assets/fonts/PatrickHand-Regular.ttf)');
            font.load().then((loadedFont)=>{
                document.fonts.add(loadedFont);
            }).catch((error)=>{
                console.log(error);
            });

            /**SCENES MANAGEMENT*/
            this.currentScene = 1;
            this.scenes = [
                new Scene1(this),
                new Scene2(this),
                new Scene3(this),
                new Scene4(this)
            ];

        }

        update(deltaTime) {
            this.scenes[this.currentScene].update(deltaTime);
        }

        draw() {
            /**DRAWING SCENE */
            this.scenes[this.currentScene].draw(ctx, 0);
        }
        
    }

    /**INSTANTIATING THE GAME CLASS */
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    /**GAME LOOP */
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

window.addEventListener('resize', function() {
    this.location.reload();
})