import { loadCanvas, setBodyStyle } from "./html";
import { Tetris } from "./tetris";

const main = () => {
    setBodyStyle();
    const canvas = loadCanvas({x: 250, y: 500});

    new Tetris(canvas);

}

main();
