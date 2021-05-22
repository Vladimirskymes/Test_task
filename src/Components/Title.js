import React from 'react'
import styled from "styled-components"

const TitleWrapper = styled.h1`
margin-top: 40px;
margin-bottom: 20px;
margin-left: 50px;
color: #424242;
font-size:32px;
@media (max-width: 680px){
    margin: 0 auto;
    text-align: center;
  }
@media (max-width: 280px){
    &{
        text-align: center;
        font-size: 20px;
    } 
}
`


function Title({children}) {
    return (
        <TitleWrapper>
            {children}
        </TitleWrapper>
    )
}

export default Title
