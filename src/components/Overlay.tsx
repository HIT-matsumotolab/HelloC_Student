import styled from 'styled-components'
import { backgroundColor } from '../constants/color'
import { zIndex } from '../constants/zIndex'

export const Overlay = styled.div<{ onClick: () => void }>`
  background-color: ${backgroundColor.overlay};
  position: fixed;
  width: 150%;
  height: 150%;
  inset: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  z-index: ${zIndex.overlay};
`
