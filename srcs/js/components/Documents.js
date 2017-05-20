/* React */
import React, { Component } from "react";
import { connect } from "react-redux";

class Document extends Component {

	getIcon = () => {
		switch (this.props.document.name) {
			case "cv_fr":
			case "cv_en":
				return <div className="cv_icon"/>;
			default:
				return this.props.document.name;
		}
	};

	render() {
		return (
			<div className={"card document " + this.props.document.name}>
				<a href={this.props.document.url} target="_blank">
					<div className="value">
						{this.props.document.text}
					</div>
					<div className="key">
						{this.getIcon()}
					</div>
				</a>
			</div>
		);
	}
}

class Documents extends Component {

	render() {
		let items = this.props.documents.map((item, index) => {
			return <Document key={index} document={item} />;
		});
		return (
			<div id="documents">
				{items}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		documents: state.documents
	};
};

export default connect(mapStateToProps)(Documents);
