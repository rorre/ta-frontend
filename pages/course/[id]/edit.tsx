import { useRouter } from 'next/router'
import Editor from '../../../components/creator/Editor'
import Loader from '../../../components/Loader'
import { useCourse } from '../../../utils/fetchers'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const EditCourse = () => {
    const router = useRouter()
    const { id } = router.query
    const { course, error, notFound, isLoading, mutate } = useCourse(id as string)

    useEffect(() => {
        if (error && id !== undefined) {
            if (error.response) {
                if (notFound) {
                    toast.error('Course not found.')
                } else {
                    toast.error(error.response.data.detail)
                }
            } else {
                toast.error('An error has occured.')
            }
            router.replace('/course')
        }
    }, [course, error])

    if (notFound) {
        router.replace('/course')
        toast.error('Course not found.')
    }

    return isLoading || !course ? (
        <Loader />
    ) : (
        <>
            <h2 className="font-bold text-2xl pb-2">Edit Course</h2>
            <hr className="pb-2" />
            <Editor course={course} mutator={mutate} />
        </>
    )
}

export default EditCourse
