/**ALL ELEMENTS WILL LOAD FIRST, AND THEN THIS FUNCTION WILL BE CALLED */
import { Player } from './src/player/player.js';
import { InputHandler } from './src/input/input.js';
import { Background } from './src/background/background.js';
import { Hud } from './src/hud/hud.js';

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

            /**PLAYER SPRITESHEET */
            //this.dudeImage = document.getElementById('dude');

            /**GAME ASSETS*/
            this.backgroundScene1 = document.getElementById('backgroundScene1');
            this.backgroundScene2 = document.getElementById('backgroundScene2');
            this.backgroundScene3 = document.getElementById('backgroundScene3');
            this.logo = document.getElementById('logo');
            this.akemiImages = document.getElementsByClassName('akemi');
            this.gameTitleImage = document.getElementById('gameTitle');
            this.buttonStart = document.getElementById('buttonStart');

            /**HUD*/
            this.hud = new Hud(this, 0, 0, this.width, this.height, [this.logo, this.akemiImages[0], this.gameTitleImage, this.buttonStart]);



            /**SETTING INPUT AS A PROPERTY OF GAME CLASS */
            this.input = new InputHandler();

            /**SETTING PROPERTIES FOR GAME CLASS */
            //this.player = new Player(this, 10, 595 , 50, 50, 'blue', 10, 0, this.dudeImage);
            this.background = new Background(this, 0, 0, this.width, this.height, 'blue', 10, 0, 0, [this.backgroundScene1]);

        }

        update() {

            /**UPDATING COMPONENTS */
            //this.player.update(this.input);
            this.hud.update();
            
        }

        draw() {

            /**DRAWING BACKGROUND*/
            this.background.draw(ctx, 0);

            /**DRAWING HUD */
            this.hud.draw(ctx, 0);


            /**DRAWING PLAYER */
            //this.player.draw(ctx);
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