export class Keyboard {
    constructor(game, x, y, font, maxLength) {
        this.font = font;
        this.game = game;
        this.ctx = game.ctx;
        this.maxLength = maxLength;
        this.keys = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
            [' ']
        ];
        this.currentInput = "";
        const screenWidth = game.canvas.width;
        this.keyWidth = screenWidth * 0.075;
        this.keyHeight = this.keyWidth;
        this.spaceBarWidth = this.keyWidth * 5;
        this.backspaceWidth = this.keyWidth;
        this.margin = screenWidth * 0.005;
        this.startX = x;
        this.startY = y;
        this.opacity = 0.9;
        this.initEventListeners();
        this.canType = true;
    }

    initEventListeners() {
        document.addEventListener('keydown', this.handleKeydown.bind(this));
        this.game.canvas.addEventListener('click', this.handleClick.bind(this));
        this.game.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
    }

    handleKeydown(e) {
        if (this.canType) {
            if (e.key === 'Backspace') {
                this.currentInput = this.currentInput.slice(0, -1);
            } else if ((e.key === ' ' || e.key.length === 1) && this.currentInput.length < this.maxLength) {
                this.currentInput += e.key.toUpperCase();
            }
            this.draw();
        }
    }

    handleClick(e) {
        const rect = this.ctx.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (this.game.canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (this.game.canvas.height / rect.height);
        this.processInput(x, y);
    }

    handleTouchStart(e) {
        const rect = this.ctx.canvas.getBoundingClientRect();
        for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            const x = (touch.clientX - rect.left) * (this.game.canvas.width / rect.width);
            const y = (touch.clientY - rect.top) * (this.game.canvas.height / rect.height);
            this.processInput(x, y);
        }
    }

    processInput(x, y) {
        let yOffset = 0;
    
        this.keys.forEach((row, rowIndex) => {
            let xOffset = 0;
            row.forEach((key, keyIndex) => {
                const width = key === ' ' ? this.spaceBarWidth : key === '←' ? this.backspaceWidth : this.keyWidth;
                const keyX = this.startX + xOffset;
                const keyY = this.startY + yOffset;
                if (x > keyX && x < keyX + width && y > keyY && y < keyY + this.keyHeight) {
                    if (key === '←') {
                        this.currentInput = this.currentInput.slice(0, -1);
                    } else if ((key === ' ' || key.length === 1) && this.currentInput.length < this.maxLength) {
                        this.currentInput += key;
                    }
                    this.draw();
                }
                xOffset += width + this.margin;
            });
            yOffset += this.keyHeight + this.margin;
        });
    }

    update() {
        this.mouseHovering();
        this.isMouseClicking();


        }

    draw() {
        const canvasWidth = this.ctx.canvas.width;

        this.ctx.save();
        this.ctx.font = `${this.keyHeight * 0.5}px ${this.font}`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        let x = this.startX;
        let y = this.startY;

        for (let row of this.keys) {
            for (let key of row) {
                let keyWidth = key === ' ' ? this.spaceBarWidth : this.keyWidth;
                if (this.isMouseOver(this.game.input.mouse, row, key) || this.isTouchOver(this.game.input.touches, row, key)) {
                    this.ctx.fillStyle = `rgba(200, 200, 0, 1)`;
                } else {
                    this.ctx.fillStyle = `rgba(211, 211, 211, ${this.opacity})`;
                }
                this.ctx.fillRect(x, y, keyWidth, this.keyHeight);
                this.ctx.fillStyle = 'black';
                this.ctx.fillText(key, x + (keyWidth / 2), y + (this.keyHeight / 2));
                x += keyWidth + this.margin;
            }
            x = this.startX;
            y += this.keyHeight + this.margin;
        }

        this.ctx.restore();
    }

    moveTo(x, y, speed) {
        if (this.startX < x) {
            this.startX += speed;
        }
        if (this.startX > x) {
            this.startX -= speed;
        }
        if (this.startY < y) {
            this.startY += speed;
        }
        if (this.startY > y) {
            this.startY -= speed;
        }
    }

    fadeIn(speed) {
        if (this.opacity < 1) {
            this.opacity += speed;
            if (this.opacity > 1) {
                this.opacity = 1;
            }
        }
    }

    fadeOut(speed) {
        if (this.opacity > 0) {
            this.opacity -= speed;
            if (this.opacity < 0) {
                this.opacity = 0;
            }
        }
    }

    isMouseOver(mouse, row, key) {
        let yOffset = 0;

        for (let i = 0; i < this.keys.length; i++) {
            let xOffset = 0;
            for (let j = 0; j < this.keys[i].length; j++) {
                const width = this.keys[i][j] === ' ' ? this.spaceBarWidth : this.keys[i][j] === '←' ? this.backspaceWidth : this.keyWidth;
                const keyX = this.startX + xOffset;
                const keyY = this.startY + yOffset;
                if (mouse.x >= keyX && mouse.x <= keyX + width && mouse.y >= keyY && mouse.y <= keyY + this.keyHeight) {
                    return this.keys[i][j] === key;
                }
                xOffset += width + this.margin;
            }
            yOffset += this.keyHeight + this.margin;
        }
        return false;
    }

    isTouchOver(touches, row, key) {
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            if (this.isMouseOver(touch, row, key)) {
                return true;
            }
        }
        return false;
    }

    mouseHovering() {
        let isOverAnyKey = false;
        for (let rowIndex = 0; rowIndex < this.keys.length; rowIndex++) {
            const row = this.keys[rowIndex];
            for (let keyIndex = 0; keyIndex < row.length; keyIndex++) {
                const key = row[keyIndex];
                const keyId = `row-${rowIndex}-key-${keyIndex}`;
                if (this.isMouseOver(this.game.input.mouse, row, key) || this.isTouchOver(this.game.input.touches, row, key)) {
                    if (!this.game.hoveredImages.has(keyId)) {
                        this.game.hoveredImages.add(keyId);
                        isOverAnyKey = true;
                    }
                } else {
                    if (this.game.hoveredImages.has(keyId)) {
                        this.game.hoveredImages.delete(keyId);
                    }
                }
            }
        }

        this.game.updateCursorStyle();
        this.mouseOver = isOverAnyKey;
    }

    isMouseClicking() {
        if (this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches)) {
            return this.game.input.mouse.clicked;
        }
    }

    rotate(degrees, speed) {
        if (this.rotation < degrees) {
            this.rotation += speed;
        }
        if (this.rotation > degrees) {
            this.rotation -= speed;
        }
    }
}
