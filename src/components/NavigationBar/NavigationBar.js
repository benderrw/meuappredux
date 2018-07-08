import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logoSmall from '../../assets/logo-gotour-small.svg'
import styles from './NavigationBar.css'

export default class NavigationBar extends Component {
  static propTypes = {
    noLogo: PropTypes.bool
  }

  static defaultProps = {
    noLogo: false
  }

  render () {
    const { noLogo } = this.props

    return (
      <div className={styles.navigation}>
        <div className={styles.container}>
          {!noLogo && (
            <a className={styles.title} href='/'>
              <img src={logoSmall} alt='' />
            </a>
          )}
        </div>
      </div>
    )
  }
}
