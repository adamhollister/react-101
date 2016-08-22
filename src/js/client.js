// Here we define the output node in the DOM as a const
// and render the Layout component inside it
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
