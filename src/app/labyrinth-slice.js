import { createSlice } from "@reduxjs/toolkit";

//get a random int value, inclusive
const getRandomInt = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDirection = (directions) => {
  return directions[getRandomInt(0, directions.length-1)];
};

const field = [
  [{position:{x:0, y:0},type:null}, {position:{x:1, y:0},type:null}, {position:{x:2, y:0},type:null}],
  [{position:{x:0, y:1},type:null}, {position:{x:1, y:1},type:null}, {position:{x:2, y:1},type:null}],
  [{position:{x:0, y:2},type:null}, {position:{x:1, y:2},type:null}, {position:{x:2, y:2},type:null}],
];

const labyrinthSlice = createSlice({
  name: "labyrinth",
  initialState: { start: { x: 0, y: 0 }, finish: { x: 0, y: 0 }, path: [], field:field },
  reducers: {
    newGame(store) {
      //erasing the old data
      store.path = [];
      store.field.forEach(row => row.forEach(tile => tile.type = null));

      //setting the start point
      store.start = {x:getRandomInt(0, 2), y:getRandomInt(0, 2)};
      store.field[store.start.y][store.start.x].type = "start";

      //generating the path
      let currentPosition = { ...store.start };
      for (let i = 0; i < 10; i++) {
        let directions = ["u","d","l","r"];
        if(currentPosition.x===0) {directions = directions.filter(item => item!=="l");}
        else if(currentPosition.x===2) {directions = directions.filter(item => item!=="r");}
        if(currentPosition.y===0) {directions = directions.filter(item => item!=="u");}
        else if(currentPosition.y===2) {directions = directions.filter(item => item!=="d");}
        
        const direction =  getRandomDirection(directions);
        store.path.push(direction);
        if(direction === "u") { currentPosition.y--}
        else if(direction === "d") {currentPosition.y++}
        else if(direction === "l") {currentPosition.x--}
        else {currentPosition.x++}
      }

      //saving the end point
      store.finish = {...currentPosition};
    },
    checkTile(store, action){
      const {x,y} = action.payload;
      if(store.finish.x === action.payload.x && store.finish.y === action.payload.y) {
        store.field[y][x].type = "right";
      }
      else {
        store.field[y][x].type = "wrong";
        store.field[store.finish.y][store.finish.x].type = "right";
      }
    }
  },
});

export const labyrinthActions = labyrinthSlice.actions;
export default labyrinthSlice;
