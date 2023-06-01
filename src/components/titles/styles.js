import styled from '@emotion/styled'
import placeholderImage from '../../samples/assets/placeholder.png'

export const Frame = styled.button`
  width: 25%;
  block-size: 15rem;
  box-sizing: border-box;
  background-image: url(${placeholderImage});
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid grey;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  float: left;
  display: flex; 
  flex-wrap: wrap;
  
  &:hover {
    border: 1px solid white;
    transform: scale(0.98);
  }
  color: white;
`
