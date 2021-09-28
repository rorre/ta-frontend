import toast from 'react-hot-toast'
import axios from 'axios'
import { Course } from './types'
import { KeyedMutator } from 'swr'

function enrollChange(course: Course, mutator: KeyedMutator<any> = null) {
    let path = course.is_enrolled ? 'unenroll' : 'enroll'
    toast
        .promise(
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/${course.id}/${path}`, null, {
                withCredentials: true,
            }),
            {
                loading: 'Enrolling...',
                success: () => {
                    course.is_enrolled = !course.is_enrolled
                    return 'Enrolled!'
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
}

export { enrollChange, deleteCourse }
