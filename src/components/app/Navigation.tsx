import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../../constants/color'
import { padding } from '../../constants/padding'
import { zIndex } from '../../constants/zIndex'
import { Overlay } from '../Overlay'

type NavigationProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

type NavigationFooterProps = {
  logoutHandler: () => void
}

const BlockLink = styled.a`
  display: block;
  padding: ${padding.sm} 0;
  cursor: pointer;
`

const StyledNavigation = styled.nav<{ isOpen: boolean }>`
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

const NavigationRoot = ({ children, isOpen, onClose }: NavigationProps) => {
  return (
    <>
      <StyledNavigation isOpen={isOpen}>{children}</StyledNavigation>
      {isOpen && <Overlay onClick={onClose} />}
    </>
  )
}

const NavigationHeader = styled.div`
  padding: 0 ${padding.md};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const Header = () => {
  return (
    <NavigationHeader>
      <Image alt="Logo" src="/logo.svg" width="50" height="50" />
      <div>ようこそ、〇〇さん</div>
    </NavigationHeader>
  )
}

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

const LinkContent = () => {
  return (
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
  )
}

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

const Footer = ({ logoutHandler }: NavigationFooterProps) => {
  return (
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
  )
}

export const Navigation = Object.assign(NavigationRoot, {
  Header,
  LinkContent,
  Footer
})
