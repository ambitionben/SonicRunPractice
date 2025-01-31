import kaplay from "kaplay";

//initialzes the canvas, where game will be display
//letterbox scale the canvas in a way to keep the
//aspect ratio
const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  background: [0, 0, 0],
  global: false,
  touchToMouse: true,
  buttons: {
    jump: {
      keyboard: ["space"],
      mouse: "left",
    },
  },
  debugKey: "d",
  debug: true,
});

export default k;
