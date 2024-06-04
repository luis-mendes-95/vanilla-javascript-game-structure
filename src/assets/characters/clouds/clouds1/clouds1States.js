const states = {

    IDLE: 0,

}

class State {
    constructor(state){
        this.state = state;
    }
}

export class IdleMature extends State {
    constructor(cloud){
        super('IDLE')
        this.cloud = cloud;
    }
    enter(){
        this.cloud.frameX = 0;
        this.cloud.frameY = 0;
        this.cloud.maxFrame = 1;
    }
    handleInput(input){
      //if press E, open chat with The Wise
    }
}


