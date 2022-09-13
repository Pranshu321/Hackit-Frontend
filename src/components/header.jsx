import { Link } from "react-router-dom";
// import Wecare from '../assets/img/Wecare.png';

const Header = () => {
	return (
		<header>
			<nav className="main-nav" id="main-nav">
				<div className="content-wrapper-sm">
					<Link className="navbar-brand" to="/">
					<div style={{display: "flex" , flexDirection: "row" , alignItems: "center" , justifyContent: "center" }}>
					<img width={70} height={70} src={"https://user-images.githubusercontent.com/86917304/189974862-abcfeac0-b5ed-44d2-8eb4-8e2a05a59294.png"} alt="logo" />
					<span style={{marginLeft: "13px"}}>Wecare</span>
					</div>
					</Link>
					<div id="menu-button">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<ul className="nav-links">
                        <li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
