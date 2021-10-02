import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="border-t p-4 mt-auto text-center text-gray-500">
            <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by CSUI 2021 |{' '}
            <Link href="https://github.com/rorre/ta-backend">
                <a className="hover:text-blue-600">Back-end Source</a>
            </Link>{' '}
            |{' '}
            <Link href="https://github.com/rorre/ta-frontend">
                <a className="hover:text-blue-600">Front-end Source</a>
            </Link>
        </div>
    )
}
