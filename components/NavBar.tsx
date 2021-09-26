import { useUser } from '../utils/auth'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { useEffect } from 'react'

export default function NavBar() {
    const { mutate } = useSWRConfig()
    const { user, error, loggedOut } = useUser()
    const router = useRouter()
    const isLoading = !user && !error

    useEffect(() => {
        if (loggedOut) {
            router.replace('/')
        }
    }, [loggedOut])

    function logOut() {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, { withCredentials: true })
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`)
        router.push('/')
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 border-b">
            <div className="flex items-center mr-6">
                <span className="font-semibold text-xl tracking-tight">Tutor Angkatan</span>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/course/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600 mr-4">
                            Course List
                        </a>
                    </Link>
                    <Link href="/course/mine">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600 mr-4">
                            My Courses
                        </a>
                    </Link>
                </div>
                <div>
                    {isLoading ? (
                        <></>
                    ) : (
                        <button
                            className="rounded-lg border border-blue-600 py-1 px-3 hover:bg-blue-600 hover:text-white"
                            onClick={logOut}
                        >
                            Log out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
