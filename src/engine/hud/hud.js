/**
 * IT IS USED TO CREATE HUD ELEMENTS
 * -> CREATE BUTTONS, TEXTS, IMAGES, ETC
 * -> IT CAN BE USED TO CREATE A MENU, A PAUSE SCREEN, ETC
 * -> CALL IT INSIDE EACH SCENE MANAGER
 */

import { Image } from "./Image/Image.js";

export class Hud {
    constructor(game, x, y, width, height, images) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.images = images;

        //this.buttonStart = new Image(this.game, (this.width * 0.6), (this.height * 2.5), (this.width * 0.2), (this.game.height * 0.30), this.images[3], 1, "INICIAR", "PatrickHand", "bold", 7, 1.08, 1.16, "black", true);
    
    }

    update(deltaTime) {
        //this.buttonStart.moveTo((this.width * 0.6), (this.height * 0.71), 8);
        //this.buttonStart.update(deltaTime);
    }

    draw(ctx) {
        //this.buttonStart.draw(ctx, 0);
    }


}