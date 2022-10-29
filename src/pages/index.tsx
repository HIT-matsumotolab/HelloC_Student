import { getLayout } from '../components/layouts/MainPageLayout'

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
