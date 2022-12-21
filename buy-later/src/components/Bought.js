import { Card, Stack } from "react-bootstrap";
import '../styles/item.css';
import { AddToList } from "./addToList";
import { DeleteFromBought } from "./DeleteFromBought";

export const Bought = (props) => {
    let item = props.item;

    return (
        <Card
        id='item'
        className='p-3 m-5'
        >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Stack
            gap={3}
            direction='horizontal'>
            <AddToList name={item.name} description={item.description} />
            <DeleteFromBought id={item.id} />
            </Stack>
        </Card>
        )
}