import { Product,Img, ImgParent, MyStyleProducts,TitleParent,Title ,Desc,Paragraph,Footer,Price,Category,CategoryImage} from "../styled-components/style";
const ProductComponent=({data})=>{
    return (
        <Product>
            <ImgParent className="child">
              <Img className="box" src={data?.image} />
            </ImgParent>
            <TitleParent>
                <Title>
                    {data?.title}
                </Title>
                <Desc>
                    <Paragraph>
                        {data?.description}
                    </Paragraph>
                </Desc>
            </TitleParent>
            <Footer>
                <Price>₹ {data?.price}</Price>
                <Category>
                    <CategoryImage src={data?.category}/>
                </Category>
            </Footer>
        </Product>
    )
}
export default ProductComponent;