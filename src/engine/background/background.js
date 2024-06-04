export class Background {
    constructor(game, x, y, width, height, color, speed, velocityY, velocityX, images) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.scenes = images;

        this.speed = speed;
        this.velocityY = 0;
        this.velocityX = 0;
        this.weigth = 1;

        this.originalImageWidth = images[0].naturalWidth;
        this.originalImageHeight = images[0].naturalHeight;

    }

    update() {

    }

    draw(ctx, scene) {
        if(typeof this.scenes[scene] !== 'undefined'){
            const aspectRatio = this.originalImageWidth / this.originalImageHeight;
            const newHeight = this.width / aspectRatio;
            const newY = this.height - newHeight; 
    
            ctx.imageSmoothingEnabled = true 
    
            ctx.drawImage(this.scenes[scene], this.x, newY, this.width, newHeight);
        } else {
            ctx.fillStyle = "orange";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }


}