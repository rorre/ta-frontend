import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Editor from '../../components/creator/Editor'

export default function CoursePage() {
    const router = useRouter()
    return (
        <>
            <NextSeo title="Create Course" />
            <h2 className="font-bold text-2xl pb-2">Create Course</h2>
            <hr className="pb-2" />
            <Editor />
        </>
    )
}
