import { Course } from '../utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll, faCalendar, faUser, faUserFriends, faPlus, faMinus, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

interface CourseProps {
    course: Course
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
    async function enrollChange() {
        let path = course.is_enrolled ? 'unenroll' : 'enroll'
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/${course.id}/${path}`, null, {
                withCredentials: true,
            })
            course.is_enrolled = !course.is_enrolled
        } catch (e) {
            console.log('An error occured.')
        }
    }

    return (
        <div className="flex flex-col space-y-4 rounded-lg px-8 pt-4 pb-8 border relative">
            <h3 className="font-bold text-xl pt-2">{course.name}</h3>
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
                    <span>{course.datetime}</span>
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
                    <button className="rounded-md border bg-blue-600 text-white py-1 px-2" onClick={enrollChange}>
                        {course.is_enrolled ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                    </button>
                    <button className="rounded-md border bg-yellow-600 text-white py-1 px-2">
                        {course.is_enrolled ? <></> : <FontAwesomeIcon icon={faEdit} />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
