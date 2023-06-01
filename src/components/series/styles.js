import styled from '@emotion/styled'

export const Frame = styled.div`
height: fit-content;
box-sizing: border-box;
background: rgba(217, 217, 217, 0.58);
border: 1px solid white;
box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
backdrop-filter: blur(6px);
text-align: center;
cursor: pointer;
transition: all 0.5s;
display: flex;
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
    border: 1px solid black;
    transform: scale(0.98);
}
`
export const PhotoOfTitle = styled.img`
display: block; 
width:50%;
min-width:130px;
`
export const Data = styled.div`
display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`
export const Title = styled.p`
text-align: justify;
`
export const Description = styled.p`
line-break: auto;
text-align: justify;
position: relative;
`
