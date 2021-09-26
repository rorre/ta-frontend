import { Course } from '../utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll, faCalendar, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
interface CourseProps {
    course: Course
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
    return (
        <div className="flex flex-col space-y-4 rounded-lg px-8 pt-4 pb-8 border">
            <h3 className="font-bold text-xl pt-2">{course.name}</h3>
            <div className="grid grid-cols-2 space-y-1">
                <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{course.teacher}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon icon={faScroll} />
                    <span>{course.matkul}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{course.datetime}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span>
                        {course.students_count} / {course.students_limit || 'inf'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
