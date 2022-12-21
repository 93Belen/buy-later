import { getAllItemsFromDB } from "../API/getAllItemsFromDB";
import { useDispatch } from "react-redux";
import { Form, Button, FloatingLabel, Container } from 'react-bootstrap';
import '../styles/form.css';


export const FormElement = () => {
    let dispatch = useDispatch();

        // Add and Get items from database -> Add them to state
        const addItemsInfoToState = async() => {
            //Get data from form
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const dayWillBuy = document.getElementById('dayWillBuy').value;

            // Add data to body
            const data = new FormData();
            data.append("name", name);
            data.append("description", description);
            data.append('dayWillBuy', dayWillBuy);
            
            // Post Request
            fetch('http://localhost:8080/addItem', {
                method: 'POST',
                body: data
            })

            // Get Request
            const itemsFromDB = await getAllItemsFromDB();
            dispatch({type: 'items/setState', payload: itemsFromDB})
        }
        
        

    return (
            <Container 
            id='form'
            className='p-3 m-5'>
            <Form>
            <Form.Group
            >
                <FloatingLabel
                    className='mb-4'
                    label="Name"
                >
                <Form.Control id='name' name='name' type='text'></Form.Control>
                </FloatingLabel>
                <FloatingLabel
                    className='mb-4'
                    label='Description'
                >
                <Form.Control as='textarea' type='text' id='description' name='description'></Form.Control>
                </FloatingLabel>
                <FloatingLabel
                    className='mb-4'
                    label='Remember in... (days)'
                >
                <Form.Select id='dayWillBuy' name='dayWillBuy'>
                    <option>15</option>
                    <option>30</option>
                    <option>60</option>
                    <option>90</option>
                </Form.Select>
                </FloatingLabel>
                <Button id='form-button' className='mb-4' onClick={addItemsInfoToState} type='submit' value='Add it!'>Add it!</Button>
            </Form.Group>
            </Form>
            </Container>
    )
}