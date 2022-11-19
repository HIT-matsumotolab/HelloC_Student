import styled from 'styled-components'
import { ApplicationHeader } from '../components/app/ApplicationHeader'
import { getLayout } from '../components/layouts/MainPageLayout'
import { color } from '../constants/color'

const StyledHome = styled.div`
  height: 100%;
  color: ${color.white};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

const HomeBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Home = () => {
  return (
    <StyledHome>
      <ApplicationHeader pageTitle="メインページ" />
      <div style={{ backgroundColor: '#ff00ff40' }}>お知らせ</div>
      <HomeBottom>
        <div style={{ backgroundColor: '#ff000040' }}>直近の活動？</div>
        <div style={{ backgroundColor: '#00ffff40' }}>ログ？</div>
      </HomeBottom>
    </StyledHome>
  )
}

Home.getLayout = getLayout
export default Home
