import { IdleMature } from "./Clouds1States.js";

export class Clouds1 {
    constructor(game, x, y, maxSpeed, fps){
        this.game = game;
        this.width = 128;
        this.height = 128;
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById("clouds1");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = fps;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.states = [new IdleMature(this)];
        this.currentState = this.states[0];
        this.currentState.enter();

    }

     update(input, deltaTime){

        this.currentState.handleInput(input);

        if(this.x > this.game.width + this.width){
         this.x = 0 - this.width;
        } else {
         this.x += 0.2;
        }


        //sprite animation
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        //if (this.frameX < this.maxFrameX) this.frameX++;
        //else this.frameX = 0;
     }

     draw(ctx){      
        ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 128, 128, this.x, this.y, this.width, this.height);
     }
     onGround(){
        return this.y >= this.game.height - this.height - this.game.groundMargin;
     }
     setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
     }
}