export class ClickDebug {
    constructor(inputHandler, ctx) {
        this.inputHandler = inputHandler;
        this.ctx = ctx;
        this.clicks = [];
        window.addEventListener('click', (event) => {
            this.recordClick(this.inputHandler.mouse.x, this.inputHandler.mouse.y, window.innerWidth, window.innerHeight);
        });
    }

    recordClick(x, y, windowWidth, windowHeight) {
        this.clicks.push({x, y, windowWidth, windowHeight});
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.font = '16px Arial';
        this.clicks.forEach(click => {
            const adjustedX = click.x * (window.innerWidth / click.windowWidth);
            const adjustedY = click.y * (window.innerHeight / click.windowHeight);
            this.ctx.beginPath();
            this.ctx.arc(adjustedX, adjustedY, 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.fillText(`(${adjustedX}, ${adjustedY})`, adjustedX + 15, adjustedY + 5);
        });
    }
}