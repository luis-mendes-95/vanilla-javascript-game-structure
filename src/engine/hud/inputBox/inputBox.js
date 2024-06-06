import { Image } from "../image/image.js";

export class InputBox extends Image {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover) {
        super(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover);
        
        this.dialogueText = text; /**ARRAY OF TEXTS */
        this.currentInputText = ""; /**CURRENT TEXT BEING TYPED */
        this.cursorVisible = true;
        this.lastCursorChange = Date.now();
        this.textSpacing = textSpacing;

        /**MOUSE CONTROL*/
        this.mouseOver = false;

        // Add event listener for keyboard input
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                this.currentInputText = this.currentInputText.slice(0, -1);
            } else if (e.key.length === 1 && this.currentInputText.length < 12) {
                this.currentInputText += e.key.toUpperCase();
            }
        });
    }

    update(){
        super.update();
    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.save(); // Save the current state of the context
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2); // Move the context to the center of the image
        ctx.rotate(this.rotation * Math.PI / 180); // Add rotation
        ctx.scale(this.scale, this.scale); // Scale the context
        ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2)); // Move the context back
        if (this.image) { // Check if image is not null
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    
        // Draw the current input text
        ctx.fillStyle = this.textColor;
        ctx.font = `${this.fontSize * this.scale}vh ${this.font}`;
        ctx.fillText(this.currentInputText, this.textX , this.textY);
    
        // Draw the cursor
        if (this.cursorVisible) {
            ctx.fillRect((this.textX) + (ctx.measureText(this.currentInputText).width), this.textY, 10, this.fontSize * this.scale);
        }
    
        ctx.restore(); // Restore the context to its previous state
        ctx.globalAlpha = 1.0; // Reset to default
    
        // Toggle cursor visibility every 500ms
        if (Date.now() - this.lastCursorChange > 500) {
            this.cursorVisible = !this.cursorVisible;
            this.lastCursorChange = Date.now();
        }
    }

    mouseHovering() {
        if(this.mouseHover) {
            if(this.isMouseOver(this.game.input.mouse)) {
                if(!this.mouseOver) {
                    this.mouseOver = true;
                    this.game.mouseOverCount = (this.game.mouseOverCount || 0) + 1;
                }
    
                if(this.scale < 1.02){
                    this.scale += 0.01;
                }
            } else {
                if(this.mouseOver) {
                    this.mouseOver = false;
                    this.game.mouseOverCount--;
                }
    
                if(this.scale > 1){
                    this.scale -= 0.01;
                }
            }
    
            this.game.canvas.style.cursor = this.game.mouseOverCount > 0 ? 'pointer' : 'default';
        }
    }
}