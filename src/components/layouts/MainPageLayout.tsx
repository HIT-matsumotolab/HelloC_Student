import { useState } from 'react'
import styled from 'styled-components'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Overlay } from '../Overlay'

const StyledMainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const MainPageHeader = styled.header`
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  gap: 100px;
`

const Navigation = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: left 0.3s ease-out;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  z-index: 10000;
`

const MainPageLayout = ({ children }: { children: JSX.Element }) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  return (
    <StyledMainPageLayout>
      <MainPageHeader>
        <HamburgerIcon w={7} h={7} onClick={() => setIsOpenNavigation(true)} />
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
          <span>ログアウト</span>
        </div>
      </Navigation>
      {isOpenNavigation && (
        <Overlay onClick={() => setIsOpenNavigation(false)} />
      )}
    </StyledMainPageLayout>
  )
}

export default MainPageLayout
