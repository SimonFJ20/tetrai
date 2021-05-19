import { Vector2d } from "./models";


export const setBodyStyle = () => {
    document.body.style.backgroundColor = `rgb(${30}, ${30}, ${30})`;
    document.body.style.display = 'grid';
    document.body.style.placeItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.body.style.boxSizing = 'border-box';
}

export const loadCanvas = (dimensions: Vector2d): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.id = 'tetris';
    canvas.width = dimensions.x;
    canvas.height = dimensions.y;
    canvas.style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
    document.body.appendChild(canvas);
    return canvas;
}
