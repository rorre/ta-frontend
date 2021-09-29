import { useRouter } from 'next/router'
import Editor from '../../../components/creator/Editor'
import Loader from '../../../components/Loader'
import { useCourse, useUser } from '../../../utils/fetchers'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

const EditCourse = () => {
    const router = useRouter()
    const { user } = useUser()
    const { id } = router.query
    const { course, error, notFound, isLoading, mutate, errorMessage } = useCourse(id as string)

    useEffect(() => {
        if (error && id !== undefined) {
            toast.error(errorMessage)
            router.replace('/course')
        }
    }, [course, error])

    useEffect(() => {
        if (course && user) {
            if (course.teacher_npm != user.npm) {
                toast.error('You are not allowed to do so.')
                router.replace('/course')
            }
        }
    }, [course, user])

    if (notFound) {
        router.replace('/course')
        toast.error('Course not found.')
    }

    return isLoading || !course ? (
        <Loader />
    ) : (
        <>
            <NextSeo title="Edit Course" />
            <h2 className="font-bold text-2xl pb-2">Edit Course</h2>
            <hr className="pb-2" />
            <Editor course={course} mutator={mutate} />
        </>
    )
}

export default EditCourse
