import { Frame } from './styles'

export function Titles ({ name, onClick }) {
  return <Frame onClick={onClick}>{name}</Frame>
}
