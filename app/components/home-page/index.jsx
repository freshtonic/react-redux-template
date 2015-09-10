import 'home-page/home-page.css'
import React from 'react'
import SimpleComponent from 'simple-component'
import Link from 'react-router'

export default class HomePage extends React.Component {
	render() {
		return (
			<section className='home-page'>
				<Link to="home">HOME</Link>
				<SimpleComponent color='red' />
			</section>
		)
	}
}
