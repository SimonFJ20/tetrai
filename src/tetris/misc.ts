import { Canvas, Color, Graphics } from "../models";
import { colorToString } from "../utils";

export const setFillColor = (graphics: Graphics, color: Color) => {
    graphics.fillStyle = colorToString(color);
}

export const setBackgroundColor = (canvas: Canvas, graphics: Graphics, color: Color) => {
    const originalStyle = graphics.fillStyle;
    graphics.fillStyle = colorToString(color);
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = originalStyle;
}

export const drawBoard = (canvas: Canvas, graphics: Graphics, board: number[]) => {
    if(board.length !== 200) return;
    for(let y = 0; y < 20; y++) {
        for(let x = 0; x < 20; x++) {
            
        }
    }
}
