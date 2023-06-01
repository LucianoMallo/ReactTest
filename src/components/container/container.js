import { Frame } from './styles.js'
import { Titles } from '../titles/titles.js'

const TitlesContainer = () => {
  return (

    <Frame className='TitlesContainer' data-testid='TitlesContainer'>
      <Titles name='SERIES' />
      <Titles name='MOVIE' />
    </Frame>
  )
}

export default TitlesContainer
