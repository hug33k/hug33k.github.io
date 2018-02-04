/* React */
import React, { Component } from "react";
/* Redux */
import { Provider } from "react-redux";
/* Store */
import Store from "./store";
/* Constants */
//import Constants from "./constants";
/* Components */
import Components from "./components";

const store = Store.create(window.__INITIAL_STATE__);

class App extends Component {

	render(){
		return (
			<Provider store={store}>
				<div>
					<Components.Head/>
					<div id="content">
						<Components.Banner img="laptops"/>
						<Components.Intro/>
						<Components.Social/>
						<Components.Documents/>
						<Components.Projects/>
						<Components.Footer/>
					</div>
				</div>
			</Provider>
		);
	}

}

export default App;
