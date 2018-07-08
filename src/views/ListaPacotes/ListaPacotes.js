import './ListaPacotes.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationBar, Heading, CardPacote, Footer } from '../../components'
import bgImage from '../../assets/bg-content.png'

export default class ListaPacotes extends Component {
  static propTypes = {
    pacotes: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.recuperaTodosOsPacotes()
  }

  render () {
    const { pacotes } = this.props

    return (
      <div style={{ backgroundImage: `url(${bgImage})` }}>
        <NavigationBar noLogo />
        <Heading />
        <div className='container'>
          <div className='pacotes-container'>
            {pacotes.map((pacote, key) => (
            <a key={key} href={`/${pacote.id}`} className='link-without-style'>
              <CardPacote {...pacote} />
            </a>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
