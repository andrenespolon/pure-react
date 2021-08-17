import React from 'react';
import './App.css';
import logo from '../public/assets/react_logo.png';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<img style={{ maxHeight: 150 }} src={logo} alt="logo" />
				<h1>Pure React App</h1>
				<h3>A simple configuration project using React, Webpack an Babel.</h3>
				<h5>
					Made with ❤️ by{' '}
					<a href="https://github.com/andrenespolon">André Nespolon</a>
				</h5>
			</div>
		);
	}
}

export default App;
