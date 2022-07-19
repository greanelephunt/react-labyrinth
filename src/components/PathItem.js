import classes from "./PathItem.module.css";

const PathItem = (props) => {

    let innerText;
    if(props.direction === "u") { innerText = "🠕" }
    else if(props.direction === "d") { innerText = "🠗" }
    else if(props.direction === "l") { innerText = "🠔" }
    else { innerText = "🠖" }

    return <div className={classes.path_item}>
        {innerText}
    </div>;
}

export default PathItem;