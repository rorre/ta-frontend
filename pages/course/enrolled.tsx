import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { enrollChange } from '../../utils/helpers'
import { Course } from '../../utils/types'
import EnrollBar from '../../components/EnrollBar'
import Navigator from '../../components/Navigator'
import { NextSeo } from 'next-seo'

export default function EnrolledCoursePage() {
    const [currentPage, setPage] = useState<number>(1)
    const [isFull, setFull] = useState<boolean>(false)

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <NextSeo title="Enrolled Courses" />
            <h2 className="font-bold text-2xl pb-2">Enrolled Courses</h2>
            <hr className="pb-2" />
            <EnrollBar showCreate={false} />

            <CourseList setFull={setFull} endpoint="enrolled" page={currentPage} />

            {/* Preload next page */}
            <div className="hidden">
                <CourseList setFull={setFull} endpoint="enrolled" page={currentPage + 1} />
            </div>

            <Navigator isFull={isFull} currentPage={currentPage} setPage={setPage} />
        </>
    )
}
