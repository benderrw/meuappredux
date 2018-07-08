import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationBar, CardPacote } from '../../components'

export default class ListaPacotes extends Component {
  static propTypes = {
    pacotes: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.recuperaTodosOsPacotes()
  }

  render () {
    const { pacotes } = this.props
    console.log('render', this.props)

    return (
      <div>
        <NavigationBar noLogo />
        {/*<Heading />*/}
        <div className='container'>
          <div className='pacotes-container'>
            {pacotes.map((pacote, key) => (
              <a key={key} href={`/${pacote.id}`} className='link-without-style'>
                <CardPacote {...pacote} />
              </a>
            ))}
          </div>
        </div>
        {/*<Footer />*/}
      </div>
    )
  }
}
