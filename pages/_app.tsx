import 'tailwindcss/tailwind.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'nprogress/nprogress.css'

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'

import NProgress from 'nprogress'
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start())
        Router.events.on('routeChangeComplete', () => NProgress.done())
        Router.events.on('routeChangeError', () => NProgress.done())
    }, [])

    return (
        <div>
            <Toaster />
            {router.asPath != '/' && <NavBar />}
            <div className="container py-8 px-8 sm:px-16 md:px-32 ">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
