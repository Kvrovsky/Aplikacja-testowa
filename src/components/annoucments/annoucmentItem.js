import Card from "../ui/card";
import classes from "./AnnoucmentItem.module.css";

function AnnoucmentItem(props) {
  return (
    <li className={classes.item}>
        <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      </Card>
    </li>
  );
}
export default AnnoucmentItem;
