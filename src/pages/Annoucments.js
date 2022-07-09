
import axios from "axios";
import { useState, useEffect } from "react";
import AnnoucmentList from "../components/annoucments/annoucmentList";

function Annoucments() {
  //array w którym są dwie rzeczy pierwszy jest obecnego statu a drugi jest do zmiany stanu
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAnnoucment, setLoadedAnnoucments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(
      //pobieramy z api database do którego zostana przekazane dane
      "https://aplikacja-test-36504-default-rtdb.europe-west1.firebasedatabase.app/annoucments.json"
    )
      //response  jest to zmienna która jest automatycznie otrzymywana przez "fetch"
      .then((response) => {
        //aby odczytać dane potrzebujemy response.json json również zwraca pytanie wiec musimy dodać data
        console.log(response.data)
        // Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } ))
        // console.log(Object.entries(response.data).map(e => e[1]))
        // console.log(Object.values(response.data))
        
        
        setLoadedAnnoucments(Object.values(response.data));
        setIsLoading(false);
      })
      //tutaj bedziemy pracować na otrzymanych danych
      

        // setIsLoading(false);
        // setLoadedAnnoucments(annoucments);
      // });
    //sprawdzamy czy dalej się ładujemy przed returnem z wyświetlaniem danych
  }, []);
  //drugi argument zadziała jeśli coś sie zmieni

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <AnnoucmentList annoucments={loadedAnnoucment} />
      </ul>
    </section>
  );
}
export default Annoucments;