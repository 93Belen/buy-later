import { Button } from "react-bootstrap"
import "../styles/addToList.css";
import { useNavigate } from "react-router";


export const AddToList = (props) => {
    let navigate = useNavigate();
    let name = props.name;
    let description = props.description;
    
    const goToForm = () => {
        document.getElementById('name').value = name;
        document.getElementById('description').value = description;
        navigate('/', {replace: true});
    }
    


    return (
        <Button id='addToList' onClick={goToForm} variant='outline-warning'>Add it!</Button>
    )
}