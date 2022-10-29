import type { NextPage } from 'next'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
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
      <div>お知らせ</div>
      <div>
        <div>直近の活動？</div>
        <div>ログ？</div>
      </div>
    </div>
  )
}
export default Home
