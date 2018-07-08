import { ADD_PACOTE } from '../actions'

export default function pacote (state = [], action) {
	switch(action.type) {
		case ADD_PACOTE:
			return state
				.filter(item => item.id !== action.payload.id)
				.concat(action.payload)
		default:
			return state
	}
}