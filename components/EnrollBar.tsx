import { useState } from 'react'
import { enrollChange } from '../utils/helpers'
import { Course } from '../utils/types'
import Link from 'next/link'

interface EnrollBarProps {
    showCreate?: boolean
}

const EnrollBar: React.FC<EnrollBarProps> = ({ showCreate = true }) => {
    const [classCode, setClassCode] = useState<string>('')
    function enrollCourse() {
        const fakeCourse: Course = {
            id: classCode,
            matkul: '',
            name: '',
            datetime: '',
            teacher: '',
            teacher_npm: 0,
            students_count: 0,
            students_limit: null,
            is_enrolled: false,
            notes_short: '',
            hidden: true,
        }
        enrollChange(fakeCourse)
    }
    return (
        <>
            <div className="hidden md:grid grid-cols-11 space-x-2">
                <input
                    value={classCode}
                    className={(showCreate ? 'col-span-7' : 'col-span-9') + ' w-full border rounded-md p-3'}
                    placeholder="Input class code to enroll"
                    onChange={(e) => setClassCode(e.target.value)}
                />
                <button className="col-span-2 rounded-xl bg-green-600 text-white" onClick={enrollCourse}>
                    Enroll
                </button>
                {showCreate && (
                    <Link href="/course/create">
                        <button className="col-span-2 rounded-xl bg-blue-600 text-white">New Course</button>
                    </Link>
                )}
            </div>

            <div className="md:hidden grid grid-rows-3 space-y-2">
                <input
                    value={classCode}
                    className="w-full border rounded-md p-3"
                    placeholder="Input class code to enroll"
                    onChange={(e) => setClassCode(e.target.value)}
                />
                <button className="w-full rounded-xl bg-green-600 text-white" onClick={enrollCourse}>
                    Enroll
                </button>
                {showCreate && (
                    <Link href="/course/create">
                        <button className="w-full rounded-xl bg-blue-600 text-white">New Course</button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default EnrollBar
