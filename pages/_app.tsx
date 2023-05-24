import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../i18n'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp