import type { NextPage } from 'next'
import { ReactElement } from 'react'
import styled from 'styled-components'
import MainPageLayout, { getLayout } from '../components/layouts/MainPageLayout'
import { mediaQuery } from '../utils/style/mediaQuery'

const Test = styled.div`
  background-color: #000000;
  ${mediaQuery['sp']`
    background-color: aqua;
  `}
`

const Home = () => {
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

Home.getLayout = getLayout
export default Home
