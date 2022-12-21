import { Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { getAllBoughtsFromDB, getAllItemsFromDB } from "../API/getAllItemsFromDB";
import store from "../Redux/Store&Selectors/Store";
import '../styles/deletebutton.css';


export const DeleteFromBought = (props) => {
    let dispatch = useDispatch();
    let id = props.id;

    const deleteItem = async() => {
        const agree = window.confirm('Are you sure you want to delete this item?')
        if(agree){
            fetch(`http://localhost:8080/deleteFromBought/${id}`, {
            method: 'DELETE'
            }).then(async()=>{                 
                // Get Request
                const itemsFromDB = await getAllBoughtsFromDB();
                console.log(itemsFromDB);
                dispatch({type: 'bought/setState', payload: itemsFromDB})
                console.log(store.getState())
            })
            }
    }


    return <Button id='button' variant='outline-danger' onClick={deleteItem}>Delete</Button>
}