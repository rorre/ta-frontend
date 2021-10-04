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
    notes_short: string
    hidden: boolean
}

export interface DetailedCourse extends Course {
    link: string
    notes: string
    students: string[]
}

export interface ParseError {
    loc: string[]
    msg: string
    type: string
}

export interface FetchError {
    detail: string | ParseError[]
}
