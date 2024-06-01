export class StaticImage {
    constructor(game, x, y, width, height, image) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;

    }

    update() {

    }

    draw(ctx, scene) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


}