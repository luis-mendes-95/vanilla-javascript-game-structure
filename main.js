/**ALL ELEMENTS WILL LOAD FIRST, AND THEN THIS FUNCTION WILL BE CALLED */
import { Player } from './src/player/player.js';
import { InputHandler } from './src/input/input.js';

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
            this.width = width;
            this.height = height;
            this.dudeImage = document.getElementById('dude');

            /**SETTING INPUT AS A PROPERTY OF GAME CLASS */
            this.input = new InputHandler();

            /**SETTING PLAYER AS A PROPERTY OF GAME CLASS */
            this.player = new Player(this, 10, 595 , 50, 50, 'blue', 10, 0, this.dudeImage);
        }

        update() {

            /**UPDATING PLAYER */
            this.player.update(this.input);
            
        }

        draw() {


            /**DRAWING PLAYER */
            this.player.draw(ctx);
        }
    }


    /**INSTANTIATING THE GAME CLASS */
    const game = new Game(canvas.width, canvas.height);


    /**GAME LOOP */
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(ctx);
        game.draw(ctx);
        requestAnimationFrame(animate);
    };
    animate();


});