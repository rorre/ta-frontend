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
    students_count: Number
    students_limit: Number | null
    is_enrolled: boolean
}
