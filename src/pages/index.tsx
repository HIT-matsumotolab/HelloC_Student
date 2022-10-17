import type { NextPage } from 'next'
import styled from 'styled-components'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { mediaQuery } from '../utils/style/mediaQuery'

const Test = styled.div`
  background-color: #000000;
  ${mediaQuery['sp']`
    background-color: aqua;
  `}
`

const Home: NextPage = () => {
  return (
    <div>
      <Button colorScheme="blue">Button</Button>
      <Test>test</Test>
    </div>
  )
}
export default Home
