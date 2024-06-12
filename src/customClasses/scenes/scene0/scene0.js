import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { thisGameHUD } from "./thisGameHUD.js";

export class Scene0 {
    constructor(game) {

        this.started = false;

        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.musicPlaying = false;
        this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
        this.buttonStart = document.getElementById('buttonStart');

        /**GAME ASSETS*/
        this.backgroundScene1 = document.getElementById('backgroundScene1');


        /**BACKGROUND*/
        this.background = new Background(
            this, /**GAME */
            0,  /**X */
            0, /**Y */
            this.game.width * 1, /**WIDTH */
            this.game.height * 1, /**HEIGHT */
            'blue', /**COLOR */
            10, /**SPEED */
            0, /**VELOCITY Y */
            0, /**VELOCITY X */
            [
                this.backgroundScene1 /**IMAGES[0] */
            ],
            true /**MOUSE HOVER */
        );
    

        /**HUD*/
        this.hud = new thisGameHUD(this.game, 0, 0, this.width, this.height, [ 
            this.buttonStart, /**IMAGES[0] */
        ]);

        this.calledNextScene = false;
        this.enterNextScene = false;
    }

    update(deltaTime) {

        /**UPDATING ELEMENTS*/
        this.hud.buttonStartGame.update(deltaTime);
        this.hud.buttonOptions.update(deltaTime);
        this.background.update(deltaTime);
        if (this.savedGame) {
            this.hud.buttonLoadGame.update(deltaTime);
        }
    
        /**CHANGE GAME STATE TO STARTED */
        if (!this.started && (this.game.input.mouse.clicked || this.game.input.touches.length > 0)) {
            this.started = true;
        }
    
        /**WHEN GAME STARTS, BUTTONS APPEARS*/
        if (this.started && !this.calledNextScene) {
            this.hud.buttonStartGame.moveTo(this.width * 0.30, this.height * 0.35, this.height * 0.01);
            this.hud.buttonOptions.moveTo(this.width * 0.30, this.height * 0.65, this.height * 0.01);
        }
    
        // Verificar toque ou clique no botão de iniciar jogo
        if (!this.calledNextScene && (this.hud.buttonStartGame.isTouchOver(this.game.input.touches) || this.hud.buttonStartGame.isMouseClicking(this.game.input.mouse))) {
            this.calledNextScene = true;
            this.game.toggleFullScreen();
            let currentState = this.game.isFullScreen;
            if (this.game.isFullScreen !== currentState) {
                this.game.input.mouse.clicked = false;
            }
        }
    
        // Mover botões para fora da tela e verificar transição de cena
        if (this.calledNextScene) {
            this.hud.buttonStartGame.moveTo(this.width * 0.30, this.height * 2.35, this.height * 0.03);
            this.hud.buttonOptions.moveTo(this.width * 0.30, this.height * 2.65, this.height * 0.03);
            if (this.hud.buttonStartGame.y > this.height * 1.34) {
                this.game.currentScene = 1;
            }
        }
    
        // Atualizações adicionais
        this.hud.gameTitle.moveTo(this.width * 0.01, this.height * 0.20, 1);
    }

    draw(ctx, scene) {

        this.background.draw(ctx, scene);

        this.hud.buttonStartGame.draw(ctx);
        this.hud.buttonOptions.draw(ctx);
        
        if(this.savedGame){
            this.hud.buttonLoadGame.draw(ctx);
        }
        
        this.hud.gameTitle.draw(ctx);

    }

    playSound(){
        this.musicMenu.play();
    }
}