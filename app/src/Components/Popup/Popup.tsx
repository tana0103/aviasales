import React from 'react'
import styles from './Popup.module.scss';

type PropsType = {
	children: string | JSX.Element | null
	show: boolean
}

export const Popup = (props: PropsType) => {
	const {children, show} = props
  return (
	  <div className={styles.container} style = {show ? {display: 'block'}: {display: 'none'}} data-name = {show}>
		  {children}
	 </div>
  )
}
