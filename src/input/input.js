export class InputHandler{
    constructor(){
        this.keys = [];
        this.mouse = {
            x: 0,
            y: 0,
            clicked: false
        };

        window.addEventListener('keydown', (e) => {
            if(!this.keys.includes(e.key)) this.keys.push(e.key);
        });
        window.addEventListener('keyup', (e) => {
            this.keys = this.keys.filter(key => key !== e.key);
        });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mousedown', (e) => {
            this.mouse.clicked = true;
        });
        window.addEventListener('mouseup', (e) => {
            this.mouse.clicked = false;
        });
    }
}