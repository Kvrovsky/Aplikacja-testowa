import AnnoucmentItem from "./annoucmentItem";
import classes from "./AnnoucmentList.module.css";

function AnnoucmentList(props) {
  console.log(props.annoucments.map((a) => console.log(a)));
  return (
    <ul className={classes.list}>
      {props.annoucments.map((annoucment) => {
        return (
          <AnnoucmentItem
            key={annoucment.id}
            id={annoucment.id}
            image={annoucment.image}
            title={annoucment.title}
            address={annoucment.address}
            description={annoucment.description}
          />
        );
      })}
    </ul>
  );
}
export default AnnoucmentList;
