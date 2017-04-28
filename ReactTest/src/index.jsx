import React from "react"
import {render} from "react-dom"

class HelloWorld extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<p>Hello, {this.props.greetTarget}!</p>
		);
	}
}

render(
	<div>
		<HelloWorld greetTarget="Batman" />
		<HelloWorld greetTarget="Iron Man" />
		<HelloWorld greetTarget="Nicolas Cage" />
		<HelloWorld greetTarget="Mega Man" />
		<HelloWorld greetTarget="Bono" />
		<HelloWorld greetTarget="Catwoman" />
	</div>,
	document.querySelector("#container")
);