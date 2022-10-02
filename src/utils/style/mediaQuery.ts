import { css, CSSObject } from 'styled-components'

export const mediaQuery = {
  sp: (
    sp: CSSObject | TemplateStringsArray,
    ...args: TemplateStringsArray[]
  ) => css`
    @media (max-width: 700px) {
      ${css(sp, ...args)};
    }
  `
}
