import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '../utils/fetchers'
import { useSWRConfig } from 'swr'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function Forbidden() {
    const { user, loggedOut, mutate } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (loggedOut) {
            router.replace('/')
        }
        if (user && user.npm.toString().startsWith('21')) {
            router.replace('/course')
        }
    }, [user, loggedOut])

    async function logOut() {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, { withCredentials: true })
        mutate()
        router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <FontAwesomeIcon icon={faTimes} size="6x" />

                <p className="mt-2">Sorry, this service is only available to 2021 students.</p>
                <button className="my-4 rounded-xl bg-blue-600 p-3 text-white" onClick={logOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
                    Log out
                </button>
            </main>
        </div>
    )
}
