import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { enrollChange } from '../../utils/helpers'
import { Course } from '../../utils/types'
import EnrollBar from '../../components/EnrollBar'
import Navigator from '../../components/Navigator'

export default function EnrolledCoursePage() {
    const [currentPage, setPage] = useState<number>(1)

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <h2 className="font-bold text-2xl pb-2">Enrolled Courses</h2>
            <hr className="pb-2" />
            <EnrollBar showCreate={false} />

            <CourseList endpoint="enrolled" page={currentPage} />

            {/* Preload next page */}
            <div className="hidden">
                <CourseList endpoint="enrolled" page={currentPage + 1} />
            </div>

            <Navigator currentPage={currentPage} setPage={setPage} />
        </>
    )
}
