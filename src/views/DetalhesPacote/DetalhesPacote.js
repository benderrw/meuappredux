import React, { Component } from 'react'
import moment from 'moment'

export default class DetalhesPacote extends Component {
	componentDidMount() {
		const { match: { params: { pacoteId } } } = this.props

		this.props.getPacoteById(pacoteId)
	}

	render() {
		const { pacote } = this.props

		if (!pacote) {
			return <p>Carregando página</p>
		}

		const { descricao, urlImagem, site, telefone, nome, dataInicio, dataFim } = pacote

		return (
			<div>
				<img src={urlImagem} alt="" width="100%"/>
				<div>
					<div>
						<h2>
							{nome}
						</h2>
					</div>
					<div>
						<p>{descricao}</p>
						<p>
							De {moment.unix(dataInicio).format('YY [de] MMMM')} até {moment.unix(dataFim).format('YY [de] MMMM')}
						</p>
						<a href={site} target="_blank">Ver site</a>
						<p>
							Telefone: {telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')}
						</p>
					</div>
				</div>
			</div>
		)
	}
}