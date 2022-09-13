import React from "react";
import {Helmet} from 'react-helmet';


const About = () => {
	return (
		<>
		    <Helmet>
				<title>Wecare | About</title>
			</Helmet>
			<div className="content-wrapper" id="about">
				{/* <!-- second replaceble image --> */}
				<img
					className="img-absolute"
					src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/cityscapes-landing-page/master/img/city2.png"
					alt="City 2"
				/>
				<div className="grid" style={{marginTop: "90px"}}>
					<div
						className="grid-col-sm-12 grid-col-md-6 astonish"
						data-animation="fadeInLeft"
					>
						<h2 className="section-title" style={{fontSize: "3rem"}}>About Wecare</h2>
						<p>
							CityScapes is a fully responsive and customizable landing
							page template. All images can easily be replaced from the
							html side, without having to dig through the css.
						</p>
						<p>
							The full version of this template is available at Github
							and it comes with the SASS files in order to provide
							quicker customization features, for those who are
							developers.
						</p>
						<p>
							Javascript files are also included, they are used to
							enhance the user experience but apart from the menu.js
							file, they are all optional.
						</p>
					</div>
				</div>
			</div>

			<div
				id="reserve"
				className="content-wrapper-lg text-center astonish"
				data-animation="zoomIn"
			>
				<h2 className="section-title" style={{fontSize: "2.5rem"}}>Explore Our AI-BOT</h2>
				<p>
					CityScapes is great for any travel agency or tour agency, that
					wishes to showcase the focal points of a city. If you want a
					unique looking landing page that has a unique artistic style that
					will attract clients, then this is the template for you. Go ahead
					and download it for free from Github.
				</p>
				<a
					href="/ttps://github.com/Jesus-E-Rodriguez/cityscapes-landing-page"
					className="btn btn-outline-purple"
					target="_blank"
				>
					Download
				</a>
			</div>
		</>
	);
};
export default About;
