import toast from 'react-hot-toast'
import axios from 'axios'
import { Course } from './types'
import { KeyedMutator } from 'swr'

function enrollChange(course: Course, mutator: KeyedMutator<any> = null) {
    let path = course.is_enrolled ? 'unenroll' : 'enroll'
    let command = path.charAt(0).toUpperCase() + path.substr(1)
    toast
        .promise(
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/${course.id}/${path}`, null, {
                withCredentials: true,
            }),
            {
                loading: command + 'ing...',
                success: () => {
                    course.is_enrolled = !course.is_enrolled
                    return command + 'ed!'
                },
                error: (err) => {
                    if (err.response) {
                        if (err.response.status == 422) return 'Course not found!'
                        return err.response.data.detail
                    } else {
                        return 'An error has occured.'
                    }
                },
            }
        )
        .then(() => {
            if (mutator) mutator()
        })
        .catch(() => {})
}

function deleteCourse(course: Course, mutator: KeyedMutator<any> = null) {
    toast
        .promise(
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/course/${course.id}/delete`, {
                withCredentials: true,
            }),
            {
                loading: 'Removing...',
                success: () => {
                    course.is_enrolled = !course.is_enrolled
                    return 'Removed!'
                },
                error: (err) => {
                    if (err.response) {
                        if (err.response.status == 422) return 'Course not found!'
                        return err.response.data.detail
                    } else {
                        return 'An error has occured.'
                    }
                },
            }
        )
        .then(() => {
            if (mutator) mutator()
        })
        .catch(() => {})
}

export { enrollChange, deleteCourse }
