import styles from "./header.module.css";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const Header = () => {
    const { route } = useRouter();

    useEffect(() => {
        const toggleNavbar = () => {
            const toggle = document.querySelector(`.${styles.toggleNavbar}`);
            const container = document.querySelector(`.${styles.container} ul`);
            toggle?.addEventListener('click', () => {
                container?.classList.toggle(styles.active);
            })
            toggle?.addEventListener('click', () => {
                toggle?.classList.toggle(styles.active);
            })
        }
        toggleNavbar();
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ry</h1>
            <div className={styles.spacer}>
                <button className={styles.toggleNavbar}>☰</button>
            </div>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index} className={route == item.path ? styles.active : ''}>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portofolio', path: '/portofolio' },
    { name: 'Login', path: '/login' },
];