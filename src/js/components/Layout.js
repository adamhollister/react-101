// Here we import the other Components into a Layout component to pass to the DOM
import React from "react";

import Footer from "./Footer";
import Header from "./Header";

// Create Layout Component
export default class Layout extends React.Component {

// 7. Set the default state.
    constructor() {
        super();
        this.state = {
            title: "Hello World",
        };
    }

// 8. changeTitle takes 'title' and uses it to update the state.
    changeTitle(title) {
        this.setState({title});
    }

    render() {
// 9. Here we return the Header Component and pass the changeTitle method to the Component as a prop
// 10. We also assign the Header's title prop to the title set in Layout's state
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}
