import NewAnnoucmentForm from "../components/annoucments/NewAnnoucmentForm";
import axios from "axios";
import React from "react";

function NewAnnoucments(props) {
 async function addAnnoucmentHandler(AnnoucmentData) {
    // axios({
    //   method: 'post',
    //   url: 'https://aplikacja-test-36504-default-rtdb.europe-west1.firebasedatabase.app',
    //   data: {
    //     title: AnnoucmentData.title,
    //     image: AnnoucmentData.image,
    //     address: AnnoucmentData.address,
    //     description: AnnoucmentData.description,
    //   }
    // }).then(r=>console.log(r)).catch(e=>console.log(e));
    await axios.post('https://aplikacja-test-36504-default-rtdb.europe-west1.firebasedatabase.app/', {  })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  return (
    <section>
      <h1>Dodaj nowe ogłoszenie</h1>
      <NewAnnoucmentForm onAddAnnoucment={addAnnoucmentHandler} />
    </section>
  );
}
export default NewAnnoucments;
