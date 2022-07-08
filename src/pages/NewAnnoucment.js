import NewAnnoucmentForm from "../components/annoucments/NewAnnoucmentForm";

function NewAnnoucments(props){
    function addAnnoucmentHandler(AnnoucmentData){
        
    }
    return <section>
        <h1>Dodaj nowe ogłoszenie</h1>
        <NewAnnoucmentForm onAddAnnoucment={props.addAnnoucmentHandler}/>
    </section>
}
export default NewAnnoucments;