import { ReactComponent as FBsvg } from '../../samples/assets/social/facebook-white.svg'
import { ReactComponent as IGsvg } from '../../samples/assets/social/instagram-white.svg'
import { ReactComponent as TWsvg } from '../../samples/assets/social/twitter-white.svg'
import { Container } from './styles'

const SocialContainers = () => {
  return (
    <Container>
      <FBsvg width='20' height='20' />
      <IGsvg width='20' height='20' />
      <TWsvg width='20' height='20' />
    </Container>
  )
}

export default SocialContainers
