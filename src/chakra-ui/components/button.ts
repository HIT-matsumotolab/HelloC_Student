import { StyleFunctionProps } from '@chakra-ui/styled-system'
import { ComponentStyleConfig } from '@chakra-ui/theme'

export const buttonCustomStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px'
    }
  },
  // 3. We can add a new visual variant
  variants: {
    //colorMode変更などによるvariantのオーバーライド定義
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500'
    }),
    // レスポンシブ定義
    sm: {
      fontSize: 'md'
    }
  },
  defaultProps: {}
}
