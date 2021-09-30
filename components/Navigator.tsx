import { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface NavigatorProps {
    currentPage: number
    setPage: Dispatch<SetStateAction<number>>
    isFull: boolean
}

const Navigator: React.FC<NavigatorProps> = ({ currentPage, setPage, isFull }) => {
    return (
        <div className="flex flex-row justify-center space-x-4 py-4">
            {currentPage > 1 && (
                <button
                    onClick={() => setPage(currentPage - 1)}
                    className="rounded border py-1 px-2 hover:text-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            {isFull && (
                <button
                    onClick={() => setPage(currentPage + 1)}
                    className="rounded border py-1 px-2 hover:text-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    )
}

export default Navigator
