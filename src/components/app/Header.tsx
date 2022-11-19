import { HamburgerIcon } from '@chakra-ui/icons'
import styled from 'styled-components'
import { backgroundColor } from '../../constants/color'
import { fontSize } from '../../constants/fontSize'
import { padding } from '../../constants/padding'
import { mediaQuery } from '../../utils/style/mediaQuery'

type HeaderProps = {
  onClickIcon: () => void
}

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

export const Header = ({ onClickIcon }: HeaderProps) => {
  return (
    <MainPageHeader>
      <HamburgerIcon
        w={25}
        h={25}
        onClick={onClickIcon}
        style={{ cursor: 'pointer' }}
      />
      <div>HelloC for Student</div>
    </MainPageHeader>
  )
}
