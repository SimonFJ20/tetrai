import { Color } from "../models";
import { color } from "../utils";

interface Block {
    id: number;
    color: Color;
    width: number;
    map: number[];
}

export const Blocks: Block[] = [
    {id: 1, color: color(0, 255, 255), width: 4, map: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]}, // I
    {id: 2, color: color(0, 0, 255), width: 3, map: [2, 0, 0,2, 2, 2, 0, 0, 0]}, // J
    {id: 3, color: color(255, 125, 0), width: 3, map: [0, 0, 3, 3, 3, 3, 0, 0, 0]}, // L
    {id: 4, color: color(255, 255, 0), width: 2, map: [4, 4, 4, 4]}, // O
    {id: 5, color: color(0, 255, 0), width: 3, map: [0, 5, 5, 5, 5, 0, 0, 0, 0]}, // S
    {id: 6, color: color(255, 0, 255), width: 3, map: [0, 6, 0, 6, 6, 6, 0, 0, 0]}, // T
    {id: 7, color: color(255, 0, 0), width: 3, map: [7, 7, 0, 0, 7, 7, 0, 0, 0]} // Z
];
