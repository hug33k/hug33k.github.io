/* React */
import React, { Component } from "react";
import { connect } from "react-redux";

class Group extends Component {

	render() {
		return (
			<div className={"card " + this.props.group.name.toLowerCase()}>
				<a href={this.props.group.url} target="_blank">
					<div className="background"/>
					<div className="name">
						{this.props.group.name}
					</div>
					<div className="desc">
						{this.props.group.desc.split("\n").map((item, key) => {
							return <span key={key}>{item}<br/></span>;
						})}
					</div>
				</a>
			</div>
		);
	}

}

class Groups extends Component {

	render() {
		let items = this.props.groups.map((item, index) => {
			return <Group key={index} group={item} />;
		});
		return (
			<div id="groups">
				{items}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		groups: state.groups
	};
};

export default connect(mapStateToProps)(Groups);
