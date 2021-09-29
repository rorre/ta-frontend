import axios from 'axios'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { Course } from '../../utils/types'
import { FieldRow, FormField, SelectField } from './Fields'

interface CourseEditInputs {
    name: string
    matkul: string
    datetime: string
    students_limit: Number | null
    notes: string | null
    link: string | null
}

interface EditorProps {
    course?: Course | null
    mutator?: KeyedMutator<any>
}

const matkulOpts = [
    {
        label: 'DDP',
        value: 'ddp',
    },
    {
        label: 'Matematika Diskrit',
        value: 'matdis',
    },
    {
        label: 'Kalkulus',
        value: 'kalkulus',
    },
    {
        label: 'PSD',
        value: 'psd',
    },
    {
        label: 'ManBis',
        value: 'manbis',
    },
    {
        label: 'Kombistek',
        value: 'kombistek',
    },
    {
        label: 'Other',
        value: 'other',
    },
]

const Editor: React.FC<EditorProps> = ({ course = null, mutator = null }) => {
    if (course) {
        matkulOpts.forEach((element) => {
            if (element.label == course.matkul) course.matkul = element.value
        })
    }

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<CourseEditInputs>({ defaultValues: course })
    const router = useRouter()
    const submitValue: SubmitHandler<CourseEditInputs> = (data) => {
        // @ts-ignore
        if (data.students_limit === '') data.students_limit = null

        let targetUrl
        if (course) {
            targetUrl = `${process.env.NEXT_PUBLIC_API_URL}/course/${course.id}/update`
        } else {
            targetUrl = `${process.env.NEXT_PUBLIC_API_URL}/course/create`
        }
        toast
            .promise(axios.post(targetUrl, data, { withCredentials: true }), {
                loading: 'Submitting course...',
                success: 'Submitted!',
                error: (err) => {
                    if (err.response) {
                        return err.response.data.detail
                    } else {
                        return 'An error has occured.'
                    }
                },
            })
            .then(() => {
                router.push('/course')
                if (mutator) mutator()
            })
            .catch(() => {})
    }

    return (
        <form onSubmit={handleSubmit(submitValue)} className="md:flex flex-col space-y-3">
            <FieldRow>
                <FormField
                    id="name"
                    label="Course Name"
                    placeholderText=""
                    register={register}
                    validators={{
                        required: {
                            value: true,
                            message: 'You need to provide a name.',
                        },
                        maxLength: {
                            value: 100,
                            message: 'Course name exceeds 100 characters.',
                        },
                    }}
                    errors={errors}
                    useErrorMessage={true}
                />

                <SelectField
                    id="matkul"
                    label="Subject"
                    placeholderText=""
                    options={matkulOpts}
                    control={control}
                    errors={errors}
                    validators={{
                        required: {
                            value: true,
                            message: 'You need to fill in the subject.',
                        },
                    }}
                    useErrorMessage={true}
                />
            </FieldRow>
            <FieldRow>
                <FormField
                    id="datetime"
                    label="Date and Time"
                    placeholderText="When will the course starts?"
                    register={register}
                    validators={{
                        required: {
                            value: true,
                            message: 'You need to provide the date and time.',
                        },
                    }}
                    type="datetime-local"
                    errors={errors}
                    useErrorMessage={true}
                />

                <FormField
                    id="students_limit"
                    label="Student Limit"
                    placeholderText="You may set to 0 for no limit."
                    register={register}
                    type="number"
                    validators={{
                        min: 0,
                    }}
                    errors={errors}
                    useErrorMessage={false}
                />
            </FieldRow>
            <FormField
                id="link"
                label="Meet/Zoom URL"
                placeholderText=""
                register={register}
                errors={errors}
                useErrorMessage={false}
            />
            <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="notes">
                    Notes
                </label>

                <textarea
                    {...register('notes')}
                    className="appearance-none border rounded w-full
                            py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none hover:shadow focus:border-blue-600"
                    id="notes"
                    placeholder="Notes to be posted on site. Markdown supported."
                />
            </div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 p-2 text-white">
                Submit
            </button>
        </form>
    )
}

export default Editor
