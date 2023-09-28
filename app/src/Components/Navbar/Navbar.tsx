import React, {useState} from 'react'
import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom'
import { Buttons } from './Buttons/Buttons'
import { useForm } from 'react-hook-form'
import { log } from 'console'


export const Navbar = () => {
	const form = useForm()
	const { register, handleSubmit, formState:{errors} } = form
	const click = (data: any) => {
		console.log(data);
		
	}
	const [active, setActive] = useState<number>(0)
	const hanleClickBtn = (index: number) => {
		setActive(index)
	}
	const listBtn = [{ name: 'Авиабилеты' , linkTo: 'tickets'}, {name: 'Отели', linkTo: 'hotels'}]
	const listInput = [
		{ type: 'text', className: 'from', name: 'from' },
		{ type: 'text', className: 'to', name: 'to' },
		{ type: 'date', className: 'dataFrom', name: 'dataFrom' },
		{ type: 'date', className: 'dataTo', name: 'dataTo' },
		{ type: 'number', className: 'colvoPassazhirov', name: 'colvoPassazhirov' },
		{ type: 'submit', className: 'submitBtn', name: 'submitBtn' }
	]

	return (
		<div className={styles.menu}>
			<Buttons />
			<h1>
				Поиск дешёвых авиабилетов
			</h1>
			<h3>
				16 лет помогаем вам экономить
			</h3>
	  		<div className={styles.container}>
		  		<span className={styles.go} style={{left: `${active * 50}%`}}> </span>
		  		{listBtn.map((el, index) => {
			  		return (
				  <Link to={el.linkTo} className={index === active ? `${styles.active} ${styles.btn} ` : styles.btn} style={index===active? {color:'blue'}: {}} onClick={() => hanleClickBtn(index)}>{el.name}</Link>
			  	)
		  		})}
			</div>
			
			<form className={styles.input_box}
				onSubmit={handleSubmit(click)}
			>
				{listInput.map((el) => {
					return (
						<input
							className={`${styles[el.className]} ${styles.inputElement}`}
							type={el.type}
							{...register(el.name)}
						></input>
					)
				})}
			</form>
		</div>
  )
}
