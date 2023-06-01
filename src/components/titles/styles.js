import styled from '@emotion/styled'
import placeholderImage from '../../samples/assets/placeholder.png'

export const Frame = styled.button`
  width: 15%;
  height: 0;
  block-size: 15rem;
  box-sizing: border-box;
  background-image: url(${placeholderImage});
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  float: left;
  &:hover {
    border: 2px solid white;
    transform: scale(0.90);
  }
  color: white;
`
