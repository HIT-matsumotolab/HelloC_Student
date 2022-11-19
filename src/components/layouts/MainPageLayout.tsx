import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { Navigation } from '../app/Navigation'
import { Header } from '../app/Header'

const StyledMainPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  height: 100vh;
`

const MainPageLayout = ({ children }: { children: JSX.Element }) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])

  const logoutHandler = () => {
    removeCookie('HelloC')
    router.push('/login')
  }

  const onOpenNavigationHandler = () => {
    setIsOpenNavigation(true)
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
      <Header onClickIcon={onOpenNavigationHandler} />
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
