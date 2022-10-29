import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Overlay } from '../Overlay'
import { zIndex } from '../../constants/zIndex'
import { backgroundColor } from '../../constants/color'
import { padding } from '../../constants/padding'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const StyledMainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const MainPageHeader = styled.header`
  padding: ${padding.md};
  background-color: ${backgroundColor.white};
  display: flex;
  gap: 100px;
`

const Navigation = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  height: 100vh;
  background-color: ${backgroundColor.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${padding.md};
  transition: left 0.3s ease-out;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  z-index: ${zIndex.navigation};
`

const MainPageLayout = ({ children }: { children: JSX.Element }) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])

  const logoutHandler = () => {
    removeCookie('HelloC')
    router.push('/login')
  }

  useEffect(() => {
    //アクセストークンがセットされていない場合はログイン画面に遷移
    //TODO アクセストークンが不正の場合の対処も作らないといけない
    if (!cookies['HelloC']) router.push('/login')
  }, [])

  return (
    <StyledMainPageLayout>
      <MainPageHeader>
        <HamburgerIcon
          w={25}
          h={25}
          onClick={() => setIsOpenNavigation(true)}
          style={{ cursor: 'pointer' }}
        />
        <div>HelloC for Student</div>
      </MainPageHeader>
      <main>{children}</main>
      <Navigation isOpen={isOpenNavigation}>
        <div>
          <div>ロゴをおく</div>
          <div>ようこそ、〇〇さん</div>
        </div>
        <ul>
          <li>リンクをおく</li>
          <li>リンクをおく</li>
          <li>リンクをおく</li>
          <li>リンクをおく</li>
          <li>リンクをおく</li>
        </ul>
        <div>
          <span>ユーザー情報確認</span>
          <span onClick={logoutHandler} style={{ cursor: 'pointer' }}>
            ログアウト
          </span>
        </div>
      </Navigation>
      {isOpenNavigation && (
        <Overlay onClick={() => setIsOpenNavigation(false)} />
      )}
    </StyledMainPageLayout>
  )
}

export const getLayout = (page: React.ReactElement) => {
  return <MainPageLayout>{page}</MainPageLayout>
}

export default MainPageLayout
