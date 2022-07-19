import { useDispatch } from "react-redux";
import { labyrinthActions } from "../app/labyrinth-slice";
import classes from "./Button.module.css";

const Button = (props) => {

  const dispatch = useDispatch();

  const ButtonClickHandler = () => {
    dispatch(labyrinthActions.newGame());
  }

  return <button className={classes.button} onClick={ButtonClickHandler}>{props.text}</button>;
};

export default Button;
