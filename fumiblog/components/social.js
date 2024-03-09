import styles from '@/styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <ul className={styles.list}>
            <li>
                <a href='https://github.com/atsushi11o7/blog-site'>
                    <FontAwesomeIcon icon={faGithub} />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
        </ul>
    )
}