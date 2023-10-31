import styled from 'styled-components';


// Define a styled component for 'body'
const Body = styled.body`
font-family: 'Muli', sans-serif;
background:#ddd;
padding:50px 20px;  
`;

// Define a styled component for '.mystyle-products'
const MyStyleProducts = styled.div`
  margin:0px 80px;
  display:grid;
  grid-template-columns:16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;

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
position: relative;
transition: transform 2s;

&:hover {
  top: -50px;
  .box{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
}
`
const Img=styled.img`
  width:100%;
  border-radius:50px;
  transition: all 0.5s ease-in-out;
  cursor:pointer;
  
`
const TitleParent=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-bottom:1px solid #d9d7d2;
  `
const Title=styled.div`
        position:relative;
        top:-15px;
        padding: 12px 30px;
        border: 1px solid #313131;
        background:#212121;
        color:#fff;
        width:50px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        border-radius:27px;
        transition: all 0.05s ease-in-out;
        
`
const Desc=styled.div`
  text-align:center;
`
const Paragraph=styled.p`
   font-size:12px;
`
const Footer=styled.div`
  padding:30px 5px 0px 5px;
  display:flex;
  flex-direction:row;
`
const Price=styled.div`
flex:2;
  font-size:16px;
  font-weight:200;
  padding:12px;
`
const Category=styled.div`
  flex:1;
  text-align:center;
`
const CategoryImage=styled.img`
   width:40px;
   height:40px;
`
export { Img, Body, MyStyleProducts,Product,ImgParent,TitleParent,Title,Desc,Paragraph,Footer,Price,Category,CategoryImage};
