export class Image {
    constructor(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover, textLayout) {
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
    }

    update() {
        this.mouseHovering();   
        this.isMouseClicking();
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
                // Mede a largura e a altura do texto
                const textWidth = ctx.measureText(this.text).width;
                const textHeight = this.fontSize; // Aproximadamente a altura da fonte
        
                // Ajusta a largura e a altura do botão com base nas dimensões do texto + padding
                buttonWidth = textWidth + padding * 2;
                buttonHeight = textHeight + padding * 2;
        
                // Prepara o canvas para desenhar o botão
                this.prepareCanvas(ctx, buttonWidth, buttonHeight);
        
                // Desenha o botão (imagem ou retângulo) antes do texto
                ctx.drawImage(this.image, this.x, this.y, buttonWidth, buttonHeight);
        
                // Desenha o texto
                if (this.text) {
                    const textX = this.x + (buttonWidth - textWidth) / 2; // Centraliza horizontalmente
                    const textY = this.y + buttonHeight / 2 + textHeight / 4; // Centraliza verticalmente
                    ctx.fillText(this.text, textX, textY);
                }
            } else if (this.textLayout === "column") {
                const lines = Array.isArray(this.text) ? this.text : [this.text];
                const lineHeight = this.fontSize + padding; // Altura da linha incluindo o espaçamento
        
                // Calcula a largura e altura necessárias para o botão
                buttonWidth = lines.reduce((acc, line) => Math.max(acc, ctx.measureText(line).width), 0) + padding * 4;
                buttonHeight = lines.length * lineHeight + padding * 4; // Ajusta a altura total
        
                // Prepara o canvas para desenhar o botão
                this.prepareCanvas(ctx, buttonWidth, buttonHeight);
        
                // Desenha o botão
                ctx.drawImage(this.image, this.x, this.y, buttonWidth, buttonHeight);
        
                // Desenha o texto
                lines.forEach((line, index) => {
                    const textWidth = ctx.measureText(line).width;
                    const textX = this.x + (buttonWidth - textWidth) / 2; // Centraliza horizontalmente
                    const textY = this.y + (index * lineHeight) + this.fontSize; // Posiciona cada linha de texto
                    ctx.fillText(line, textX, textY);
                });
            }
        
            // Atualiza a largura e altura do botão para a próxima chamada
            this.width = buttonWidth;
            this.height = buttonHeight;
        } else {
            // Quando não há texto, usamos as dimensões fornecidas
            this.prepareCanvas(ctx, this.width, this.height);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    
        // Restaura as configurações do canvas
        ctx.restore();
        ctx.globalAlpha = 1.0;
    }
    
    // Método auxiliar para preparar o canvas
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
        }
        if(this.x > x){
            this.x -= speed;
            this.textX -= speed;
        }
        if(this.y < y){
            this.y += speed;
            this.textY += speed;
        }
        if(this.y > y){
            this.y -= speed;
            this.textY -= speed;
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

    isMouseOver(mouse){
        return mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height;
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
                    // Adiciona o identificador único desta instância ao conjunto
                    this.game.hoveredImages.add(this.id); // Supondo que cada instância tenha um 'id' único

                    if(this.scale < 1.1){
                        this.scale += 0.01;
                    } else {
                        this.scale = 1.1;
                    }
                    
                }
            } else {
                if(this.mouseOver) {
                    this.mouseOver = false;
                    // Remove o identificador único desta instância do conjunto
                    this.game.hoveredImages.delete(this.id);

                    if(this.scale > 1){
                        this.scale -= 0.01;
                    } else {
                        this.scale = 1;
                    }
                }
            }
        }
    
        // Atualiza o estilo do cursor centralmente
        //this.game.updateCursorStyle();
    }

    isMouseClicking(){
        if(this.isMouseOver(this.game.input.mouse) || this.isTouchOver(this.game.input.touches)){
            return this.game.input.mouse.clicked;
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
