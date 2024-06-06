/**
 * USED TO CREATE IMAGES INSIDE HUD CLASS
 * -> IT CAN BE USED TO CREATE BUTTONS, TEXTS, IMAGES, ETC
 * -> IT HAS A MOUSE HOVER EFFECT, TEXT AND IMAGE BEHAVIORS
 */

export class Image {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover) {

        /**GAME*/
        this.game = game;

        /**POSITION*/
        this.x = x;
        this.y = y;
        this.scale = 1;
        this.rotation = rotation;

        /**MOUSE HOVER*/
        this.mouseHover = mouseHover;
        this.mouseOver = false;

        /**DIMENSIONS*/
        this.width = width;
        this.height = height;

        /**IMAGE*/
        this.image = image;
        this.opacity = opacity;

        /**TEXT*/
        this.text = text;
        this.font = font;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.textX = textX;
        this.textY = textY;
        this.textColor = textColor;
        this.textSpacing = textSpacing;
        
    }

    update() {

        this.mouseHovering();   
        this.isMouseClicking();

    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.save(); // Save the current state of the context
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2); // Move the context to the center of the image
        ctx.rotate(this.rotation * Math.PI / 180); // Add rotation
        ctx.scale(this.scale, this.scale); // Scale the context
        ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2)); // Move the context back
    
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
        if(this.text){
            ctx.fillStyle = this.textColor;
            if(this.fontWeight){
                ctx.font = `${this.fontWeight} ${this.fontSize * this.scale}vh ${this.font}`;
            } else {
                ctx.font = `${this.fontSize * this.scale}vh ${this.font}`;
            }
            ctx.fillText(this.text, (this.textX), (this.textY));
        }
        ctx.restore(); // Restore the context to its previous state
        ctx.globalAlpha = 1.0; // Reset to default
    }

    /**MOVE X AND Y DETERMINED BY A SPEED*/
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
    
    /**FADE FROM OPACITY 0 TO OPACITY 1 */
    fadeIn(speed){
        if(this.opacity < 1){
            this.opacity += speed;
            if(this.opacity > 1) {
                this.opacity = 1;
            }
        }
    }

    /**FADE FROM OPACITY 1 TO OPACITY 0 */
    fadeOut(speed){
        if(this.opacity > 0){
            this.opacity -= speed;
            if(this.opacity < 0) {
                this.opacity = 0;
            }
        }
    }

    /**RETURNS IF MOUSE IS OVER THIS ELEMENT */
    isMouseOver(mouse){
        return mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height;
    } 
    
    /**MOUSE HOVER IS DEFINED WHEN THIS CLASS IS INSTANCIATED */
    mouseHovering() {
        if(this.mouseHover) {
            if(this.isMouseOver(this.game.input.mouse)) {
                if(!this.mouseOver) {
                    this.mouseOver = true;
                    this.game.mouseOverCount = (this.game.mouseOverCount || 0) + 1;
                }
    
                if(this.scale < 1.02){
                    this.scale += 0.005;
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

    isMouseClicking(){
        if(this.isMouseOver(this.game.input.mouse)){
            return this.game.input.mouse.clicked;
        }
    }

    rotate(degrees, speed){
        if(this.rotation < degrees){
            this.rotation += speed;
        }
        if(this.rotation > degrees){
            this.rotation -= speed;
        }
      }



}