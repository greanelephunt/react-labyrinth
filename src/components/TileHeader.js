import classes from "./TileHeader.module.css";

const TileHeader = (props) => {
  return (
    <div className={`${classes.tile_header} ${props.className}`}>
      {props.text}
    </div>
  );
};

export default TileHeader;
