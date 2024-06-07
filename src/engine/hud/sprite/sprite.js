/**
 * IT IS USED TO CREATE A SPRITE ELEMENT
 * -> IT CAN BE USED TO CREATE A CHARACTER, A PLATFORM, ETC
 * -> IT HAS BEHAVIORS TO MOVE, ROTATE, SCALE, ETC
 */

export class Sprite {
  constructor(image, game, spriteWidth, SpriteHeight, sizeX, sizeY, dx, dy, maxFrameX, maxFrameY, frameSpeed, rotation) {

    this.game = game;
    this.image = image;

    this.dw = dx;
    this.dh = dy;

    this.frameX = 0;
    this.frameY = 0;

    this.maxFrameX = maxFrameX;
    this.maxFrameY = maxFrameY;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = SpriteHeight;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.rotation = rotation;

    this.counter = 0;
    this.frameSpeed = frameSpeed;

  }

  update(deltaTime){

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
        this.image,
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

}