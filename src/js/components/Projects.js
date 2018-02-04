/* React */
import React, { Component } from "react";
import { connect } from "react-redux";

class Project extends Component {

	render() {
		return (
			<div className={"card " + this.props.project.name.toLowerCase()}>
				<a href={this.props.project.url} target="_blank">
					<div className="background"/>
					<div className="name">
						{this.props.project.name}
					</div>
					<div className="desc">
						{this.props.project.desc.split("\n").map((item, key) => {
							return <span key={key}>{item}<br/></span>;
						})}
					</div>
				</a>
			</div>
		);
	}

}

class Projects extends Component {

	render() {
		let items = this.props.projects.map((item, index) => {
			return <Project key={index} project={item} />;
		});
		return (
			<div id="projects">
				{items}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	};
};

export default connect(mapStateToProps)(Projects);
