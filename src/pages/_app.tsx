import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../chakra-ui/theme'
import MainPageLayout from '../components/layouts/MainPageLayout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainPageLayout>
        <Component {...pageProps} />
      </MainPageLayout>
    </ChakraProvider>
  )
}

export default MyApp
