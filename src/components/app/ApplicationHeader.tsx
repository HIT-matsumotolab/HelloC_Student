import Head from 'next/head'

export const ApplicationHeader = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
