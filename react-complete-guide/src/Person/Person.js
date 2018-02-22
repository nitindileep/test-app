import React from 'react';

const person = (props) => {
	return(
		<div className = "Person">
			<div className="Company">
				<p><b>{props.companyName}</b></p>
				<div className="SocialMedial">
				<a href="#" class="fa fa-twitter">&nbsp;3</a>&emsp;
				<a href="#" class="fa fa-twitter">&nbsp;3</a>
				</div>
			</div>
			<div className="Right">
				<div className="Retail">
					<p>{props.retail1}</p>
					<p>{props.retail2}</p>
				</div>
				<div className="Place">
					<p>{props.city}</p>
					<p>{props.state}</p>
				</div>
				<div className="Options">
					<div className="Fav">
						<b>&#x2606;</b>
					</div>
					<div className="More">
						<b>&hellip;</b>
					</div>	
				</div>
			</div>
		</div>
		);
};

export default person;