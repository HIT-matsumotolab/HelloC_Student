// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { buttonCustomStyle } from './components/button'

const theme = extendTheme({
  components: {
    Button: buttonCustomStyle
  }
})

export default theme
