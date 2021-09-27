import { ErrorMessage } from '@hookform/error-message'
import {
    Control,
    Controller,
    DeepMap,
    FieldError,
    FieldValues,
    RegisterOptions,
    UseFormRegister,
} from 'react-hook-form'
import { StylesConfig } from 'react-select'

// I have absolutely no idea why does this happen.
// At least I am not the only one that has this problem.
// Issue: https://github.com/vercel/next.js/issues/4515
// Solution: https://github.com/vercel/next.js/issues/4515#issuecomment-706273622
import dynamic from 'next/dynamic'
import type SelectType from 'react-select'
const Select = dynamic(() => import('react-select'), {
    ssr: false,
}) as typeof SelectType

interface SelectOptions {
    value: string
    label: string
}

type isMulti = false

interface FormFieldProps {
    id: string
    label: string
    placeholderText: string
    type?: string
    register: UseFormRegister<any>
    errors: DeepMap<FieldValues, FieldError>
    validators?: RegisterOptions
    useErrorMessage?: boolean
}

const selectStyle: StylesConfig<SelectOptions, isMulti> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderBottomWidth: '1px',
        boxShadow: 'none',
        margin: 0,
        minHeight: 0,
        borderRadius: '0.25rem',
        paddingLeft: '0.75rem',
    }),
    menuList: (styles) => ({
        ...styles,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    placeholder: (styles, state) => ({
        ...styles,
        color: state.hasValue ? '#773b6b' : 'hsl(0, 0%, 50%)',
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: 0,
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
    }),
}

interface SelectFieldProps {
    id: string
    label: string
    placeholderText: string
    errors: DeepMap<FieldValues, FieldError>
    control: Control<any>
    options: SelectOptions[]
    validators?: RegisterOptions
    useErrorMessage?: boolean
}

interface ErrorProps {
    message: string
}

const ErrorNotification: React.FC<ErrorProps> = ({ message }) => {
    return <span className="pt-2 text-red-600">{message}</span>
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    placeholderText,
    register,
    validators,
    errors,
    type = 'text',
    useErrorMessage = true,
}) => {
    return (
        <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
                {label}
            </label>

            <input
                {...register(id, validators)}
                className="appearance-none border rounded w-full
                            py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none hover:shadow focus:border-blue-600"
                id={id}
                type={type}
                placeholder={placeholderText}
                autoComplete="on"
            />
            {useErrorMessage && <ErrorMessage name={id} errors={errors} render={ErrorNotification} />}
        </div>
    )
}

const SelectField: React.FC<SelectFieldProps> = ({
    id,
    label,
    placeholderText,
    control,
    validators,
    options,
    errors,
    useErrorMessage = true,
}) => {
    return (
        <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
                {label}
            </label>

            <Controller
                name={id}
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                        inputRef={ref}
                        value={options.find((c) => c.value === value)}
                        name={name}
                        id={id}
                        instanceId={id}
                        options={options}
                        placeholder={placeholderText}
                        isSearchable={false}
                        onChange={(val) => onChange(val?.value)}
                        styles={selectStyle}
                        className="text-base"
                    />
                )}
                rules={validators}
            />

            {useErrorMessage && <ErrorMessage name={id} errors={errors} render={ErrorNotification} />}
        </div>
    )
}

const FieldRow: React.FC = ({ children }) => {
    return (
        <div
            className="grid md:grid-cols-2
                      gap-x-2 md:gap-y-1
                      items-center
                      md:gap-x-4 lg:gap-x-24 lg:gap-y-4"
        >
            {children}
        </div>
    )
}

export { FormField, SelectField, FieldRow }
