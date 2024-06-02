import { StaticImage } from "./staticImage/staticImage.js";

export class Hud {
    constructor(game, x, y, width, height, images) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.images = images;

        this.imageLogo = new StaticImage(this.game, 0, -this.game.height * 0.2, this.game.width * 0.3, this.game.height * 0.1, this.images[0], 1);
        this.imageAkemi = new StaticImage(this.game, this.game.width * 0.15, this.game.height * 0.32, this.game.width * 0.38, this.game.height * 0.5, this.images[1], 0);

    }

    update() {
        this.imageLogo.moveTo(10, 10, 2);
        this.imageAkemi.moveTo(150, 140, 0.5);
        this.imageAkemi.fadeIn(0.05);
    }

    draw(ctx) {
        this.imageLogo.draw(ctx, 0);
        this.imageAkemi.draw(ctx, 0);
    }


}