import { Canvas, Color, Graphics } from "../models";
import { colorToString } from "../utils";

export const setBackgroundColor = (canvas: Canvas, graphics: Graphics, color: Color) => {
    const originalStyle = graphics.fillStyle;
    graphics.fillStyle = colorToString(color);
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = originalStyle;
}
