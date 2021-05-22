import React from 'react'
import styled from "styled-components"
import SimpleBlock from "./SimpleBlock"
import Banner from "./Banner"

const LastWrapper = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
@media (max-width: 680px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 280px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
`

function Last() {
    return (
        <LastWrapper >
            <SimpleBlock description={"Huble spiec Galactic Traffic Jam"}>#hubble #galaxy #galacticjam</SimpleBlock>
            <SimpleBlock Favorite description={"TESS Finds Firts Earth-size Planet in the Habitable Zone"}>#tess #planet</SimpleBlock>
            <Banner></Banner>
        </LastWrapper>
    )
}

export default Last
