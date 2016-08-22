import React from "react";

// Create Footer Component
export default class Footer extends React.Component {
	constructor() {
		// always call super() on component constructors
		super();
		// Set some properties
		this.name = "Adam";
	}

	render() {
		// anything returned in {} in JSX is interpreted as JS
		// but this isn't the right place for logic
		return (
			<footer>This is {this.name + ". Here's a number: " + 4 * 8}</footer>
		);
	}
}
