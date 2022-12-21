import { Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { getAllBoughtsFromDB, getAllItemsFromDB } from "../API/getAllItemsFromDB";
import store from "../Redux/Store&Selectors/Store";
import '../styles/getItButton.css';


export const GetItButton = (props) => {
    let dispatch = useDispatch();
    let id = props.id;
    let name = props.name;
    let description = props.description;
    let disabled = props.disabled;

    const addToBought = async() => {
        const agree = window.confirm('Are you sure you want to buy this item?')
        if(agree){

            // Search for item in google
            window.open(`https://shopping.google.com/search?q=${name}`, '_blank');

             // Add data to body
             const data = new FormData();
             data.append("id", id);
             data.append("name", name);
             data.append("description", description);

            console.log('post')
             // Post Request
             fetch('http://localhost:8080/addBought', {
                 method: 'POST',
                 body: data
             })
 
             console.log('delete')

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
            })

            }

            // Get Request
            const boughtFromDB = await getAllBoughtsFromDB();
            dispatch({type: 'bought/setState', payload: boughtFromDB})
    }


    return <Button disabled={disabled} id='getItButton' variant='outline-success' onClick={addToBought}>Get it!</Button>
}