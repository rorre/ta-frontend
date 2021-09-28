import { Course } from '../utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faScroll,
    faCalendar,
    faUser,
    faUserFriends,
    faPlus,
    faMinus,
    faEdit,
    faTrash,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment-timezone'
import { useUser } from '../utils/fetchers'
import Link from 'next/link'
import { KeyedMutator, useSWRConfig } from 'swr'
import { deleteCourse, enrollChange } from '../utils/helpers'
import { useRouter } from 'next/router'

interface CourseProps {
    course: Course
    mutateCourse: KeyedMutator<any>
}

const CourseCard: React.FC<CourseProps> = ({ course, mutateCourse }) => {
    const router = useRouter()
    const { user, isLoading } = useUser()
    const courseTime = moment(course.datetime)
    const currentTime = moment.tz('Asia/Jakarta')

    if (isLoading) return <></>

    const showEnroll = courseTime > currentTime && !course.is_enrolled
    const showUnenroll = course.is_enrolled
    const showAdmin = course.teacher_npm == user.npm

    return (
        <div className="flex flex-col space-y-4 rounded-lg px-8 pt-4 pb-8 border relative">
            {course.is_enrolled ? (
                <Link href={`/course/${course.id}/detail`}>
                    <h3 className="font-bold text-xl pt-2 hover:cursor-pointer hover:text-blue-600">{course.name}</h3>
                </Link>
            ) : (
                <h3 className="font-bold text-xl pt-2">{course.name}</h3>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 space-y-1">
                <div className="flex flex-row space-x-2 items-center">
                    <div className="w-6 p-1 pr-2 text-center">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>{course.teacher}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <div className="w-6 p-1 text-center">
                        <FontAwesomeIcon icon={faScroll} />
                    </div>
                    <span>{course.matkul}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <div className="w-6 p-1 text-center">
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <span>{moment(course.datetime).format('DD MMM YYYY HH:mm')}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <div className="w-6 p-1 text-center">
                        <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                    <span>
                        {course.students_count} / {course.students_limit || 'inf'}
                    </span>
                </div>
            </div>

            <div className="absolute bottom-2 right-2">
                <div className="flex flex-row space-x-2">
                    {showAdmin ? (
                        <>
                            <Link href={`/course/${course.id}/edit`}>
                                <button className="rounded-md border bg-yellow-600 text-white py-1 px-2">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </Link>
                            <button
                                onClick={() => {
                                    deleteCourse(course, mutateCourse)
                                }}
                                className="rounded-md border bg-red-600 text-white py-1 px-2"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </>
                    ) : (
                        <button
                            className="rounded-md border bg-blue-600 text-white py-1 px-2"
                            onClick={() => enrollChange(course, mutateCourse)}
                        >
                            {showEnroll ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseCard
