/* React */
import React, { Component } from "react";

class Banner extends Component {

	render() {
		return (
			<div className={"banner " + this.props.img}>
				<div className="background"/>
			</div>
		);
	}
}

export default Banner;
