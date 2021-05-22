import React, {useState} from 'react'
import styled from 'styled-components'
import noimage from "../Assets/noimage.png"
import Star from "../Assets/Star.svg"
import BlackStar from "../Assets/BlackStar.svg"

const BlockWrapper = styled.div`

padding: 0;
position:  relative;
margin: 10px 50px;
.favorite{
    position: absolute;
    top: 8px;
    left: 5px;
    cursor: pointer;
    @media (max-width: 680px){
        display: none;
    }
}
.info{
    position: absolute;
    color: black; 
    width: 100%;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0;
.title_text{
    font-size: 14px;
}
.tags_text{
    font-size: 12px;
    opacity: 0.66;
}
}
@media (max-width: 280px){
    &{
         margin: 10px 30px;
         .main_image{
             margin-top: 45px;
         }
         .info{
            p{
            
                line-height: 1.2;
            }
            .title_text{
                font-size: 10px;
              
            }
            .tags_text{
                font-size: 8px;
                opacity: 0.66;
            }
        }
    }
}

`
function SimpleBlock(props) {
    const [favorite, setFavorite] = useState(false);
    return (
        <BlockWrapper> 
            {props.Favorite && <img onClick={() => setFavorite(!favorite)}  width={30} className="favorite" src={favorite ? Star : BlackStar} alt="favorite"/>}
            <img className = "main_image" src={noimage} alt="emptyImg" width="100%"/>
            <div className="info">
            <p className="title_text">{props.description}</p>
            <p className="tags_text">{props.children}</p>    
            </div>
               
        </BlockWrapper>
    )
}

export default SimpleBlock
