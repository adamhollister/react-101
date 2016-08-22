import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

// 4. handleChange() takes an event, creates a const, assigns it to the value of the event's target (our <input>).
// 5. We pass it to the changeTitle() method on this.props
// 6. changeTitle() has been passed to this Component from the the parent Component (Layout)
// Go to Layout.js to continue...
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
// 1. Here our input value is the 'title' prop.
// 2. We are also using the onChange event to fire a handleChange() method.
// 3. Bind the method call to 'this': http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html#method-1-using-of-functionprototypebind
		return (
			<div>
				<Title title={this.props.title} />
				<input value={this.props.title} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}
