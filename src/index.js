import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from "styled-components"
import "./index.css"

const IndexWrap = styled.div`
background-color: #e9e9e9;
margin: 0px;
padding: 0px;
`


ReactDOM.render(
  <IndexWrap>
    <App />
  </IndexWrap>,
  document.getElementById('root')
);
