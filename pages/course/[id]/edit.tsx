import { useRouter } from 'next/router'
import Editor from '../../../components/creator/Editor'
import Loader from '../../../components/Loader'
import { useCourse } from '../../../utils/fetchers'

const EditCourse = () => {
    const router = useRouter()
    const { id } = router.query
    const { course, error, isLoading } = useCourse(id as string)

    return isLoading ? (
        <Loader />
    ) : (
        <>
            <h2 className="font-bold text-2xl pb-2">Edit Course</h2>
            <hr className="pb-2" />
            <Editor course={course} />
        </>
    )
}

export default EditCourse
