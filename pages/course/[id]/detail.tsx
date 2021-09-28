import { useRouter } from 'next/router'
import Course from '../../../components/Course'
import { useCourse, useUser } from '../../../utils/fetchers'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/Loader'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const CourseDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const { user } = useUser()
    const { course, error, notFound, isLoading } = useCourse(id as string)
    const [isAdmin, setIsAdmin] = useState(false)

    if (notFound) {
        router.push('/course')
        toast.error('Course not found.')
    }

    useEffect(() => {
        setIsAdmin(course && user && course.teacher_npm == user.npm)
    }, [course, user])

    return isLoading || !course ? (
        <Loader />
    ) : (
        <>
            <h2 className="font-bold text-2xl pb-2">Course Details</h2>
            <hr className="pb-2" />
            {isAdmin && (
                <div className="flex flex-row-reverse">
                    <button className="rounded-md border bg-red-600 text-white py-1 px-2">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link href={`/course/${course.id}/edit`}>
                        <button className="rounded-md border bg-yellow-600 text-white py-1 px-2">
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </Link>
                </div>
            )}
            <Course course={course} />
        </>
    )
}

export default CourseDetail
