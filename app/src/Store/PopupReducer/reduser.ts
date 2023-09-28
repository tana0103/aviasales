export type PopupStateType = {
	// user: boolean| string
	// language: boolean| string
	// menu: boolean| string
	[key: string]: boolean
}

type PopupActionType = {
	type: string,
	payload: PopupStateType
}
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

const defaultState = {
	user: false,
	lenguage: false,
	menu: false
}
export const popupReducer = (state: PopupStateType = defaultState, action: PopupActionType): PopupStateType => {
	switch (action.type) {
		case OPEN_MODAL:
			return action.payload
		case CLOSE_MODAL:
			return defaultState
		default:
			return state;
	}
}

export const changeOpenPopupAction = (data:PopupStateType) => {
	return {
		type: OPEN_MODAL,
		payload: data
}
}

export const closePopupAction = () => {
	return {
		type: CLOSE_MODAL
}
}