/**
 * IT IS USED TO CREATE A SPRITE ELEMENT
 * -> IT CAN BE USED TO CREATE A CHARACTER, A PLATFORM, ETC
 * -> IT HAS BEHAVIORS TO MOVE, ROTATE, SCALE, ETC
 */

export class Sprite {
  constructor(images, game, spriteWidth, SpriteHeight, sizeX, sizeY, dx, dy, maxFrameX, maxFrameY, frameSpeed, rotation, playerControl, mouseHover, hoverScale, scaleToHover, scaleSpeed) {

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

    this.x = this.dw;
    this.y = this.dh;

    this.mouseHover = mouseHover;
    this.hoverScale = hoverScale || false;
    this.scaleToHover = scaleToHover || 1.1;
    this.scaleSpeed = scaleSpeed || 0.01;



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

    this.mouseHovering();
    this.isMouseClicking();

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

  collidesWith(element){
    return this.x < element.x + element.width &&
    this.x + this.width > element.x &&
    this.y < element.y + element.height &&
    this.y + this.height > element.y;
  }

  isMouseOver() {
    const mouse = this.game.input.mouse;
    const isTouchEvent = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchEvent) {
        return false;
    } else {
        return mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height;
    }
  }

  isTouchOver() {
      if (this.draggable) {
          for (let i = 0; i < this.game.input.touches.length; i++) {
              const touch = this.game.input.touches[i];
              if (touch.x > this.x && touch.x < this.x + this.width && touch.y > this.y && touch.y < this.y + this.height) {
                  if (!this.game.isDraggingImage) { // Check if no image is currently being dragged
                      this.isGrabbed = true;
                      this.game.isDraggingImage = true; // Update the game state to indicate an image is being dragged
                      return true;
                  }
              }
          }
          if (this.game.input.touches.length === 0 && this.draggable && !this.game.input.mouse.clicked) {
              if (this.isGrabbed) {
                  this.dropped = true;
                  this.game.isDraggingImage = false; // Update the game state when the image is no longer being dragged
              }
              this.isGrabbed = false;
          }
      }
      return this.game.input.touches.length > 0 && this.game.input.touches.some(touch => touch.x > this.x && touch.x < this.x + this.width && touch.y > this.y && touch.y < this.y + this.height);
  }

  mouseHovering() {

      if(this.mouseHover) {
          
          if(this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches)) {

              if(this.hoverScale){
                  if(this.scale < this.scaleToHover){
                      this.scale += this.scaleSpeed;
                  } 
              }

              if(!this.mouseOver) {
                  this.mouseOver = true;
                  this.game.hoveredImages.add(this.id);


              }
          } else {
              if(this.mouseOver) {
                  this.mouseOver = false;
                  this.game.hoveredImages.delete(this.id);

              }

              if(this.scale  > 1){
                  this.scale -= this.scaleSpeed;
              } 
          }
      }
  }

  isMouseClicking() {
      if (this.draggable && this.isMouseOver(this.game.input.mouse) && this.game.input.mouse.clicked) {
          if (!this.game.isDraggingImage) { // Check if no image is currently being dragged
              this.isGrabbed = true;
              this.game.isDraggingImage = true; // Update the game state to indicate an image is being dragged
          }
      } else if (!this.game.input.mouse.clicked && this.game.input.touches.length === 0 && this.draggable) {
          if (this.isGrabbed) {
              this.dropped = true;
              this.game.isDraggingImage = false; // Update the game state when the image is no longer being dragged
          }
          //this.isGrabbed = false;
      }
      
      
      return this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches) ? this.game.input.mouse.clicked : false;
  }

}