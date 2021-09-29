import CourseList from '../../components/CourseList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigator from '../../components/Navigator'
import { NextSeo } from 'next-seo'

export default function MyCoursePage() {
    const [currentPage, setPage] = useState<number>(1)

    useEffect(() => {
        if (currentPage < 1) setPage(1)
    }, [currentPage])

    return (
        <>
            <NextSeo title="My Courses" />
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

            <Navigator currentPage={currentPage} setPage={setPage} />
        </>
    )
}
