import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '../../utils/auth'
import CourseList from '../../components/CourseList'
import Link from 'next/link'

export default function CoursePage() {
    const router = useRouter()

    return (
        <>
            <h2 className="font-bold text-2xl pb-2">Tutor Angkatan</h2>
            <hr className="pb-2" />
            <div className="flex flex-row-reverse">
                <Link href="/course/create">
                    <button className="rounded-xl bg-blue-600 py-2 px-4 text-white">New Course</button>
                </Link>
            </div>
            <CourseList />
        </>
    )
}
