/**ALL ELEMENTS WILL LOAD FIRST, AND THEN THIS FUNCTION WILL BE CALLED */
window.addEventListener('load', function() {


    /**GETTIN CANVAS FROM HTML AND SETTING WIDTH AND HEIGHT PROPORTIONAL 16:9 */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewportWidth = viewportHeight * (16 / 9);
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;


    /**CLASS GAME WILL CENTRALIZE EVERY GAME ELEMENTS INSIDE OF IT */
    class Game {
        constructor(width, height) {
            this.width = window.innerWidth;
            this.height = height;
        }

        update() {
            console.log('update');
        }

        draw() {
            console.log('draw');
        }
    }


    /**INSTANTIATING THE GAME CLASS */
    const game = new Game(canvas.width, canvas.height);


    /**GAME LOOP */
    const animate = () => {
        game.update(ctx);
        game.draw(ctx);
        requestAnimationFrame(animate);
    };
    animate();


});