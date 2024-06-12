/**
 * IT IS USED TO CREATE A SPRITE ELEMENT
 * -> IT CAN BE USED TO CREATE A CHARACTER, A PLATFORM, ETC
 * -> IT HAS BEHAVIORS TO MOVE, ROTATE, SCALE, ETC
 */

export class Sprite {
  constructor(images, game, spriteWidth, SpriteHeight, sizeX, sizeY, dx, dy, maxFrameX, maxFrameY, frameSpeed, rotation, playerControl) {

    this.game = game;
    this.images = images;
    this.currentState = 0;
    this.lastMove = "";

    this.dw = dx;
    this.dh = dy;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = SpriteHeight;

    this.x = this.dw;
    this.y = this.dh;
    
    this.width =  this.spriteWidth * this.sizeX;
    this.height = this.spriteHeight * this.sizeY;

    this.frameX = 0;
    this.frameY = 0;

    this.maxFrameX = maxFrameX;
    this.maxFrameY = maxFrameY;



    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.rotation = rotation;

    this.counter = 0;
    this.frameSpeed = frameSpeed;

    this.velocityY = 0;
    this.weigth = this.game.height * 0.001;

    this.speed = this.game.width * 0.01; // Add speed attribute

    this.playerControl = playerControl || false;
  }

  update(deltaTime){

    this.x = this.dw;
    this.y = this.dh;
    
    this.width =  this.spriteWidth * this.sizeX;
    this.height = this.spriteHeight * this.sizeY;

    this.counter += deltaTime;

    if (this.counter >= this.frameSpeed) {
        this.frameX += 1;

        if (this.frameX >= this.maxFrameX) {
            this.frameX = 0;
            this.frameY += 1;

            if (this.frameY >= this.maxFrameY) {
                this.frameY = 0;
            }
        }

        this.counter = 0;
    }

    if(this.playerControl) this.move();
    
  }

  draw(context) {
    // Save the current context state
    context.save();

    // Translate to the center of the image
    context.translate(this.dw + this.spriteWidth * this.sizeX / 2, this.dh + this.spriteHeight * this.sizeY / 2);

    // Rotate the context
    context.rotate(this.rotation * Math.PI / 180); // Convert degrees to radians

    // Draw the image
    context.drawImage(
        this.images[this.currentState],
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        -this.spriteWidth * this.sizeX / 2,
        -this.spriteHeight * this.sizeY / 2,
        this.spriteWidth * this.sizeX,
        this.spriteHeight * this.sizeY
    );

    context.restore();
}

  moveTo(x, y, speed){
    if(this.dw < x){
        this.dw += speed;
    }
    if(this.dw > x){
        this.dw -= speed;
    }
    if(this.dh < y){
        this.dh += speed;
    }
    if(this.dh > y){
        this.dh -= speed;
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

  move() {

    const jumpFactor = 1.2;

    /**MOVE RIGHT*/
    if(this.game.input.keys.includes('ArrowRight') ||
       this.game.input.keys.includes('d') ||
       this.game.input.keys.includes('D') ||
       this.game.input.keys.includes('moveRight')){
        this.currentState = 2;
        this.dw += this.speed;
        this.maxFrameX = 8;
        this.lastMove = "right";
       } else {
        if(this.lastMove === "right") {
          this.currentState = 0;
          this.maxFrameX = 9;
        }
       }
    
    if(this.game.input.keys.includes('ArrowLeft') ||
       this.game.input.keys.includes('a') ||
       this.game.input.keys.includes('A') ||
       this.game.input.keys.includes('moveLeft')) {
        this.dw -= this.speed;
        this.currentState = 3;
        this.maxFrameX = 8;
        this.lastMove = "left";
       } else {
        if(this.lastMove === "left") {
          this.currentState = 1;
          this.maxFrameX = 9;
        }
       }
  
    /**VERTICAL MOVEMENT (JUMP) */
    if((this.game.input.keys.includes(' ') || this.game.input.keys.includes('jump')) && this.isOnGround()) {
      this.velocityY -= (this.game.height * 0.015) * jumpFactor; // Aplica o novo fator de salto
    };
  

    this.dh += this.velocityY;
    if(this.dh >= this.game.height * 0.84 - this.spriteHeight * this.sizeY) {
      this.dh = this.game.height * 0.84 - this.spriteHeight * this.sizeY;
    }
    if(!this.isOnGround()) this.velocityY += this.weigth;
    else this.velocityY = 0;
  }
  
  isOnGround() {
    // Ajuste proporcional para a verificação de estar no chão
    return this.dh >= this.game.height * 0.84 - this.spriteHeight * this.sizeY;
  }

}