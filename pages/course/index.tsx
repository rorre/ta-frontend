import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { enrollChange } from '../../utils/helpers'
import { Course } from '../../utils/types'

export default function CoursePage() {
    const [classCode, setClassCode] = useState<string>('')
    const [currentPage, setPage] = useState<number>(1)

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
        }
        enrollChange(fakeCourse)
    }

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <h2 className="font-bold text-2xl pb-2">Available Courses</h2>
            <hr className="pb-2" />
            <div className="hidden md:grid grid-cols-11 space-x-2">
                <input
                    value={classCode}
                    className="col-span-7 w-full border rounded-md p-3"
                    placeholder="Input class code to enroll"
                    onChange={(e) => setClassCode(e.target.value)}
                />
                <button className="col-span-2 rounded-xl bg-green-600 text-white" onClick={enrollCourse}>
                    Enroll
                </button>
                <Link href="/course/create">
                    <button className="col-span-2 rounded-xl bg-blue-600 text-white">New Course</button>
                </Link>
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
                <Link href="/course/create">
                    <button className="w-full rounded-xl bg-blue-600 text-white">New Course</button>
                </Link>
            </div>

            <CourseList endpoint="available" page={currentPage} />

            {/* Preload next page */}
            <div className="hidden">
                <CourseList endpoint="available" page={currentPage + 1} />
            </div>

            <div className="flex flex-row justify-center space-x-4 py-4">
                <button
                    onClick={() => setPage(currentPage - 1)}
                    className="rounded border py-1 px-2 hover:text-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    onClick={() => setPage(currentPage + 1)}
                    className="rounded border py-1 px-2 hover:text-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </>
    )
}
