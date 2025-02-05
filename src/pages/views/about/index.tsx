import styles from "./about.module.css"
import Image from "next/image"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>About</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Image src="/images/vektor.png" alt="vektor" width={350} height={350} priority={true} />
                </div>
                <div className={styles.text}>
                    <p>Halo! Saya adalah mahasiswa dari Universitas Multi Data Palembang yang memiliki ketertarikan besar dalam dunia pemrograman. Ketertarikan ini sudah dimulai sejak sekolah, dan hingga kini saya terus belajar serta mengembangkan keterampilan saya di bidang ini. Meskipun masih pemula, saya selalu antusias untuk mengeksplorasi berbagai teknologi dan meningkatkan pemahaman saya dalam pemrograman.

Saya percaya bahwa dengan konsistensi dan semangat belajar, saya dapat terus berkembang dan menghadapi tantangan di dunia teknologi. Jika kamu memiliki saran atau ingin berbagi pengalaman, jangan ragu untuk menghubungi saya! 🚀</p>
                </div>
            </div>
        </div>
    )
}

export default About