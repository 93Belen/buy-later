import { selectBought } from "../Redux/Store&Selectors/selectors";
import { useSelector } from "react-redux";
import { Container, Navbar, Stack } from "react-bootstrap";
import '../styles/allItems.css';
import { Bought } from "./Bought";
import { NavLink } from "react-router-dom";
import '../styles/nav.css';

export const AllBought = () => {
    let items = useSelector(selectBought);
    let itemsElementsArr = [];

    for(const item of items){
        itemsElementsArr.unshift(<Bought item={item} />)
    }


    //console.log(store.getState())
        return (
            <Container id='allItems'>
            <Stack
            direction='vertical'
            className='m-4'
            >
               <h2>Last items that you bought</h2>
               {itemsElementsArr}
            </Stack>
            </Container>
        )

}