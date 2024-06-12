export class DebugMovement {
    constructor(game, ctx, x, y, speed, size) {
        this.game = game;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.directionX = 10;
        this.directionY = 10;
        this.rotation = 0;
    }

    update() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;

        if (this.x + this.size > this.game.width || this.x < 0) {
            this.directionX *= -1;
        }

        if (this.y + this.size > this.game.height || this.y < 0) {
            this.directionY *= -1;
        }
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        this.ctx.rotate(this.rotation * Math.PI / 180);
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        this.ctx.restore();
    }
}