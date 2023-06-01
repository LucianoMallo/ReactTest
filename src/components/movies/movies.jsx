import React from 'react'
import { Container, Frame, PhotoOfTitle, Data, Title, Description } from './styles.js'
import data from '../../samples/data/sample.json'

const Movies = () => {
  const filteredData = data.entries.filter((element) => element.programType === 'movie')

  return (
    <Container>
      {filteredData.map((element) => (
        <Frame key={element.title}>
          <PhotoOfTitle
            data-testid='photoOfTheNew'
            src={element.images['Poster Art'].url}
            className='photoOfTheNew'
            alt=''
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

export default Movies
