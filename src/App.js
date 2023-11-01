import {React,useState, useEffect} from 'react'
import ProductComponent from './components/product'
import Pagination from './components/pagination';
import { Body, MyStyleProducts,Filter,InputText} from "./styled-components/style";
import Data from './data/products.json'
function App() {
   const [pages,setPages]=useState(0);
   const [low,setLow]=useState(0);
   const [high,setHigh]=useState(12);
   const [search,setSearch]=useState("");
   const [list,setList]=useState(Data);
   useEffect(()=>{
      setPages((list.length/12).toFixed(0));
   },[list])
   const filterItems=()=>{
          let arr=[];
          Data.map((s)=>{
            if(s.title.toLowerCase().includes(search))
              arr.push(s);
          })
          setList(arr);
   }
   useEffect(()=>{
      if(search!="")
         filterItems();   
      else
        setList(Data) 
   },[search])
  return (
    <Body>
        <Filter>
          <InputText placeholder='Filter here..' onChange={(e)=>setSearch(e.target.value)}/>
        </Filter>
        <MyStyleProducts>
          {
            list.slice(low,high).map((single)=>
            <ProductComponent data={single}/>
            )
          }
        </MyStyleProducts>
        <Pagination page={pages} low={low} high={high} setLow={setLow} setHigh={setHigh}/>
    </Body>
  );
}

export default App;
