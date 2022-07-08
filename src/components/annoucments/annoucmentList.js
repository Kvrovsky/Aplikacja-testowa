import AnnoucmentItem from "./annoucmentItem";
import classes from "./AnnoucmentList.module.css";

function AnnoucmentList(props) {
  return (
    <ul classname={classes.list}>
      {props.items.map((annoucment) => (
        <AnnoucmentItem
          key={annoucment.id}
          id={annoucment.id}
          image={annoucment.image}
          title={annoucment.title}
          address={annoucment.address}
          description={annoucment.description}
        />
      ))}
    </ul>
  );
}
export default AnnoucmentList;
