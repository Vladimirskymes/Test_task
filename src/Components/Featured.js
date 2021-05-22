import React from 'react'
import Block from './GradientBlock'
import styled from "styled-components"


const WrapperBlock1 = styled.div `
grid-column: 1/3;
grid-row: 1/3;
padding: 0;
@media (max-width: 280px){
    grid-column: 1/2;
    grid-row: 1/2;
}
`
const WrapperBlock2 = styled.div `
padding: 0;
`
const WrapperBlock3 = styled.div `
margin-top: 37px;
padding: 0;
@media (max-width: 680px){
    margin-top: 0;
}

`
const WrapperBlock4 = styled.div `
display: none;
@media (max-width: 680px){
    display: block;
}
`
const WrapperBlock5 = styled.div `
display: none;
@media (max-width: 680px){
    display: block;
}
`

const FeaturedWrapper = styled.section`
display: grid;
font-size: 18px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
@media (max-width: 680px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
@media (max-width: 280px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
`

function Featured() {
    return (
        <FeaturedWrapper className="featured">
            <WrapperBlock1>
                <Block description={"Huble spiec Galactic Traffic Jam"}> #hubble #galaxy #galacticjam</Block>
            </WrapperBlock1>
            <WrapperBlock2>
                <Block description={"TESS Finds Firts Earth-size Planet in the Habitable Zone"}>#tess #planet</Block>
            </WrapperBlock2>
            <WrapperBlock3>
                <Block description={"Launch of the ESA/NASA Solar Orbiter"}> #esa #nasa #ship #launch #solarorbiter </Block>
            </WrapperBlock3>
            <WrapperBlock4>
                <Block description={"TESS Finds Firts Earth-size Planet in the Habitable Zone"}>#tess #planet</Block>
            </WrapperBlock4>
            <WrapperBlock5>
                <Block description={"Launch of the ESA/NASA Solar Orbiter"}>#esa #nasa #ship #launch #solarorbite</Block>
            </WrapperBlock5>
        </FeaturedWrapper>
    )
}

export default Featured
