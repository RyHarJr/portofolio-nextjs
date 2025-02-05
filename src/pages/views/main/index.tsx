import styles from "./main.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';

const MainView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>Hello, It&apos;s Me</p>
                    <h1>Ahmad Rizki Hartawan</h1>
                    <p>And i am a Computer Science Student</p>
                    <div className={styles.socialMedia}>
                        <ul>
                            {SocialMedia.map((item, index) => (
                                <li key={index}>
                                    <a href={item.path}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className={styles.image}>
                    <Image src="/images/profile.jpg" alt="profile" width={300} height={300} priority={true} />
                </div>
            </div>
        </div>
    )
}

export default MainView

const SocialMedia = [
    {
        name: "Github",
        path: "https://github.com/RyHarJr",
        icon: faGithub
    },
    {
        name: "Instagram",
        path: "https://www.instagram.com/rizki_hr4",
        icon: faInstagram
    },
    {
        name: "Tiktok",
        path: "https://www.tiktok.com/@ryhar_123",
        icon: faTiktok
    }
]