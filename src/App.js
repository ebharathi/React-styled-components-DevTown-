import {React} from 'react'
import ProductComponent from './components/product'
import Pagination from './components/pagination';
import { Body, MyStyleProducts} from "./styled-components/style";
import Data from './data/products.json'
function App() {

  return (
    <Body>
        <MyStyleProducts>
          {
            Data.slice(0,12).map((single)=>
            <ProductComponent data={single}/>
            )
          }
        </MyStyleProducts>
        <Pagination/>
    </Body>
  );
}

export default App;
