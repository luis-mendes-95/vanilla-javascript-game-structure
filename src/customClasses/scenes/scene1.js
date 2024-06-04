import { Background } from "../../engine/background/background.js";
import { Hud } from "../../engine/hud/hud.js";

export class Scene1 {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;

        /**GAME ASSETS*/
        this.backgroundScene1 = document.getElementById('backgroundScene1');
        this.logo = document.getElementById('logo');
        this.akemiImages = document.getElementsByClassName('akemi');
        this.gameTitleImage = document.getElementById('gameTitle');
        this.buttonStart = document.getElementById('buttonStart');
        this.butterfly = document.getElementById('butterflies');

        /**BACKGROUND*/
        this.background = new Background(this, 0, 0, this.game.width, this.game.height, 'blue', 10, 0, 0, [this.backgroundScene1]);
           
        /**HUD*/
        this.hud = new Hud(this.game, 0, 0, this.width, this.height, [ this.logo, this.akemiImages[3], this.gameTitleImage, this.buttonStart, this.butterfly ]);
    }

    update(deltaTime) {
        this.background.update(deltaTime);
        this.hud.update(deltaTime);
    }

    draw(ctx, scene) {
        this.background.draw(this.game.ctx, 0);
        this.hud.draw(ctx, 0);
    }
}