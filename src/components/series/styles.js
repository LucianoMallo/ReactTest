import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const Frame = styled.button`
  width: 15%;
  height: fit-content;
  block-size: 15rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bolder;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid grey;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: all 0.5s;
  float: left;
  color: black;

  &:hover {
    border: 1px solid white;
    transform: scale(0.98);
  }
`

export const PhotoOfTitle = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`

export const Data = styled.div`
  text-align: center;
`

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
`
