import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			{/* <!-- Main Navigation --> */}
			{/* <Header /> */}
			{/* <!-- Main header --> */}

			<section className="hero-section">
				<div className="hero-content">
					<h1>Felling ill..!</h1>
					<h1> No worries, Chat with our MedBot </h1>
					<Link to="/">
						<button className='btn'>Chat Now</button>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Home;
