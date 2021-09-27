import axios from 'axios'
import useSWR from 'swr'
import { DetailedCourse, User } from './types'
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
    const { data, error } = useRequest<DetailedCourse>({ url: `/course/${courseId}/detail` })
    const notFound = error && error.response && (error.response.status === 404 || error.response.status === 422)

    return {
        course: data,
        error: error,
        notFound: notFound,
        isLoading: !error && !data,
    }
}

export { useUser, useCourse }
