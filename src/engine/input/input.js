export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];
        this.mouse = {
            x: 0,
            y: 0,
            clicked: false
        };
        this.touches = [];

        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (!this.keys.includes(e.key)) this.keys.push(e.key);
        });

        window.addEventListener('keyup', (e) => {
            e.preventDefault();
            this.keys = this.keys.filter(key => key !== e.key);
        });

        game.canvas.addEventListener('mousemove', (e) => {
            e.preventDefault();
            const rect = game.canvas.getBoundingClientRect();
            this.mouse.x = (e.clientX - rect.left) * (game.canvas.width / rect.width);
            this.mouse.y = (e.clientY - rect.top) * (game.canvas.height / rect.height);
        });

        game.canvas.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.mouse.clicked = true;
        });

        game.canvas.addEventListener('mouseup', (e) => {
            e.preventDefault();
            this.mouse.clicked = false;
        });

        // Adiciona suporte a eventos de toque
        game.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const rect = game.canvas.getBoundingClientRect();
            for (let i = 0; i < e.touches.length; i++) {
                const touch = e.touches[i];
                this.touches.push({
                    id: touch.identifier,
                    x: (touch.clientX - rect.left) * (game.canvas.width / rect.width),
                    y: (touch.clientY - rect.top) * (game.canvas.height / rect.height)
                });
            }
        });

        game.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = game.canvas.getBoundingClientRect();
            for (let i = 0; i < e.touches.length; i++) {
                const touch = e.touches[i];
                const index = this.touches.findIndex(t => t.id === touch.identifier);
                if (index !== -1) {
                    this.touches[index].x = (touch.clientX - rect.left) * (game.canvas.width / rect.width);
                    this.touches[index].y = (touch.clientY - rect.top) * (game.canvas.height / rect.height);
                }
            }
        });

        game.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            for (let i = 0; i < e.changedTouches.length; i++) {
                const touch = e.changedTouches[i];
                this.touches = this.touches.filter(t => t.id !== touch.identifier);
            }
        });
    }
}