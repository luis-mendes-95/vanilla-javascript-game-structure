import { DialogueBox } from "../engine/hud/dialogueBox/dialogueBox.js";

export class GardenSign extends DialogueBox {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover, title) {
        super(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover);
        
        this.title = title; // Title of the dialogue box
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

    moveTo(x, y, speed){
        if(this.x < x){
            this.x += speed;
            this.textX += speed;
        }
        if(this.x > x){
            this.x -= speed;
            this.textX -= speed;
        }
        if(this.y < y){
            this.y += speed;
            this.textY += speed;

        }
        if(this.y > y){
            this.y -= speed;
            this.textY -= speed;
        }
    }
}