import { Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { getAllItemsFromDB } from "../API/getAllItemsFromDB";
import store from "../Redux/Store&Selectors/Store";
import '../styles/deletebutton.css';


export const DeleteButton = (props) => {
    let dispatch = useDispatch();
    let id = props.id;

    const deleteItem = async() => {
        const agree = window.confirm('Are you sure you want to delete this item?')
        if(agree){
            fetch(`http://localhost:8080/deleteItem/${id}`, {
            method: 'DELETE'
            }).then(async()=>{ 
                // Inside then, 
                // otherwise get will be executed before delete request 
                //because delete request is done async
                
                // Get Request
                const itemsFromDB = await getAllItemsFromDB();
                console.log(itemsFromDB);
                dispatch({type: 'items/setState', payload: itemsFromDB})
                console.log(store.getState())
            })
            }
    }


    return <Button id='button' variant='outline-danger' onClick={deleteItem}>Delete</Button>
}