import './NavigationBar.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavigationBar extends Component {
	static propTypes = {
		noLogo: PropTypes.bool
	}

	static defaultProps = {
		noLogo: false
	}

	render() {
		const { noLogo } = this.props

		return (
			<div className="navigation">
				<div className="container">
					{!noLogo && (
						<a href="/" className="title">
							<img src="" alt=""/>
						</a>
					)}
				</div>
			</div>
		)
	}
}