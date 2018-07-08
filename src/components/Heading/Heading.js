import './Heading.css'
import React, { Component } from 'react'
import logoGoTour from '../../assets/logo-GoTour.svg'
import bgHeader from '../../assets/bg-header.png'

export default class Heading extends Component {
  render () {
    return (
      <div className='heading' style={{ backgroundImage: `url(${bgHeader})` }}>
        <img className='logo' width={320} src={logoGoTour} alt='' />
        <div className='blue-background' />
      </div>
    )
  }
}
