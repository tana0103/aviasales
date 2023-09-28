import React from 'react'
import styles from './Buttons.module.scss'
import { Logo } from '../../../img/svg/logo/Logo'
import { Userlogo } from '../../../img/svg/logo/Userlogo'
import { TexLogo } from '../../../img/svg/logo/TexLogo'
import { LengLogo } from '../../../img/svg/logo/LengLogo'
import { MenuLogo } from '../../../img/svg/logo/MenuLogo'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../../../Store'
import { PopupStateType, changeOpenPopupAction } from '../../../Store/PopupReducer/reduser'
import { Link } from 'react-router-dom'
import { ButtonNav } from '../../ButtonNav/ButtonNav'

export const Buttons = () => {
	const dispatch = useDispatch()
	const statePopup = useSelector((state: GlobalStoreStateType) => state.popup)
	
	const handleClick = (e: any) => {
		const elementEvent = e.target.closest('DIV')
			if (elementEvent.className.includes('modal')) {
				console.log(elementEvent.getAttribute('data-name'));
				const data = elementEvent.getAttribute('data-name') as string
				
			const res: PopupStateType = {...statePopup}
			for (const key in statePopup) {
				if (key === data) {
					res[data] = !res[data]
				} else {
					res[key] = false
				}
				}
				dispatch(changeOpenPopupAction(res))
			}
		// console.log(evenTarget);
		
		
		// const targett = e.target.closest('DIV')
		
// console.log(targett);
		// if (e.target.closest('DIV').getAttribute('data-name') === buttons.map(el=>el.data_name)) {
		// 	dispatch(changeOpenPopupAction(!statePopup))
		// }
		// dispatch(changeOpenPopupAction(!statePopup))
	}
	const buttons = [{ id: 1, icon: <Userlogo />, text: 'Профиль', link: false, popup: true, data_name: 'user' },
		{ id: 2, icon: <TexLogo />, text: 'Поддержка', link: true, popup: false, data_name:'link'},
		{ id: 3, icon: <LengLogo />, text: '', link: false, popup: true, data_name: 'lenguage' },
		{ id: 4, icon: <MenuLogo />, text: '', link: false, popup: true, data_name: 'menu' }]
	
	//const dataAtrebut = buttons.map(el=>el.data_name)
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<button className={styles.btn}>
					<Logo />aviasales</button>
			</div>
			<div className={styles.wrapper} onClick={handleClick}>
				
					{buttons.map((el) => {
						if (el.link && !el.popup) {
							return <Link to='#' className={styles.btn}>{el.icon}{el.text}</Link>
						}
						else {
							return (
								<ButtonNav icon={el.icon} text={el.text} name={el.data_name } />
						)
						}
						
					})}
				
				{/* <div className={styles.modal}>
					<button className={styles.btn} onClick={handleClick}>
						<Userlogo />Профиль
					</button>
					<Popup show={statePopup}>gg</Popup>
				</div>
				<button className={styles.btn}>
					<TexLogo/>Поддержка</button>
				<button className={styles.btn}>
					<LengLogo/></button>
				<button className={styles.btn}>
					<MenuLogo/></button> */}
			</div>
		</div>
	)
}
