import React from 'react'
import { Container, Frame, PhotoOfTitle, Data, Title, Description } from './styles.js'
import data from '../../samples/data/sample.json'
const placeholder = '../../samples/assets/logo-gray.png'

const Series = () => {
  // const filteredData = data.entries.filter((element) => element.programType === 'series')
  const filteredData = data.entries.filter((element) => element.programType === 'series').slice(0, 20)
  return (
    <Container>
      {filteredData.map((element) => (
        <Frame key={element.title}>
          <PhotoOfTitle
            data-testid='photoOfTheNew'
            src={element.images['Poster Art'].url || placeholder}
            className='photoOfTheNew'
            alt=''
            onError={handleAddDefaultSrc}
          />
          <Data className='dataContainer'>
            <Title className='titleOfTheNew'>{element.title}</Title>
            <Description className='descriptionOfTheNew' />
          </Data>
        </Frame>
      ))}
    </Container>
  )
}

const handleAddDefaultSrc = (event) => {
  event.target.src = placeholder
}
export default Series
