import LoadingAnimation from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <LoadingAnimation type="Circles" color="#2563eb" height={100} width={100} />
        </div>
    )
}
