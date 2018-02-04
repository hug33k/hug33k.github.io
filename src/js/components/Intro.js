/* React */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Icons */
import User from "mdi-react/AccountIcon";
import Age from "mdi-react/CakeVariantIcon";
import Work from "mdi-react/BriefcaseIcon";
import Location from "mdi-react/MapMarkerIcon";

class Info extends Component {

	getIcon = () => {
		switch (this.props.info) {
			case "name":
				return <User/>;
			case "age":
				return <Age/>;
			case "activity":
				return <Work/>;
			case "location":
				return <Location/>;
			default:
				return this.props.info;
		}
	};

	render() {
		return (
			<div className="item">
				<div className="key">
					{this.getIcon()}
				</div>
				<div className="value">
					{this.props.value}
				</div>
			</div>
		);
	}

}

class Intro extends Component {

	render() {
		let items = Object.keys(this.props.infos).map((info, index) => {
			return <Info key={index} info={info} value={this.props.infos[info]} />;
		});
		return (
			<div id="intro">
				<div className="card">
					<div className="me"/>
					<div className="text list">
						{items}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		infos: state.me
	};
};

export default connect(mapStateToProps)(Intro);
