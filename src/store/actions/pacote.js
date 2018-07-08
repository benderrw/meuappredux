import * as api from '../api'

export const ADD_PACOTE = 'ADD_PACOTE'

export const recuperaTodosOsPacotes = () => {
	return dispatch => {
		api.getTodosOsPacotes()
			.then(payload => dispatch({ type: ADD_PACOTE, payload }))
      		.catch(() => console.error('erro ao baixar os dados'))
	}
}

export const getPacoteById = (id) => {
	return dispatch => {
		api.getPacoteById(id)
			.then(payload => dispatch({ type: ADD_PACOTE, payload: [ payload ] }))
			.catch(() => console.error('erro ao baixar os dados'))
	}
}