import { useState } from 'react'
import { Frame, ComponentContainer } from './styles.js'
import { Titles } from '../titles/titles.js'
import Series from '../series/series.jsx'
import Movies from '../movies/movies.jsx'

const TitlesContainer = () => {
  const [activeComponent, setActiveComponent] = useState(null)

  const handleClick = (componentName) => {
    setActiveComponent(componentName)
  }

  const componentMap = {
    series: Series,
    movies: Movies
    // Add more components here
  }

  const ActiveComponent = activeComponent ? componentMap[activeComponent] : null

  return (
    <Frame>
      {!ActiveComponent && (
        <>
          <Titles name='series' onClick={() => handleClick('series')} />
          <Titles name='movies' onClick={() => handleClick('movies')} />
          {/* Add more Titles here */}
        </>
      )}
      <ComponentContainer>
        {ActiveComponent && <ActiveComponent />}
      </ComponentContainer>
    </Frame>
  )
}

export default TitlesContainer
