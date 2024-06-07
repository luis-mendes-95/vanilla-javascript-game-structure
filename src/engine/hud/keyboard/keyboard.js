import { Image } from "../image/image.js";

export class Keyboard {
    constructor(game, x, y, width, height, rotation, image, opacity, font, fontSize, textColor) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rotation = rotation;
        this.image = image;
        this.opacity = opacity;
        this.font = font;
        this.fontSize = fontSize;
        this.textColor = textColor;
        this.minimized = true;

        // Define the keys
        this.keys = 'QWERTYUIOPASDFGHJKLÇZXCVBNM ⌫'.split('');
        this.hoveringKey = null;

        // Calculate the size and spacing of the keys
        this.keyWidth = this.width / 10;
        this.keyHeight = this.height / 3;
        this.keySpacing = this.keyWidth / 10;

        // Initialize the selected key
        this.selectedKey = null;
    }

    checkCollision() {
        const mouseX = this.game.input.mouse.x;
        const mouseY = this.game.input.mouse.y;
        let isOverKey = false; // Adicionado para rastrear se o mouse está sobre uma tecla
    
        for (let i = 0; i < this.keys.length; i++) {
            let keyX = this.x + (i % 10) * (this.keyWidth + this.keySpacing);
            let keyY = this.y + Math.floor(i / 10) * (this.keyHeight + this.keySpacing);
    
            let currentKeyWidth = this.keyWidth;
            if (this.keys[i] === ' ') {
                currentKeyWidth *= 3;
            } else if (this.keys[i] === '⌫') {
                currentKeyWidth *= 5;
            }
    
            if (mouseX >= keyX && mouseX <= keyX + currentKeyWidth && mouseY >= keyY && mouseY <= keyY + this.keyHeight) {
                isOverKey = true; // O mouse está sobre uma tecla
                this.hoveringKey = i;
                this.game.canvas.style.cursor = 'pointer';
                if (this.game.input.mouse.clicked) {
                    this.selectedKey = i;
                    console.log(this.keys[i]);
                    break; // Sai do loop se uma tecla for clicada
                }
            }
        }
    
        // Atualiza o estilo do cursor baseado em isOverKey
        
        if(!isOverKey) this.hoveringKey = null;
    }

    update(){
        this.checkCollision();
    }

    draw(ctx) {

        ctx.globalAlpha = this.opacity;
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2));

        // Draw each key
        for (let i = 0; i < this.keys.length; i++) {

            let keyX = this.x + (i % 10) * (this.keyWidth + this.keySpacing);
            let keyY = this.y + Math.floor(i / 10) * (this.keyHeight + this.keySpacing);
        
            let currentKeyWidth = this.keyWidth;
            let currentKeyHeight = this.keyHeight;
        
            // Adjust the size and position for the space and backspace keys
            if (this.keys[i] === ' ') {
                currentKeyWidth *= 3; // Make the space key 5 times wider
                keyX = this.x + 7.7 * this.keyWidth; // Center the space key
            } else if (this.keys[i] === '⌫') {
                currentKeyWidth *= 2; // Make the backspace key 2 times wider
                keyX = this.x + 10.8* this.keyWidth; // Place the backspace key at the end
            }
        
            // Draw the key background
            if (this.image && i !== this.selectedKey) {
                ctx.drawImage(this.image, keyX, keyY, currentKeyWidth, currentKeyHeight);
            } else {
                //ctx.fillStyle = i === this.selectedKey ? 'yellow' : 'white';
                ctx.fillStyle = i === this.hoveringKey ? 'yellow' : 'white';
                ctx.fillRect(keyX, keyY, currentKeyWidth, currentKeyHeight);
            }
        
            // Draw the key text
            ctx.fillStyle = this.textColor;
            if(this.game.canvas.height < 500){
                ctx.font = `${this.fontSize * 2}vh ${this.font}`;
            } else {
                ctx.font = `${this.fontSize}vh ${this.font}`;
            }
            ctx.fillText(this.keys[i], keyX + currentKeyWidth / 2, keyY + currentKeyHeight / 2);
        }

        ctx.restore();
        ctx.globalAlpha = 1.0;
    }
}