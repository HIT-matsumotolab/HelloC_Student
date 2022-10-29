import styled from 'styled-components'
import { getLayout } from '../components/layouts/MainPageLayout'

const StyledHome = styled.div`
  height: 100%;
  color: #ffffff;
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
