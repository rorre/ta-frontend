export interface User {
    npm: Number
    username: string
    name: string
}

export interface Course {
    id: string
    name: string
    matkul: string
    datetime: string
    teacher: string
    teacher_npm: Number
    students_count: Number
    students_limit: Number | null
    is_enrolled: boolean
}

export interface DetailedCourse extends Course {
    link: string
    notes: string
}
