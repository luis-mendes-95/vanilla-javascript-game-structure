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
        this.imageAkemi = new StaticImage(this.game, 150, 180, this.game.width * 0.34, this.game.height * 0.8, this.images[1], 0);
        this.imageTitle = new StaticImage(this.game, (this.width * 0.5), (this.height * -0.5), (this.width * 0.35), this.game.height * 0.20, this.images[2], 1);
        this.buttonStart = new StaticImage(this.game, (this.width * 0.6), (this.height * 2.5), (this.width * 0.2), (this.game.height * 0.30), this.images[3], 1);

    }

    update() {
        this.imageLogo.moveTo(10, 10, 2);
        this.imageAkemi.moveTo(150, 160, 0.5);
        this.imageAkemi.fadeIn(0.05);
        this.imageTitle.moveTo((this.width * 0.5), (this.height * 0.05), 5);
        this.buttonStart.moveTo((this.width * 0.6), (this.height * 0.71), 8);
    }

    draw(ctx) {
        this.imageLogo.draw(ctx, 0);
        this.imageAkemi.draw(ctx, 0);
        this.imageTitle.draw(ctx, 0);
        this.buttonStart.draw(ctx, 0);
    }


}