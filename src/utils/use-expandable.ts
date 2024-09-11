import { useSpring } from '@react-spring/web'

export function useExpandable(isOpen: boolean) {
  const props = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : '0px',
    overflow: 'hidden',
    config: { tension: 300, friction: 20 },
  })

  return props
}
