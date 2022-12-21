import { Item } from "./Item";
import { selectItems } from "../Redux/Store&Selectors/selectors";
import { useSelector } from "react-redux";
import { Container, Stack } from "react-bootstrap";
import '../styles/allItems.css';
import { NavLink } from "react-router-dom";
import '../styles/nav.css';

export const AllItems = () => {
    let items = useSelector(selectItems);
    let itemsElementsArr = [];

    for(const item of items){
        itemsElementsArr.unshift(<Item item={item} />)
    }


    //console.log(store.getState())
        return (
            <Container id='allItems'>
            <Stack
            direction='vertical'
            className='m-5'
            >
               {itemsElementsArr}
            </Stack>
            </Container>
        )

}