import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '../utils/auth'
import useSWR, { mutate } from 'swr'
import { Course } from '../utils/types'
import useRequest from '../utils/swr'
import CourseCard from './CourseCard'
import _ from 'lodash'

export default function CourseList() {
    const { user, error } = useUser()
    //const { data: courses, error: courseError } = useRequest<Course[]>({
    //    url: `${process.env.NEXT_PUBLIC_API_URL}/course/list`,
    //})
    const courses: Course[] = [
        {
            id: 'asduhqdw',
            name: 'DDP-0 Tutor',
            matkul: 'DDP',
            datetime: '21 Desember 2021',
            teacher: 'Budi my man',
            students_count: 22,
            students_limit: null,
            is_enrolled: false,
        },
        {
            id: 'asduhqdw',
            name: 'DDP-0 Tutor',
            matkul: 'DDP',
            datetime: '21 Desember 2021',
            teacher: 'Budi my man',
            students_count: 22,
            students_limit: null,
            is_enrolled: false,
        },
        {
            id: 'asduhqdw',
            name: 'DDP-0 Tutor',
            matkul: 'DDP',
            datetime: '21 Desember 2021',
            teacher: 'Budi my man',
            students_count: 22,
            students_limit: null,
            is_enrolled: false,
        },
    ]
    const chunkedCourses = _.chunk(courses, 2)
    const router = useRouter()
    if (error) {
        if (error.response) {
            if (router.asPath != '/') router.push('/')
        }
    }

    return (
        <>
            {chunkedCourses.map((twoCourses, i) => {
                return (
                    <div
                        key={`coursechunk-${i}`}
                        className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 py-2"
                    >
                        {twoCourses.map((course, j) => {
                            return <CourseCard course={course} key={`course-${i}-${j}`} />
                        })}
                    </div>
                )
            })}
        </>
    )
}
