import React from 'react'
import { Popup } from '../Popup/Popup'
import styles from './ButtonNav.module.scss'
import { useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../../Store'

type PropsType = {
	id?: number
	icon: JSX.Element
	text: string
	link?: boolean
	popup?: boolean
	name:string
}

export const ButtonNav = (props: PropsType) => {
	const { icon, text, name} = props
	const statePopup = useSelector((state:GlobalStoreStateType)=>state.popup)
  return (
	<div className={styles.modal} data-name={name}>
		<button className={styles.btn}>{icon}{text}</button>
		<Popup show={statePopup[name]}>gg</Popup>
	</div>
  )
}
