import { ImageHover } from "../engine/hud/imageHover/imageHover.js";

export class ButtonTree extends ImageHover {
    constructor(game, x, y, width, height, rotation, image, hoverImage, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover) {
        super(game, x, y, width, height, rotation, image, hoverImage, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover);
        
    }

    update(){

    }

    mouseHovering() {
        if(this.mouseHover) {
            if(this.isMouseOver(this.game.input.mouse)) {
                if(!this.mouseOver) {
                    this.mouseOver = true;
                    this.game.mouseOverCount = (this.game.mouseOverCount || 0) + 1;
                }
    
                this.scale = 1;

            } else {
                
                if(this.mouseOver) {
                    this.mouseOver = false;
                    this.game.mouseOverCount--;
                }
    
                this.scale = 1;
            }
    
            this.game.canvas.style.cursor = this.game.mouseOverCount > 0 ? 'pointer' : 'default';
        }
    }

}