import {React} from 'react'
import ProductComponent from './components/product'
import {
  Img, Body, MyStyleProducts
} from './styled-components/style';
function App() {
  return (
    <Body>
        {/* <MyStyleProducts> */}
            <ProductComponent/>
        {/* </MyStyleProducts> */}
    </Body>
  );
}

export default App;
