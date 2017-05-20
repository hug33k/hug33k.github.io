/* React */
import React, { Component } from "react";
/* Icons */
import User from "mdi-react/AccountIcon";
import Age from "mdi-react/CakeVariantIcon";
import Work from "mdi-react/BriefcaseIcon";
import Location from "mdi-react/MapMarkerIcon";

class Intro extends Component {

	render() {
		return (
			<div id="intro">
				<div className="card">
					<div className="me"/>
					<div className="text list">
						<div className="item">
							<div className="key">
								<User/>
							</div>
							<div className="value">
								Hugo SCHOCH
							</div>
						</div>
						<div className="item">
							<div className="key">
								<Age/>
							</div>
							<div className="value">
								21
							</div>
						</div>
						<div className="item">
							<div className="key">
								<Work/>
							</div>
							<div className="value">
								Student / Developer
							</div>
						</div>
						<div className="item">
							<div className="key">
								<Location/>
							</div>
							<div className="value">
								Strasbourg, France
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
