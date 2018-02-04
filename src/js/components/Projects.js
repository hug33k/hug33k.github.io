/* React */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Icons */
import Linkedin from "mdi-react/LinkedinIcon";
import Facebook from "mdi-react/FacebookIcon";
import Twitter from "mdi-react/TwitterIcon";
import Instagram from "mdi-react/InstagramIcon";
import Soundcloud from "mdi-react/SoundcloudIcon";
import Github from "mdi-react/GithubIcon";
import Spotify from "mdi-react/SpotifyIcon";
import Medium from "mdi-react/MediumIcon";
import Youtube from "mdi-react/YoutubeIcon";

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
