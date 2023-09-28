import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import styles from './Layoute.module.scss'

export const Layoute = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Navbar />
			</header>
			<main className={styles.main}>
				<Outlet/>
			</main>
			<footer className={styles.footer}>тут футер
			</footer>
		</div>

	)
}
