import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import Router from 'next/router'

import NProgress from 'nprogress'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start())
        Router.events.on('routeChangeComplete', () => NProgress.done())
        Router.events.on('routeChangeError', () => NProgress.done())
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
