import axios from 'axios'
import useSWR from 'swr'
import { Course, User } from './types'
import useRequest from './swr'

function useUser() {
    const { data, error } = useRequest<User>({ url: '/me' })
    const loggedOut = error && error.response && error.response.status === 401

    return {
        user: data,
        error: error,
        loggedOut: loggedOut,
        isLoading: !error && !data,
    }
}

function useCourse(courseId: string) {
    const { data, error } = useRequest<Course>({ url: `/course/${courseId}/detail` })
    return {
        course: data,
        error: error,
        isLoading: !error && !data,
    }
}

export { useUser, useCourse }
