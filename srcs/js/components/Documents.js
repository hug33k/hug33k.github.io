/* React */
import React, { Component } from "react";

class Document extends Component {

	getIcon = () => {
		switch (this.props.name) {
			case "cv_fr":
			case "cv_en":
				return <div className="cv_icon"/>;
			default:
				return this.props.name;
		}
	};

	render() {
		return (
			<div className={"card document " + this.props.name}>
				<a href={this.props.url} target="_blank">
					<div className="key">
						{this.getIcon()}
					</div>
					<div className="value">
						{this.props.text}
					</div>
				</a>
			</div>
		);
	}
}

class Documents extends Component {

	render() {
		return (
			<div id="documents">
				<Document name="cv_fr" url="public/docs/CV.pdf" text="CV (Français)"/>
				<Document name="cv_en" url="public/docs/CV_en.pdf" text="CV (English)"/>
			</div>
		);
	}
}

export default Documents;
