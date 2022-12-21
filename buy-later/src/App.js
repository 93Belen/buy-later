import './App.css';
import { FormElement } from './components/Form';
import { AllItems } from './components/AllItems';
import { useDispatch } from "react-redux";
import { getAllBoughtsFromDB, getAllItemsFromDB } from './API/getAllItemsFromDB'; 
import { ThemeProvider, Stack } from 'react-bootstrap';
import { Svg } from './components/svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import { AllBought } from './components/AllBought';
import './styles/nav.css';

function App() {
  let dispatch = useDispatch();
  const addItemsInfoToState = async() => {
    const itemsFromDB = await getAllItemsFromDB();
    dispatch({type: 'items/setState', payload: itemsFromDB})
    const boughtFromDB = await getAllBoughtsFromDB();
    dispatch({type:'bought/setState', payload: boughtFromDB});
}
addItemsInfoToState();
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
    <Stack
    className='app'>
      <Stack
      direction='horizontal'
      className='m-4 nav'>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to='/'>Will Buy</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to="/bought" >Bought</NavLink>
      </Stack>
      <Stack
      direction='horizontal'
      className='flex-column flex-sm-row'
      >
        <FormElement />
        <Routes>
        <Route path='/' element={<AllItems />} />
        <Route path='/bought' element={<AllBought />} />
        </Routes>
      </Stack>
      </Stack>
      <Svg />
    </ThemeProvider>
  )
}

export default App;
