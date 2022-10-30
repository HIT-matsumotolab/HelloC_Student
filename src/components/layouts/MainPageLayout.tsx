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
import { Navigation } from '../app/Navigation'

const StyledMainPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  height: 100vh;
`

const MainPageHeader = styled.header`
  width: 100%;
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

const MainPageLayout = ({ children }: { children: JSX.Element }) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])

  const logoutHandler = () => {
    removeCookie('HelloC')
    router.push('/login')
  }

  const onCloseNavigationHandler = () => {
    setIsOpenNavigation(false)
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
      <Navigation isOpen={isOpenNavigation} onClose={onCloseNavigationHandler}>
        <Navigation.Header />
        <Navigation.LinkContent />
        <Navigation.Footer logoutHandler={logoutHandler} />
      </Navigation>
    </StyledMainPageLayout>
  )
}

export const getLayout = (page: React.ReactElement) => {
  return <MainPageLayout>{page}</MainPageLayout>
}

export default MainPageLayout
