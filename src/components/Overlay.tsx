import styled from 'styled-components'

export const Overlay = styled.div<{ onClick: () => void }>`
  background-color: #333333;
  position: fixed;
  width: 150%;
  height: 150%;
  inset: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  z-index: 1000;
`
