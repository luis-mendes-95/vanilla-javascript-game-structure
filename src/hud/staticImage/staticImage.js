export class StaticImage {
    constructor(game, x, y, width, height, image, opacity, text, fontWeight, fontSize, textX, textY, textColor) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.opacity = opacity;
        this.text = text;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.textX = textX;
        this.textY = textY;
        this.textColor = textColor;
        

    }

    update() {
        
    }

    draw(ctx, scene) {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.globalAlpha = 1.0; // Reset to default
        if(this.text){
            ctx.fillStyle = this.textColor;
            if(this.fontWeight){
                ctx.font = `${this.fontWeight} ${this.fontSize}vh PatrickHand`;
            } else {
                ctx.font = `${this.fontSize}vh PatrickHand`;
            }
            ctx.fillText(this.text, (this.x * this.textX), (this.y * this.textY));
        }

    }

    moveTo(x, y, speed){
        if(this.x < x){
            this.x += speed;
        }
        if(this.x > x){
            this.x -= speed;
        }
        if(this.y < y){
            this.y += speed;
        }
        if(this.y > y){
            this.y -= speed;
        }
    }
    
    fadeIn(speed){
        if(this.opacity < 1){
            this.opacity += speed;
            if(this.opacity > 1) {
                this.opacity = 1;
            }
        }
    }



}