import { DetailedCourse as CourseType } from '../utils/types'
import moment from 'moment-timezone'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import styles from './CourseNotes.module.css'
import toast from 'react-hot-toast'

const TableWrapper: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement>> = ({
    children,
    ...props
}) => (
    <div className="overflow-x-auto">
        <table {...props}>{children}</table>
    </div>
)

interface CourseProps {
    course: CourseType
}

const mdOverrides = {
    table: {
        component: TableWrapper,
    },
}
const Course: React.FC<CourseProps> = ({ course }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 py-2">
                <div className="flex flex-col">
                    <div className="block text-gray-700 font-bold mb-2">Course Name</div>
                    <p>{course.name}</p>
                </div>
                <div className="flex flex-col">
                    <div className="block text-gray-700 font-bold mb-2">Subject</div>
                    <p>{course.matkul}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 py-2">
                <div className="flex flex-col">
                    <div className="block text-gray-700 font-bold mb-2">Date and Time</div>
                    <p>{moment(course.datetime).format('DD MMM YYYY HH:mm')}</p>
                </div>
                <div className="flex flex-col">
                    <div className="block text-gray-700 font-bold mb-2">Students</div>
                    <p>
                        {course.students_count} / {course.students_limit || 'inf'}
                    </p>
                </div>
            </div>

            <div className="w-full py-2">
                <div className="block text-gray-700 font-bold mb-2">Meet/Zoom URL</div>
                {course.link ? (
                    <Link href={course.link}>
                        <a className="hover:text-blue-600">{course.link}</a>
                    </Link>
                ) : (
                    <p>No link available.</p>
                )}
            </div>

            <div className="w-full py-2">
                <div className="block text-gray-700 font-bold mb-2">Notes</div>
                {course.notes ? (
                    <div className="border rounded-md w-full p-3">
                        <Markdown
                            className={styles.postContent}
                            // eslint-disable-next-line react/no-children-prop
                            children={course.notes}
                            options={{
                                overrides: mdOverrides,
                            }}
                        />
                    </div>
                ) : (
                    <p>No notes available.</p>
                )}
            </div>

            <div className="w-full py-2">
                <div className="block text-gray-700 font-bold mb-2">Course ID</div>
                <div className="grid grid-cols-1 md:grid-cols-4 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="md:col-span-3 w-full border rounded-md p-3 bg-gray-200">{course.id}</div>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(course.id.toString())
                            toast.success('Copied to clipboard!')
                        }}
                        className="p-3 rounded bg-blue-600 text-white text-center"
                    >
                        Copy Course ID
                    </button>
                </div>
            </div>
        </>
    )
}

export default Course
