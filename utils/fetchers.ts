import axios from 'axios'
import useSWR from 'swr'
import { DetailedCourse, FetchError, ParseError, User } from './types'
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
    const { data, error, mutate } = useRequest<DetailedCourse, FetchError>({ url: `/course/${courseId}/detail` })
    const notFound = error && error.response && (error.response.status === 404 || error.response.status === 422)

    let errorMessage: string, errData: string | ParseError[]
    if (error && error.response) {
        if (error.response.status == 422) {
            errData = <ParseError[]>error.response.data.detail
            errorMessage = errData[0].msg
        } else {
            errData = <string>error.response.data.detail
            errorMessage = errData
        }
    } else {
        errorMessage = 'An error has occured'
    }

    return {
        course: data,
        error,
        notFound,
        mutate,
        isLoading: !error && !data,
        errorMessage,
    }
}

export { useUser, useCourse }
