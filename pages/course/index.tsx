import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigator from '../../components/Navigator'
import EnrollBar from '../../components/EnrollBar'
import { NextSeo } from 'next-seo'

export default function CoursePage() {
    const [currentPage, setPage] = useState<number>(1)

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <NextSeo title="Courses List" />
            <h2 className="font-bold text-2xl pb-2">Available Courses</h2>
            <hr className="pb-2" />
            <EnrollBar />

            <CourseList endpoint="available" page={currentPage} />

            {/* Preload next page */}
            <div className="hidden">
                <CourseList endpoint="available" page={currentPage + 1} />
            </div>

            <Navigator currentPage={currentPage} setPage={setPage} />
        </>
    )
}
