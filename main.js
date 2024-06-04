/**ALL ELEMENTS WILL LOAD FIRST, AND THEN THIS FUNCTION WILL BE CALLED */
import { Player } from './src/engine/player/player.js';
import { InputHandler } from './src/engine/input/input.js';
import { Background } from './src/engine/background/background.js';
import { Hud } from './src/engine/hud/hud.js';

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

            this.canvas = canvas;

            this.width = width;
            this.height = height;

            /**GAME ASSETS*/
            this.backgroundScene1 = document.getElementById('backgroundScene1');
            this.backgroundScene2 = document.getElementById('backgroundScene2');
            this.backgroundScene3 = document.getElementById('backgroundScene3');
            this.logo = document.getElementById('logo');
            this.akemiImages = document.getElementsByClassName('akemi');
            this.gameTitleImage = document.getElementById('gameTitle');
            this.buttonStart = document.getElementById('buttonStart');
            this.butterfly = document.getElementById('butterflies');

            /**LOADING FONTS*/
            let font = new FontFace('PatrickHand', 'url(./src/assets/fonts/PatrickHand-Regular.ttf)');
            font.load().then((loadedFont)=>{
                document.fonts.add(loadedFont);
            }).catch((error)=>{
                console.log(error);
            });

            /**HUD*/
            this.hud = new Hud(this, 0, 0, this.width, this.height, [ this.logo, this.akemiImages[3], this.gameTitleImage, this.buttonStart, this.butterfly ]);

            /**INPUT*/
            this.input = new InputHandler(this);

            /**BACKGROUND*/
            this.background = new Background(this, 0, 0, this.width, this.height, 'blue', 10, 0, 0, [this.backgroundScene1]);

        }

        update(deltaTime) {

            /**UPDATING COMPONENTS */
            //this.player.update(this.input);
            this.hud.update(deltaTime);
            
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