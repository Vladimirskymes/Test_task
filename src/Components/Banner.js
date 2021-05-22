import React from 'react'
import styled from "styled-components";
const BannerWrap = styled.div`
background-color: #e9e9e9;
margin: 10px auto;
text-align: center;
font-size: 26px;
height: 400px;
width: 220px;
@media (max-width: 680px){
    display: none;
}
h2{
    text-align: center;
    opacity: 0.1;
    line-height: 350px;
}

`


function Banner() {
    return (
        <BannerWrap>
            <h2>banner</h2>
        </BannerWrap>
    )
}

export default Banner
