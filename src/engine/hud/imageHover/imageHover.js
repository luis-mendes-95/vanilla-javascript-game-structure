import { Image } from "../image/image.js";

export class ImageHover extends Image {
    constructor(game, x, y, width, height, rotation, image, hoverImage, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover) {
        super(game, x, y, width, height, rotation, image, opacity, text, textSpacing, font, fontWeight, fontSize, textX, textY, textColor, mouseHover);
        this.hoverImage = hoverImage;
        this.originalImage = this.image;
    }

    draw(ctx) {
        if (this.mouseOver) {
            this.image = this.hoverImage;
        }
        super.draw(ctx);
    }

    mouseHovering() {
        let wasMouseOver = this.mouseOver;
        super.mouseHovering();
        if (wasMouseOver !== this.mouseOver) {
            this.image = this.mouseOver ? this.hoverImage : this.originalImage; // use the original image when the mouse is not over
        }
    }
}