import { StaticImage } from "./staticImage/staticImage.js";

export class Hud {
    constructor(game, x, y, width, height, images) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.images = images;

        this.imageLogo = new StaticImage(this.game, 0, 0, 300, 60, this.images[0]);

    }

    update() {

    }

    draw(ctx) {
        this.imageLogo.draw(ctx, 0);
    }


}