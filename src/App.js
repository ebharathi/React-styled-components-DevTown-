import {React} from 'react'
import ProductComponent from './components/product'
import { Body, MyStyleProducts} from "./styled-components/style";
import Data from './data/products.json'
function App() {
  return (
    <Body>
        <MyStyleProducts>
          {
            Data.map((single)=>
            <ProductComponent data={single}/>
            )
          }
        </MyStyleProducts>
    </Body>
  );
}

export default App;
