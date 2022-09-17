import { Link } from "react-router-dom";
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import Wecare from '../assets/img/Wecare.png';

const Header = () => {
    const provider = new GoogleAuthProvider();
	const loginwithgoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				window.location.href = "/dashboard";
				
				// ...
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}

	return (
		<header>
			<nav className="main-nav" id="main-nav">
				<div className="content-wrapper-sm">
					<Link className="navbar-brand" to="/">
						<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
							<img width={70} height={70} src={"https://user-images.githubusercontent.com/86917304/189974862-abcfeac0-b5ed-44d2-8eb4-8e2a05a59294.png"} alt="logo" />
							<span style={{ marginLeft: "13px" }}>Wecare</span>
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
						<Link to={"/userform"}>
						<li style={{cursor: "pointer"}}>
							<a style={{ backgroundColor: "#C4AC75" , color: "black", padding: "10px 20px", marginTop: "-10px" }}>
								Book Your Appointment
							</a>
						</li>
						</Link>
						<li onClick={loginwithgoogle} style={{cursor: "pointer"}}>
							<a style={{ border: `2px solid #c4ac8c` , color: "white", padding: "10px 20px", marginTop: "-11px" }}>
								Doctor Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
