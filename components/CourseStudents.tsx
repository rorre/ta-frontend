import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction, useEffect } from 'react'
import useRequest from '../utils/swr'

interface CourseStudentsProps {
    courseid: string
    page: Number
    setFull: Dispatch<SetStateAction<boolean>>
    setLoading: Dispatch<SetStateAction<boolean>>
}

const CourseStudents: React.FC<CourseStudentsProps> = ({ courseid, setFull, setLoading, page = 1 }) => {
    const { data: students, error } = useRequest<string[]>(
        {
            url: `/course/${courseid}/students?page=${page}`,
        },
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    )

    const isLoading = !students && !error
    useEffect(() => {
        setFull(students && students.length == 10)
        setLoading(isLoading)
    }, [students, isLoading])

    return (
        <>
            {!isLoading &&
                students.length != 0 &&
                students.map((v, i) => {
                    return (
                        <div key={`student-${page}-${i}`} className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon icon={faUser} />
                            <span>{v}</span>
                        </div>
                    )
                })}
        </>
    )
}

export default CourseStudents
