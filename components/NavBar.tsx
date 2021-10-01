import { useUser } from '../utils/fetchers'
import Link from 'next/link'
import axios from 'axios'
import { NextRouter, useRouter } from 'next/router'
import { KeyedMutator, useSWRConfig } from 'swr'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LINKS = [
    {
        href: '/course',
        text: 'Course List',
    },
    {
        href: '/course/enrolled',
        text: 'Enrolled Courses',
    },
    {
        href: '/course/mine',
        text: 'My Courses',
    },
]

function MobileNav({ isLoading, logout }: { isLoading: boolean; logout: () => {} }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center px-3 py-2 border rounded">
                    <FontAwesomeIcon icon={faChevronDown} />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ width: '90vw' }}
                >
                    <div className="px-1 py-1 ">
                        {LINKS.map((v, i) => {
                            return (
                                <Link key={`nav-${i}`} href={v.href}>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-blue-600 text-white' : ''
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                {v.text}
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Link>
                            )
                        })}
                        {!isLoading && (
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={logout}
                                        className={`${
                                            active ? 'bg-blue-600 text-white' : ''
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Log Out
                                    </button>
                                )}
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default function NavBar() {
    const { user, error, loggedOut, mutate } = useUser()
    const router = useRouter()
    const isLoading = !user && !error

    useEffect(() => {
        if (loggedOut) {
            router.replace('/')
        }
    }, [loggedOut])

    async function logOut() {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, { withCredentials: true })
        mutate()
        router.push('/')
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 border-b">
            <div className="flex items-center mr-6">
                <span className="font-semibold text-xl tracking-tight">Tutor Angkatan</span>
            </div>

            <div className="block lg:hidden">
                <MobileNav isLoading={isLoading} logout={logOut} />
            </div>

            <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    {LINKS.map((v, i) => {
                        return (
                            <Link key={`navdesktop-${i}`} href={v.href}>
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600 mr-4">
                                    {v.text}
                                </a>
                            </Link>
                        )
                    })}
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
