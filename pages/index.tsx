import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '../utils/fetchers'
import { useSWRConfig } from 'swr'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const { user, loggedOut, mutate } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (user && !loggedOut) {
            router.push('/course')
        }
    }, [user, loggedOut])

    function ssoLogin() {
        let openedWindow = window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            'loginWindow',
            'height=500,width=500'
        )
        window.addEventListener('message', (event) => {
            openedWindow.close()
            mutate()
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    <a className="text-red-600">Tutor</a>
                    <a className="text-blue-600"> Angkatan </a>
                </h1>

                <button className="my-8 rounded-xl bg-blue-600 p-4 text-white" onClick={ssoLogin}>
                    <FontAwesomeIcon icon={faSignInAlt} className="mx-2" />
                    Log in dengan SSO
                </button>
            </main>
        </div>
    )
}
