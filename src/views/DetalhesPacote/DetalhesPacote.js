import './DetalhesPacote.css'
import React, { Component } from 'react'
import moment from 'moment'
import { NavigationBar, Footer } from '../../components'
import bgImage from '../../assets/bg-content.png'

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
			<div className='detalhes' style={{ backgroundImage: `url(${bgImage})` }}>
				<NavigationBar />
				<img alt='' src={urlImagem} />
				<div className='content'>
					<div className='title'>
						<h2 className='source-font' style={{ fontWeight: 'bold' }}>
							{nome}
						</h2>
					</div>
					<div className='container'>
						<p className='nunito-font'>{descricao}</p>
						<p className='nunito-font'>
							De {moment.unix(dataInicio).format('YY [de] MMMM')} até {moment.unix(dataFim).format('YY [de] MMMM')}
						</p>
						<a className='nunito-font' target='_blank' href={site}>Ver site</a>
						<p className='nunito-font'>
							Telefone: {telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')}
						</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}