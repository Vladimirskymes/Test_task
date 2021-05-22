import React, {useEffect} from "react"
import Featured from "./Components/Featured"
import Last from "./Components/Last"
import styled from "styled-components"
import Title from "./Components/Title"
import RightIcon from "./Assets/right_icon.svg"
import LeftIcon from "./Assets/left_icon.svg"
const AppWrapper = styled.div`
width: 960px;
margin: 0 auto;
position: relative;
background-color: white;
@media (max-width: 680px){
  &{
    width: 680px;
  }
}
@media (max-width: 280px){
  &{
    width: 280px;
  }
}
.right_icon{
  position: absolute;
  top: 300px;
  right: 10px;
  &:hover{
    background-color: #e9e9e9;
  }
  @media (max-width: 680px){
    display: none;
  }
}
.left_icon{
  position: absolute;
  top: 300px;
  left: 10px;
  &:hover{
    background-color: #e9e9e9;
  }
  @media (max-width: 680px){
    display: none;
  }
}
`;

function App() {
  useEffect(() => {
    let countElems = Array.from(document.getElementsByTagName("*")).map(i => i.tagName);
    let setElems = Array.from(new Set(countElems.sort((a ,b) => {
      return a.length - b.length
    })))
    let countTags = Object.assign(...Array.from(setElems, v => ({[v]:0})));
    countElems.forEach(elem => {
      countTags[elem]++
    })
    console.log(`1. Количество элементов на странице ${document.getElementsByTagName('*').length}`);
    console.log("2. Количество элементов для каждого тега \n", countTags);
    console.log("3. Сгруппированные элементы по количеству символов в названии", setElems, `\n количество уникальных элементов ${setElems.length}` )

  }, [])


  return (
      <AppWrapper>
        <Title>FEATURED IMAGES</Title>   
        <div className="right_icon">
        <img width={38} src={RightIcon} alt="right icon"></img>  
        </div>
        <div className="left_icon">
        <img width={38} src={LeftIcon} alt="left icon"></img>  
        </div>
        <Featured/>
        <Title>LAST IMAGES</Title>  
        <Last/>
      </AppWrapper>

  );
}

export default App;
