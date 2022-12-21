import { Card, Stack } from "react-bootstrap";
import { DeleteButton } from "./DeleteButton";
import '../styles/item.css';
import { GetItButton } from "./getItButton";

export const Item = (props) => {
    let item = props.item;

    // Compare day that user want to be reminded of the item
    // With current day
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    //console.log("today", formattedToday, "to be reminded", item.dayToBeReminded)
    // If is the day to be reminded:
    if(item.dayToBeReminded === formattedToday){
       return ( <Card
            id='item'
            className='p-3 m-4'
        >
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Stack
                direction='horizontal'
                gap={3}
                >
                <GetItButton disabled={false} description={item.description} name={item.name} id={item.id} />
                <DeleteButton id={item.id} />
                </Stack>
        </Card>
       )
    }
    else {
        return (
            <Card
            // Id active for styling process, once done -> Go back to inactive
            id='item'
            // Make disabled true
            //id='itemDesactive'
            className='p-3 m-4'
            >
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Stack
                gap={3}
                direction='horizontal'
                >
                <GetItButton disabled={false} description={item.description} name={item.name} id={item.id} />
                <DeleteButton id={item.id} />
                </Stack>
            </Card>
            )
    }

}