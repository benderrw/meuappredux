import React, { Component } from 'react'

export default class CardPacote extends Component {
	render() {
		const { detalhes } = this.props

		return (
			<div style={{ border: '1px solid red'}}>
				<pre>{JSON.stringify(detalhes, undefined, 2)}</pre>
			</div>
		)
	}
}