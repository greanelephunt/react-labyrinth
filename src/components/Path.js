import { useSelector } from "react-redux";
import classes from "./Path.module.css";
import PathItem from "./PathItem";

const Path = () => {
    
  const path = useSelector(state => state.labyrinth.path);

  return (
    <div className={classes.container}>
      {path.map((item) => <PathItem direction={item} />)}
    </div>
  );
};

export default Path;
