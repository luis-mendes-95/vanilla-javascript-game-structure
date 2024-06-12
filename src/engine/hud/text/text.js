export class Text {
    constructor(game, x, y, text, textSpacing, font, fontWeight, fontSize, textColor, mouseHover, background = null, backgroundWidth, cursorVisible) {
        /**GAME*/
        this.game = game;

        /**POSITION*/
        this.x = x;
        this.y = y;

        /**MOUSE HOVER*/
        this.mouseHover = mouseHover;
        this.mouseOver = false;

        /**TEXT*/
        this.text = text;
        this.font = font;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.textColor = textColor;
        this.textSpacing = textSpacing;

        /**BACKGROUND*/
        this.background = background; // Novo parâmetro para background
        this.backgroundWidth = backgroundWidth; // Novo parâmetro para background

        /**CURSOR*/
        this.blinkingCursor = false;
        this.cursorVisible = true;
        this.cursorInterval = 500; // Intervalo de piscagem em milissegundos
        this.lastCursorBlink = Date.now();
        this.canBlinkCursor = cursorVisible;
    }

    update() {
        this.mouseHovering();
        if (this.animating) {
            this.animateFontSize();
        }

        // Atualiza a visibilidade do cursor
        if (this.blinkingCursor && Date.now() - this.lastCursorBlink >= this.cursorInterval) {
            this.cursorVisible = !this.cursorVisible;
            this.lastCursorBlink = Date.now();
        }

        if(this.canBlinkCursor) {
            this.startBlinkingCursor();
        }
    }

    draw(ctx) {
        // Desenha o background se estiver definido e ativado
        if (this.background && this.background.enabled) {
            ctx.fillStyle = this.background.color;
            // Ajusta a posição e tamanho conforme necessário
            const bgX = this.x - this.background.padding;
            const bgY = this.y - this.fontSize - this.background.padding;
            const bgWidth = this.backgroundWidth;
            const bgHeight = this.fontSize + 2 * this.background.padding;
            ctx.fillRect(bgX, bgY, bgWidth, bgHeight);
        }

        // Configuração e desenho do texto
        ctx.fillStyle = this.textColor;
        if (this.fontWeight) {
            ctx.font = `${this.fontWeight} ${this.fontSize}px ${this.font}`;
        } else {
            ctx.font = `${this.fontSize}px ${this.font}`;
        }
        ctx.fillText(this.text, this.x, this.y);

        // Calcula a posição do cursor com base na largura do texto
        const textMetrics = ctx.measureText(this.text);
        const cursorX = this.x + textMetrics.width;
        const cursorY = this.y;

        // Desenha o cursor se estiver visível
        if (this.blinkingCursor && this.cursorVisible) {
            ctx.fillText('|', cursorX, cursorY);
        }
    }

    /**RETURNS IF MOUSE IS OVER THIS ELEMENT */
    isMouseOver(mouse) {
        const textMetrics = this.game.ctx.measureText(this.text);
        return mouse.x > this.x && mouse.x < this.x + textMetrics.width && mouse.y > this.y && mouse.y < this.y + this.fontSize;
    }

    /**MOUSE HOVER IS DEFINED WHEN THIS CLASS IS INSTANCIATED */
    mouseHovering() {
        if (this.mouseHover) {
            if (this.isMouseOver(this.game.input.mouse)) {
                this.game.canvas.style.cursor = 'pointer';
            } else {
                this.game.canvas.style.cursor = 'default';
            }
        }
    }

    /**MOVE X AND Y DETERMINED BY A SPEED*/
    moveTo(x, y, speed) {
        if (this.x < x) {
            this.x += speed;
        }
        if (this.x > x) {
            this.x -= speed;
        }
        if (this.y < y) {
            this.y += speed;
        }
        if (this.y > y) {
            this.y -= speed;
        }
    }

    startAnimation(minFontSize, maxFontSize, speed) {
        this.minFontSize = minFontSize;
        this.maxFontSize = maxFontSize;
        this.animationSpeed = speed;
        this.animating = true;
    }

    animateFontSize() {
        if (this.increasing) {
            this.fontSize += this.animationSpeed;
            if (this.fontSize >= this.maxFontSize) {
                this.fontSize = this.maxFontSize;
                this.increasing = false;
            }
        } else {
            this.fontSize -= this.animationSpeed;
            if (this.fontSize <= this.minFontSize) {
                this.fontSize = this.minFontSize;
                this.increasing = true;
            }
        }
    }

    startBlinkingCursor() {
        this.blinkingCursor = true;
    }

    stopBlinkingCursor() {
        this.blinkingCursor = false;
        this.cursorVisible = true; // Reseta a visibilidade do cursor quando parar de piscar
    }
}

// Para usar a funcionalidade de cursor piscando, basta chamar startBlinkingCursor() na instância de Text
// e repassar o texto do teclado + texto do input no método update da cena onde os objetos são instanciados.
