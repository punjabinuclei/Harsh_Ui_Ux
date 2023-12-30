import '@/styles/globals.css'
import "../components/Sidebar/Sidebar.css";
import "../components/WorksPage/Carousal/Carousal.css"
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={interFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
