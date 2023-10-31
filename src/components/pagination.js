import { useEffect, useState } from "react";
import { Pagination_Container,Page ,CurrentPage} from "../styled-components/style";
const Pagination=({page=0,low,high,setLow,setHigh})=>{
    const [list,setList]=useState([]);
    const [currentPageIndex,setCurrentPage]=useState(0);
    const changePage=(current)=>{
        console.log("current-->",current)
        setCurrentPage(current)
        if(current==0)
        {
            setLow(0)
            setHigh(12)
            return;
        }
        setLow(current+10)
        setHigh(current+10+12)
    }
    useEffect(()=>{
        console.log("p---?",page)
        let arr=[]
        for(var i=0;i<page;++i)
              arr.push(i);
        setList(arr)
        console.log("arr--->",arr)
    },[page])
    return (
       <Pagination_Container>
          {
            list.map((s)=>s==currentPageIndex?<CurrentPage onClick={()=>changePage(s)}>{s+1}</CurrentPage>:<Page onClick={()=>changePage(s)}>{s+1}</Page>)
          }
       </Pagination_Container>
    )
}
export default Pagination;