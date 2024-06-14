export class Image {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover, textLayout, uniqueText = null, uniqueTextX = null, uniqueTextY = null, cursorVisible = false, textOffsetX = 0, textOffsetY = 0, hoverScale = false) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.scale = 1;
        this.rotation = rotation;
        this.mouseHover = mouseHover;
        this.mouseOver = false;
        this.width = width;
        this.height = height;
        this.image = image;
        this.opacity = opacity;
        this.text = text;
        this.font = font;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.textX = textX;
        this.textY = textY;
        this.textColor = textColor;
        this.textSpacing = textSpacing;
        this.textLayout = textLayout;
        this.uniqueText = uniqueText;
        this.uniqueTextX = uniqueTextX;
        this.uniqueTextY = uniqueTextY;
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;

        // Cursor attributes
        this.blinkingCursor = false;
        this.cursorVisible = true;
        this.cursorInterval = 500; // Intervalo de piscagem em milissegundos
        this.lastCursorBlink = Date.now();
        this.canBlinkCursor = cursorVisible;

        /**HOVER CONTROLS */
        this.hoverScale = hoverScale;
    }

    update() {
        this.mouseHovering();
        this.isMouseClicking();

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
        // Define a fonte para medir o texto corretamente
        ctx.font = `${this.fontWeight} ${this.fontSize}px ${this.font}`;
    
        // Configurações comuns
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.textColor;
        ctx.save();

        if (this.text) {
            const padding = this.height * 0.05;
            let buttonWidth, buttonHeight;

            if (this.textLayout === "row") {
                const textWidth = ctx.measureText(this.text).width;
                const textHeight = this.fontSize;
                buttonWidth = textWidth + padding * 2;
                buttonHeight = textHeight + padding * 2;
                this.prepareCanvas(ctx, buttonWidth, buttonHeight);
                ctx.drawImage(this.image, this.x, this.y, buttonWidth, buttonHeight);
                if (this.text) {
                    const textX = this.x + (buttonWidth - textWidth) / 2 + this.textOffsetX;
                    const textY = this.y + buttonHeight / 2 + textHeight / 4 + this.textOffsetY;
                    ctx.fillText(this.text, textX, textY);
                }
            } else if (this.textLayout === "column") {
                const lines = Array.isArray(this.text) ? this.text : [this.text];
                const lineHeight = this.fontSize + padding;
                buttonWidth = lines.reduce((acc, line) => Math.max(acc, ctx.measureText(line).width), 0) + padding * 4;
                buttonHeight = lines.length * lineHeight + padding * 4;
                this.prepareCanvas(ctx, buttonWidth, buttonHeight);
                ctx.drawImage(this.image, this.x, this.y, buttonWidth, buttonHeight);
                lines.forEach((line, index) => {
                    const textWidth = ctx.measureText(line).width;
                    const textX = this.x + (buttonWidth - textWidth) / 2 + this.textOffsetX;
                    const textY = this.y + (index * lineHeight) + this.fontSize + this.textOffsetY;
                    ctx.fillText(line, textX, textY);
                });
            }

            this.width = buttonWidth;
            this.height = buttonHeight;
        } else {
            this.prepareCanvas(ctx, this.width, this.height);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        if (this.uniqueText || this.blinkingCursor) {
            ctx.fillText(this.uniqueText || '', this.uniqueTextX + this.textOffsetX, this.uniqueTextY + this.textOffsetY);

            // Calcula a posição do cursor com base na largura do uniqueText
            const textMetrics = ctx.measureText(this.uniqueText || '');
            const cursorX = this.uniqueTextX + textMetrics.width;
            const cursorY = this.uniqueTextY;

            // Desenha o cursor se estiver visível
            if (this.blinkingCursor && this.cursorVisible) {
                ctx.fillText('|', cursorX, cursorY);
            }
        }

        ctx.restore();
        ctx.globalAlpha = 1.0;
    }

    prepareCanvas(ctx, buttonWidth, buttonHeight) {
        ctx.translate(this.x + buttonWidth / 2, this.y + buttonHeight / 2);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-(this.x + buttonWidth / 2), -(this.y + buttonHeight / 2));
    }

    moveTo(x, y, speed){
        if(this.x < x){
            this.x += speed;
            this.textX += speed;
            this.uniqueTextX += speed;
        }
        if(this.x > x){
            this.x -= speed;
            this.textX -= speed;
            this.uniqueTextX -= speed;
        }
        if(this.y < y){
            this.y += speed;
            this.textY += speed;
            this.uniqueTextY += speed;
        }
        if(this.y > y){
            this.y -= speed;
            this.textY -= speed;
            this.uniqueTextY -= speed;
        }
        this.draw(this.game.ctx);
    }
    
    fadeIn(speed){
        if(this.opacity < 1){
            this.opacity += speed;
            if(this.opacity > 1) {
                this.opacity = 1;
            }
        }
    }

    fadeOut(speed){
        if(this.opacity > 0){
            this.opacity -= speed;
            if(this.opacity < 0) {
                this.opacity = 0;
            }
        }
    }

    isMouseOver(mouse) {
        const isTouchEvent = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchEvent) {
            return false;
        } else {
            return mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height;
        }
    }

    isTouchOver(touches){
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            if (touch.x > this.x && touch.x < this.x + this.width && touch.y > this.y && touch.y < this.y + this.height) {
                return true;
            }
        }
        return false;
    }
    
    mouseHovering() {
        if(this.mouseHover) {
            if(this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches)) {
                if(!this.mouseOver) {
                    this.mouseOver = true;
                    this.game.hoveredImages.add(this.id);
                    console.log("adicionou")

                    if(this.hoverScale){
                        if(this.scale < 1.1){
                            this.scale += 0.01;
                        } else {
                            this.scale = 1.1;
                        }
                    }
                }
            } else {
                if(this.mouseOver) {
                    this.mouseOver = false;
                    this.game.hoveredImages.delete(this.id);

                    if(this.hoverScale){
                        if(this.scale > 1){
                            this.scale -= 0.01;
                        } else {
                            this.scale = 1;
                        }
                    }
                }
            }
        }
    }

    isMouseClicking(){
        return this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches) ? this.game.input.mouse.clicked : false;
    }

    rotate(degrees, speed){
        if(this.rotation < degrees){
            this.rotation += speed;
        }
        if(this.rotation > degrees){
            this.rotation -= speed;
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

// Para usar a funcionalidade de cursor piscando, basta chamar startBlinkingCursor() na instância de Image
// e repassar o texto do teclado + texto do input no método update da cena onde os objetos são instanciados.
