import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function MyCoursePage() {
    const [currentPage, setPage] = useState<number>(1)

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <h2 className="font-bold text-2xl pb-2">My Courses</h2>
            <hr className="pb-2" />
            <div className="flex flex-row-reverse">
                <Link href="/course/create">
                    <button className="rounded-xl bg-blue-600 py-2 px-4 text-white">New Course</button>
                </Link>
            </div>

            <CourseList endpoint="mine" page={currentPage} />

            {/* Preload next page */}
            <div className="hidden">
                <CourseList endpoint="mine" page={currentPage + 1} />
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
