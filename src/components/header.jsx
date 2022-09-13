import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="main-nav" id="main-nav">
				<div className="content-wrapper-sm">
					<Link className="navbar-brand" to="/">WeCare</Link>
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
