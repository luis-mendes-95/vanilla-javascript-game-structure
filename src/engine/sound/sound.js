export class Sound {
    constructor(src) {
        this.sound = new Audio(src);
    }

    play() {
        this.sound.play();
    }

    pause() {
        this.sound.pause();
    }
}