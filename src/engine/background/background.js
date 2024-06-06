/**
 * USE IT TO CREATE A BACKGROUND INSIDE EACH SCENE MANAGER
 * -> IT CAN BE A COLOR OR AN IMAGE
 * -> IT CAN MOVE TO A DETERMINED POSITION
 * -> IT WILL ALWAYS BE DRAWN IN THE BACK OF THE SCENE AND OCCUPY THE WHOLE CANVAS STARTING FROM THE BOTTOM OF THE IMAGE
 */


export class Background {
    constructor(game, x, y, width, height, color, speed, images) {

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.scenes = images;

        this.speed = speed;
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


}