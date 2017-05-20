/* React */
import React, { Component } from "react";
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

class Item extends Component {

	getIcon = () => {
		switch (this.props.name) {
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
				return this.props.name;
		}
	};

	render() {
		return (
			<div className={"item " + this.props.name}>
				<a href={this.props.url} target="_blank">
					<div className="key">
						{this.getIcon()}
					</div>
					<div className="value">
						{this.props.username}
					</div>
				</a>
			</div>
		);
	}

}

class Social extends Component {

	render() {
		return (
			<div id="social">
				<Item name="linkedin" url="https://www.linkedin.com/in/hugoschoch/" username="Hugo SCHOCH"/>
				<Item name="facebook" url="https://www.facebook.com/hugo.schoch" username="Hugo SCHOCH" />
				<Item name="twitter" url="https://twitter.com/hug33k" username="@hug33k" />
				<Item name="github" url="https://github.com/hug33k" username="@hug33k" />
				<Item name="medium" url="https://medium.com/@hug33k" username="@hug33k" />
				<Item name="instagram" url="https://www.instagram.com/hug33k" username="@hug33k" />
				<Item name="spotify" url="https://open.spotify.com/user/hug33k" username="@hug33k" />
				<Item name="soundcloud" url="https://soundcloud.com/hug33k" username="@hug33k" />
				<Item name="youtube" url="https://www.youtube.com/c/HugoSchoch" username="Hugo SCHOCH" />
			</div>
		);
	}
}

export default Social;
