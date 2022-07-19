import { useDispatch } from "react-redux";
import { labyrinthActions } from "../app/labyrinth-slice";
import classes from "./Tile.module.css";

const Tile = (props) => {
  const dispatch = useDispatch();

  const tileClickHandler = () => {
    dispatch(labyrinthActions.checkTile(props.tilePosition));
  };

  let tileClassName = classes.tile;
  let tileContent;

  if (props.type === "start") {
    tileContent = "START";
  } else if (props.type === "right") {
    tileClassName = `${classes.tile} ${classes.right}`;
    tileContent = "✔";
  } else if (props.type === "wrong") {
    tileClassName = `${classes.tile} ${classes.wrong}`;
    tileContent = "X";
  }

  return (
    <div
      className={`${tileClassName} ${props.className}`}
      onClick={tileClickHandler}
    >
      {tileContent}
    </div>
  );
};

export default Tile;
