import styles from "./skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
        const PieChart = () => {
            const data = {
                labels: mySkills.map((item) => item.name),
                datasets: [
                    {
                        label: 'Kemampuan (%)',
                        data: mySkills.map((item) => item.percentage),
                        backgroundColor: mySkills.map((item) => item.color),
                    borderColor: ['#fff'],
                    borderWidth: 1,
                    },
                ],
            };

            return <Pie data={data} />;
        }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>My Skills</h1>
            </div>
            <div className={styles.content}>
                <ul>
                    {mySkills.map((item, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} size="2xl" />
                        </li>
                    ))}
                </ul>
                <div className={styles.chart}>
                    {PieChart()}
                </div>
            </div>
        </div>
    )
}

export default Skills

const mySkills = [
    {
        name: "Javascript",
        icon: faJs,
        color: "#FFD43B",
        percentage: 80
    },
    {
        name: "HTML",
        icon: faHtml5,
        color: "#E34C26",
        percentage: 90
    },
    {
        name: "CSS",
        icon: faCss3Alt,
        color: "#264DE4",
        percentage: 90
    },
    {
        name: "NodeJS",
        icon: faNodeJs,
        color: "#3C873A",
        percentage: 70
    },
    {
        name: "Python",
        icon: faPython,
        color: "#3776AB",
        percentage: 70
    }
]