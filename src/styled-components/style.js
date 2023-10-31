import styled from 'styled-components';


// Define a styled component for 'body'
const Body = styled.body`
font-family: 'Muli', sans-serif;
background:#ddd;
`;

// Define a styled component for '.mystyle-products'
const MyStyleProducts = styled.div`
  margin:0px 80px;
  display:grid;
  grid-template-columns:20% 20% 20% 20% 20%;

`;
const Product=styled.div`
background:#fff;
padding:15px;
border-radius:6px;
max-width:300px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
position:relative;
margin:20px 5px;
`
const ImgParent=styled.div`

`
const Img=styled.img`
  width:100%;
  border-radius:50px;
  cursor:pointer;
`

export { Img, Body, MyStyleProducts,Product,ImgParent};
