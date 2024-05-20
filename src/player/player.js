export class Player {
    constructor(game, x, y, width, height, color, speed, velocityY, image) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = image;

        this.speed = speed;
        this.velocityY = 0;
        this.weigth = 1;

    }

    update() {
        this.move();
        console.log(this.isOnGround());

    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    bouncingTest(){
        this.x += this.speed;
        this.y += this.velocityY;

        if(this.x > (this.game.width - this.width)) this.speed = -this.speed;
        if(this.x < 0) this.speed = -this.speed;

        if(this.y > (this.game.height - this.height)) this.velocityY = -this.velocityY;
        if(this.y < 0) this.velocityY = -this.velocityY;
    }

    move(){

        /**HORIZONTAL MOVEMENT (WALK) */
        if(this.game.input.keys.includes('ArrowRight') || this.game.input.keys.includes('d') || this.game.input.keys.includes('D')) this.x += this.speed;
        if(this.game.input.keys.includes('ArrowLeft') || this.game.input.keys.includes('a') || this.game.input.keys.includes('A')) this.x -= this.speed;

        /**VERTICAL MOVEMENT (JUMP) */
        if(this.game.input.keys.includes(' ') && this.isOnGround()) this.velocityY -= 20;
        this.y += this.velocityY;
        if(!this.isOnGround()) this.velocityY += this.weigth;
        else this.velocityY = 0;
        

    }

    isOnGround(){
        return this.y >= this.game.height - this.height;
    }


}