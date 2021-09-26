import axios from 'axios'
import useSWR from 'swr'
import { User } from './types'
import useRequest from './swr'

function useUser() {
    const { data, error } = useRequest<User>({ url: `${process.env.NEXT_PUBLIC_API_URL}/me` })
    const loggedOut = error && error.response && error.response.status === 401

    return {
        user: data,
        error: error,
        loggedOut: loggedOut,
        isLoading: !error && !data,
    }
}

export { useUser }
