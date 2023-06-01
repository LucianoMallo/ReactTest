import styled from '@emotion/styled'

export const Frame = styled.button`
width: 100%;
box-sizing: border-box;
background: black;
border: 1px solid grey;
box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
backdrop-filter: blur(6px);
text-align: center;
cursor: pointer;
transition: all 0.5s;
align-items: center;
justify-content: center;
user-select: none;
font-weight: bolder;
float:left;
min-height:269px;
min-width:165px;
display: flex; 
flex-wrap:wrap;
:hover{
    border: 1px solid white;
    transform: scale(0.98);
}
color: white;
`
