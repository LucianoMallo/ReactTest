import { ReactComponent as APsvg } from '../../samples/assets/store/app-store.svg'
import { ReactComponent as WIsvg } from '../../samples/assets/store/windows-store.svg'
import { ReactComponent as PSsvg } from '../../samples/assets/store/play-store.svg'
import { Container } from './styles'

const StoresContainers = () => {
  return (
    <Container style={{ position: 'fixed', botton: 0, right: 0 }}>
      <APsvg width='50' height='50' />
      <WIsvg width='50' height='50' />
      <PSsvg width='50' height='50' />
    </Container>
  )
}

export default StoresContainers
