export class InputHandler{
    constructor(game){

        this.game = game;
        
        this.keys = [];
        this.mouse = {
            x: 0,
            y: 0,
            clicked: false
        };

        window.addEventListener('keydown', (e) => {
            if(!this.keys.includes(e.key)) this.keys.push(e.key);
        });
        window.addEventListener('keyup', (e) => {
            this.keys = this.keys.filter(key => key !== e.key);
        });
        game.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
        });
        game.canvas.addEventListener('mousedown', (e) => {
            this.mouse.clicked = true;
        });
        game.canvas.addEventListener('mouseup', (e) => {
            this.mouse.clicked = false;
        });

        // Adiciona suporte a eventos de toque
        game.canvas.addEventListener('touchstart', (e) => {
            this.mouse.x = e.touches[0].clientX - game.canvas.getBoundingClientRect().left;
            this.mouse.y = e.touches[0].clientY - game.canvas.getBoundingClientRect().top;
            this.mouse.clicked = true;
        });
        game.canvas.addEventListener('touchmove', (e) => {
            this.mouse.x = e.touches[0].clientX - game.canvas.getBoundingClientRect().left;
            this.mouse.y = e.touches[0].clientY - game.canvas.getBoundingClientRect().top;
        });
        game.canvas.addEventListener('touchend', (e) => {
            this.mouse.clicked = false;
        });
    }
}