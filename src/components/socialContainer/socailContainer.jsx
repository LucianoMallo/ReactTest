import { ReactComponent as FBsvg } from '../../samples/assets/social/facebook-white.svg'
import { ReactComponent as IGsvg } from '../../samples/assets/social/instagram-white.svg'
import { ReactComponent as TWsvg } from '../../samples/assets/social/twitter-white.svg'
import { Container } from './styles'

const iconWidth = '50%'
const iconHeight = '30px'

const SocialContainers = () => {
  return (
    <Container>
      <FBsvg width={iconWidth} height={iconHeight} />
      <IGsvg width={iconWidth} height={iconHeight} />
      <TWsvg width={iconWidth} height={iconHeight} />
    </Container>
  )
}

export default SocialContainers
