import { Color, Vector2d } from "./models";

export const clamp = (value: number, min: number, max: number): number => {
    if(value < min) return min;
    if(value > max) return max;
    return value;
}


export const colorToString = (color: Color): string => {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}



export const vector2d = (x: number, y: number): Vector2d => {
    return {x, y};
}

export const color = (red: number, green: number, blue: number): Color => {
    return {
        red: clamp(red, 0, 255),
        green: clamp(green, 0, 255),
        blue: clamp(blue, 0, 255)
    };
}

