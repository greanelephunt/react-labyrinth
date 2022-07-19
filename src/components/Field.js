import { useSelector } from "react-redux";
import Tile from "./Tile";
import TileHeader from "./TileHeader";

import classes from "./Field.module.css";

const Field = () => {
  const field = useSelector((state) => state.labyrinth.field);

  return (
    <div className={classes.container}>
      <TileHeader className={classes.header1} text="A" />
      <TileHeader className={classes.header2} text="B" />
      <TileHeader className={classes.header3} text="C" />
      <TileHeader className={classes.header4} text="1" />
      <TileHeader className={classes.header5} text="2" />
      <TileHeader className={classes.header6} text="3" />
      <div/>
      {
        field.map(row => row.map(tile => <Tile key={tile.position.x+tile.position.y} type={tile.type} tilePosition={tile.position}/>)) 
      }
    </div>
  );
};

export default Field;
