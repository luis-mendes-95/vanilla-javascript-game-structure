export class ClickDebug {
    constructor(inputHandler, ctx) {
        this.inputHandler = inputHandler;
        this.ctx = ctx;
        this.clicks = [];
        window.addEventListener('click', (event) => {
            this.recordClick(this.inputHandler.mouse.x, this.inputHandler.mouse.y, window.innerWidth, window.innerHeight);
        });
        window.addEventListener('touchstart', (event) => {
            this.inputHandler.touches.forEach(touch => {
                this.recordClick(touch.x, touch.y, window.innerWidth, window.innerHeight);
            });
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
            if(adjustedX < window.innerWidth / 2) {
                if(adjustedY < window.innerHeight / 2) {
                    this.ctx.fillText(`|${parseInt(adjustedX)} x ${parseInt(adjustedY)}|`, adjustedX + 15, adjustedY + 15);
                } else {
                    this.ctx.fillText(`|${parseInt(adjustedX)} x ${parseInt(adjustedY)}|`, adjustedX + 15, adjustedY - 20);
                }
            } else {
                if(adjustedY < window.innerHeight / 2) {
                    this.ctx.fillText(`|${parseInt(adjustedX)} x ${parseInt(adjustedY)}|`, adjustedX - 120, adjustedY + 15);
                } else {
                    this.ctx.fillText(`|${parseInt(adjustedX)} x ${parseInt(adjustedY)}|`, adjustedX -120, adjustedY - 20);
                }
            }
        });
    }
}