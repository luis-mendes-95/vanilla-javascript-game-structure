import { Hud } from "../../../engine/hud/hud.js";
import { Image } from "../../../engine/hud/image/image.js";
import { Sprite } from "../../../engine/sprite/sprite.js"

export class AkemiHUD extends Hud {
    constructor(game, x, y, width, height, images) {
        super(game, x, y, width, height, images);

        this.imageLogo = new Image(
            this.game, /**GAME */
            (0), /**X */
            (-this.game.height * 0.2), /**Y */
            (this.game.width * 0.3), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */
            this.images[0], /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false, /**MOUSE HOVER */
        );

        this.imageAkemi = new Image(
            this.game,  /**GAME */
            (this.width * 0.08), /**X */
            (this.height * 0.25), /**Y */
            (this.game.width * 0.34), /**WIDTH */
            (this.game.height * 0.8), /**HEIGHT */
            0, /**ROTATION */
            this.images[1], /**IMAGE */
            0, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.imageTitle = new Image(
            this.game, /**GAME */
            (this.width * 0.5), /**X */
            (this.height * -0.5), /**Y */
            (this.width * 0.35), /**WIDTH */
            (this.game.height * 0.20), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[2], /**IMAGE */
            1, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
        
        this.buttonStart = new Image(
             this.game, /**GAME */
             (this.width * 0.6), /**X */
             (this.height * 1.5), /**Y */
             (this.width * 0.2), /**WIDTH */
             (this.game.height * 0.30), /**HEIGHT */
             0, /**ROTATION */
             this.images[3],  /**IMAGE */
             1, /**OPACITY */
             "INICIAR", /**TEXT */
             50, /**TEXT SPACING */
             "PatrickHand", /**TEXT FONT */
             "bold", /**FONT WEIGHT */
             7, /**FONT SIZE */
             (this.width * 0.65), /**TEXT X */
             (this.height * 1.62), /**TEXT Y */
             "black", /**TEXT COLOR */
             true, /**MOUSE HOVER */
             0
        );

        this.cloud1 = new Image(
            this.game, /**GAME */
            (this.width * 0.1), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.15), /**WIDTH */
            (this.game.height * 0.15), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[5], /**IMAGE */
            0.9, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud2 = new Image(
            this.game,  /**GAME */
            (this.width * 0.7), /**X */
            (this.height * 0.05), /**Y */    
            (this.width * 0.12), /**WIDTH */
            (this.game.height * 0.12), /**HEIGHT */
            0, /**ROTATION */
            this.images[5], /**IMAGE */
            0.7, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
        this.cloud3 = new Image(
            this.game,  /**GAME */
            (this.width * 0.6), /**X */
            (this.height * 0.05), /**Y */  
            (this.width * 0.1), /**WIDTH */
            (this.game.height * 0.1), /**HEIGHT */
            0, /**ROTATION */ 
            this.images[5], /**IMAGE */
            0.5, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );

        this.cloud4 = new Image(
            this.game, /**GAME */
            (this.width * 0.9), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.08), /**WIDTH */
            (this.game.height * 0.08), /**HEIGHT */
            0, /**ROTATION */
            this.images[5], /**IMAGE */
            0.3, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */

        );
        this.cloud5 = new Image(
            this.game, /**GAME */
            (this.width * 0.5), /**X */
            (this.height * 0.05), /**Y */
            (this.width * 0.06), /**WIDTH */
            (this.game.height * 0.06), /**HEIGHT */
            0, /**ROTATION */
            this.images[5], /**IMAGE */
            0.4, /**OPACITY */
            null, /**TEXT */
            null, /**TEXT SPACING */
            null, /**TEXT FONT */
            null, /**FONT WEIGHT */
            null, /**FONT SIZE */
            null, /**TEXT X */
            null, /**TEXT Y */
            null, /**TEXT COLOR */
            false /**MOUSE HOVER */
        );
   
       
   
   
    }

    update(deltaTime) {


    }

    draw(ctx) {


    }
}