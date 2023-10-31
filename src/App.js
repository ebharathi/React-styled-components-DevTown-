import {React,useState, useEffect} from 'react'
import ProductComponent from './components/product'
import Pagination from './components/pagination';
import { Body, MyStyleProducts} from "./styled-components/style";
import Data from './data/products.json'
function App() {
   const [pages,setPages]=useState(0);
   const [low,setLow]=useState(0);
   const [high,setHigh]=useState(12)
   useEffect(()=>{
      setPages((Data.length/12).toFixed(0));
   },[])
  return (
    <Body>
        <MyStyleProducts>
          {
            Data.slice(low,high).map((single)=>
            <ProductComponent data={single}/>
            )
          }
        </MyStyleProducts>
        <Pagination page={pages} low={low} high={high} setLow={setLow} setHigh={setHigh}/>
    </Body>
  );
}

export default App;
