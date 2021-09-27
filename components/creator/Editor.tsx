import axios from 'axios'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Course } from '../../utils/types'
import { FieldRow, FormField, SelectField } from './Fields'

interface CourseEditInputs {
    name: string
    matkul: string
    datetime_: string
    students_limit: Number | null
    notes: string | null
    link: string | null
}

interface EditorProps {
    course?: Course | null
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

const Editor: React.FC<EditorProps> = ({ course = null }) => {
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<CourseEditInputs>({ defaultValues: course })
    const router = useRouter()
    const submitValue: SubmitHandler<CourseEditInputs> = (data) => {
        if (data.students_limit === '') data.students_limit = null

        toast
            .promise(
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/create`, data, {
                    withCredentials: true,
                }),
                {
                    loading: 'Creating course...',
                    success: 'Created!',
                    error: (err) => {
                        if (err.response) {
                            return err.response.data.detail
                        } else {
                            return 'An error has occured.'
                        }
                    },
                }
            )
            .then(() => {
                router.push('/course')
            })
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
                    id="datetime_"
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
                    placeholderText=""
                    register={register}
                    type="number"
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