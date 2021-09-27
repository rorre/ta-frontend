import axios from 'axios'
import useSWR from 'swr'
import { DetailedCourse, User } from './types'
import useRequest from './swr'

function useUser() {
    const { data, error, mutate } = useRequest<User>({ url: '/me' })
    const loggedOut = error && error.response && error.response.status === 401

    return {
        user: data,
        error,
        loggedOut,
        mutate,
        isLoading: !error && !data,
    }
}

function useCourse(courseId: string) {
    const { data, error, mutate } = useRequest<DetailedCourse>({ url: `/course/${courseId}/detail` })
    const notFound = error && error.response && (error.response.status === 404 || error.response.status === 422)

    return {
        course: data,
        error,
        notFound,
        mutate,
        isLoading: !error && !data,
    }
}

export { useUser, useCourse }
