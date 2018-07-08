import './CardPacote.css'
import React, { Component } from 'react'
import moment from 'moment'
import bgAviao from '../../assets/img-aviao.png'

export default class CardPacote extends Component {
	static defaultProps = {
		onClick: () => { }
	}

	render() {
		const { nome, valor, dataInicio, dataFim, urlImagem, onClick } = this.props

		return (
			<div className='card' {...{ onClick }}>
				<img src={urlImagem} alt='' />
				<div className='title'>
				    <p className='source-font'>
				        {nome.toUpperCase()}
				    </p>
				    <div className='icon'>
				        <div className='line' />
				        <img src={bgAviao} alt='' />
				    </div>
				</div>
			    <div className='content'>
			        <div className='period'>
			            <p>De {moment.unix(dataInicio).format('DD [de] MMMM')} até {moment.unix(dataFim).format('DD [de] MMMM')}</p>
			        </div>
			        <div className='info'>
			            <div>
			                {moment.duration(moment.unix(dataInicio).diff(moment.unix(dataFim))).humanize()}
			            </div>
			            <div>
			                {parseInt(valor, 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}