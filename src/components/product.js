import { Product,Img, ImgParent, MyStyleProducts,TitleParent,Title ,Desc,Paragraph,Footer,Price,Category,CategoryImage} from "../styled-components/style";
const ProductComponent=()=>{
    return (
        <MyStyleProducts>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"  />
            </ImgParent>
            <TitleParent>
                <Title>
                    Drama
                </Title>
                <Desc>
                    <Paragraph>
                    Description Product tell me how to change playlist height size like 600px in html5 player. player good
                    </Paragraph>
                </Desc>
            </TitleParent>
            <Footer>
                <Price>₹ 500.00</Price>
                <Category>
                    <CategoryImage src="https://img.icons8.com/flat-round/64/modelled-dress.png"/>
                </Category>
            </Footer>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg"  />
            </ImgParent>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"  />
            </ImgParent>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"  />
            </ImgParent>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"  />
            </ImgParent>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"  />
            </ImgParent>
        </Product>
        <Product>
            <ImgParent className="child">
              <Img className="box" src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"  />
            </ImgParent>
        </Product>
       
        </MyStyleProducts>
    )
}
export default ProductComponent;