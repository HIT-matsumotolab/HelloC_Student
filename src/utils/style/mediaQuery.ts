import { css, CSSObject } from 'styled-components'
import { mediaQuerySize } from '../../constants/mediaQuerySize'

export const mediaQuery = {
  sp: (
    sp: CSSObject | TemplateStringsArray,
    ...args: (TemplateStringsArray | string)[]
  ) => css`
    @media (max-width: ${mediaQuerySize.sp}) {
      ${css(sp, ...args)};
    }
  `
}
