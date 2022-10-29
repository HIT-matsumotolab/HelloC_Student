import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../chakra-ui/theme'
import MainPageLayout from '../components/layouts/MainPageLayout'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ChakraProvider theme={theme}>
      <MainPageLayout>
        <Component {...pageProps} />
      </MainPageLayout>
    </ChakraProvider>
  )
}

export default MyApp
