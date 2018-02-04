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

class Platform extends Component {

	getIcon = () => {
		switch (this.props.platform.name) {
			case "linkedin":
				return <Linkedin/>;
			case "facebook":
				return <Facebook/>;
			case "twitter":
				return <Twitter/>;
			case "instagram":
				return <Instagram/>;
			case "soundcloud":
				return <Soundcloud/>;
			case "github":
				return <Github/>;
			case "spotify":
				return <Spotify/>;
			case "medium":
				return <Medium/>;
			case "youtube":
				return <Youtube/>;
			default:
				return this.props.platform.name;
		}
	};

	render() {
		return (
			<div className={"item " + this.props.platform.name}>
				<a href={this.props.platform.url} target="_blank">
					<div className="key">
						{this.getIcon()}
					</div>
					<div className="value">
						{this.props.platform.username}
					</div>
				</a>
			</div>
		);
	}

}

class Social extends Component {

	render() {
		let items = this.props.social.map((item, index) => {
			return <Platform key={index} platform={item} />;
		});
		return (
			<div id="social">
				{items}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		social: state.social
	};
};

export default connect(mapStateToProps)(Social);
