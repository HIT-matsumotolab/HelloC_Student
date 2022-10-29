import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Overlay } from '../Overlay'
import { zIndex } from '../../constants/zIndex'
import { backgroundColor } from '../../constants/color'
import { padding } from '../../constants/padding'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { fontSize } from '../../constants/fontSize'
import Link from 'next/link'
import { mediaQuery } from '../../utils/style/mediaQuery'
import Image from 'next/image'

const StyledMainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100%;
`

const MainPageHeader = styled.header`
  padding: ${padding.md};
  background-color: ${backgroundColor.white};
  display: flex;
  align-items: center;
  gap: 100px;
  font-weight: bold;
  font-size: ${fontSize.heading1};

  ${mediaQuery['sp']`
  font-size: ${fontSize.heading3};
  `}
`

//TODO Navigationのコード量が多いのでコンポーネントとして分離した方が良さそうだ

const Navigation = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  height: 100vh;
  overflow-y: scroll;
  background-color: ${backgroundColor.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 40px;
  padding: ${padding.lg} 0;
  transition: left 0.3s ease-out;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  z-index: ${zIndex.navigation};
`

const NavigationHeader = styled.div`
  padding: 0 ${padding.md};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const NavigationLinkTabList = styled.ul`
  list-style: none;
`

const NavigationLinkTab = styled.li`
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66666650;
  }
`

const NavigationFooter = styled.ul`
  display: flex;
  flex-direction: column;
`

const NavigationFooterTab = styled.li`
  text-align: center;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #66666650;
  }
`

const BlockLink = styled.a`
  display: block;
  padding: ${padding.sm} 0;
  cursor: pointer;
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
        <NavigationHeader>
          <Image alt="Logo" src="/logo.svg" width="50" height="50" />
          <div>ようこそ、〇〇さん</div>
        </NavigationHeader>
        <NavigationLinkTabList>
          <NavigationLinkTab>
            <Link href="/">
              <BlockLink>メインページ</BlockLink>
            </Link>
          </NavigationLinkTab>
          <NavigationLinkTab>
            <Link href="#">
              <BlockLink>クラスの管理</BlockLink>
            </Link>
          </NavigationLinkTab>
          <NavigationLinkTab>
            <Link href="#">
              <BlockLink>問題集の管理</BlockLink>
            </Link>
          </NavigationLinkTab>
          <NavigationLinkTab>
            <Link href="#">
              <BlockLink>進捗の管理</BlockLink>
            </Link>
          </NavigationLinkTab>
          <NavigationLinkTab>
            <Link href="#">
              <BlockLink>学習ログの管理</BlockLink>
            </Link>
          </NavigationLinkTab>
        </NavigationLinkTabList>
        <NavigationFooter>
          <NavigationFooterTab>
            <Link href="#">
              <BlockLink>ユーザー情報確認</BlockLink>
            </Link>
          </NavigationFooterTab>
          <NavigationFooterTab onClick={logoutHandler}>
            <BlockLink>ログアウト</BlockLink>
          </NavigationFooterTab>
        </NavigationFooter>
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
