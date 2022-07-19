import Field from "./Field";
import Path from "./Path";

import classes from "./Labyrinth.module.css";
import Button from "./Button";

const Labyrinth = () => {
  return (
    <div className={classes.container}>
      <Button text="New game"/>
      <Field />
      <Path />
    </div>
  );
};

export default Labyrinth;
