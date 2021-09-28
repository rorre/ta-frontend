import { useRouter } from 'next/router'
import { useUser } from '../utils/fetchers'
import { Course } from '../utils/types'
import useRequest from '../utils/swr'
import CourseCard from './CourseCard'
import _ from 'lodash'
import Loader from './Loader'

interface CourseListProps {
    endpoint: string
    page: Number
}

const CourseList: React.FC<CourseListProps> = ({ endpoint, page = 1 }) => {
    const {
        data: courses,
        error: courseError,
        mutate,
    } = useRequest<Course[]>({
        url: `/course/${endpoint}?page=${page}`,
    })
    const isLoading = !courses && !courseError
    const chunkedCourses = _.chunk(courses, 2)
    const router = useRouter()

    return isLoading ? (
        <Loader />
    ) : (
        <>
            {chunkedCourses.map((twoCourses, i) => {
                return (
                    <div
                        key={`coursechunk-${i}`}
                        className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 py-2"
                    >
                        {twoCourses.map((course, j) => {
                            return <CourseCard course={course} mutateCourse={mutate} key={`course-${i}-${j}`} />
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default CourseList
