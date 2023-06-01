import { ReactComponent as APsvg } from '../../samples/assets/store/app-store.svg'
import { ReactComponent as WIsvg } from '../../samples/assets/store/windows-store.svg'
import { ReactComponent as PSsvg } from '../../samples/assets/store/play-store.svg'
import { Container } from './styles'

const iconWidth = '35%'
const iconHeight = '35px'

const StoresContainers = () => {
  return (
    <Container>
      <APsvg width={iconWidth} height={iconHeight} />
      <WIsvg width={iconWidth} height={iconHeight} />
      <PSsvg width={iconWidth} height={iconHeight} />
    </Container>
  )
}

export default StoresContainers
