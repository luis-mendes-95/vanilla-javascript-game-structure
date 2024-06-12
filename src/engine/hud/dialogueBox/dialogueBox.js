import { Image } from "../image/image.js";

export class DialogueBox extends Image {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover) {
        super(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover);
        
        this.dialogueText = text; /**ARRAY OF TEXTS */
        this.textSpacing = textSpacing;
        
    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.save(); // Save the current state of the context
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2); // Move the context to the center of the image
        ctx.rotate(this.rotation * Math.PI / 180); // Add rotation
        ctx.scale(this.scale, this.scale); // Scale the context
        ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2)); // Move the context back
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
        this.dialogueText.forEach((text, index) => {
            ctx.fillStyle = this.textColor;
            ctx.font = `${this.fontSize * this.scale}vh ${this.font}`;
            ctx.fillText(text, (this.textX), (this.textY) + (index * this.textSpacing));
        });
    
        ctx.restore(); // Restore the context to its previous state
        ctx.globalAlpha = 1.0; // Reset to default
    }


}