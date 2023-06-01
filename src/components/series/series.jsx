import data from '../../samples/data/sample.json'
import { Frame, PhotoOfTitle, Data, Title, Description } from './styles.js'
import { useState } from 'react'

const Series = () => {
  const [cardsToShowState, setCardsToShowState] = useState(20)

  const filterByState = () => {
    return data.entries.slice(0, cardsToShowState)
  }
  return (
    filterByState().map((element, index) => {
      if (element.programType === 'series') {
        return (
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
        )
      } else return (<></>)
    })
  )
}

export default Series
