import { Canvas, Graphics } from "./models";
import { setBackgroundColor } from "./tetris/misc";
import { color } from "./utils";


export class Tetris {

    canvas: Canvas;
    graphics: Graphics;

    run = () => {

        setBackgroundColor(this.canvas, this.graphics, color(100, 100, 100));

    }

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.graphics = canvas.getContext('2d')!;

        this.run();

    }

}


