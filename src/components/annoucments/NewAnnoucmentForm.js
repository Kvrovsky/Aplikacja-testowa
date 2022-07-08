import { useRef } from "react";
import Card from "../ui/card";
import classes from "./NewAnnoucmentForm.module.css";

function NewAnnoucmentForm(props) {
  const titleInputRef = useRef();
  const ImageInputRef = useRef();
  const adressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const entredtitle = titleInputRef.current.value;
    const entredimage = ImageInputRef.current.value;
    const entredaddress = adressInputRef.current.value;
    const entreddescription = descriptionInputRef.current.value;

    const AnnoucmentData={
        title: entredtitle,
        image: entredimage,
        address: entredaddress,
        description: entreddescription,
    };
    props.onAddAnnoucment(AnnoucmentData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Tytuł ogłsozenia</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">zdjęcie do ogłoszenia</label>
          <input type="url" required id="image" ref={ImageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adres</label>
          <input type="text" required id="address" ref={adressInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Opis ogłoszenia</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Dodaj ogłoszenie</button>
        </div>
      </form>
    </Card>
  );
}
export default NewAnnoucmentForm;
