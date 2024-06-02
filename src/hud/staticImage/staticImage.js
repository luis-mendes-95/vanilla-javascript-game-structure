export class StaticImage {
    constructor(game, x, y, width, height, image, opacity) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.opacity = opacity;

    }

    update() {
        
    }

    draw(ctx, scene) {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.globalAlpha = 1.0; // Reset to default
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