import React from 'react'
import '../assets/scss/Home/styles.scss';
import '../assets/css/responsive.css'

const Home = () => {
    return (
        <>
            {/* <!-- Main Navigation --> */}
            <nav className="main-nav" id="main-nav">
                <div className="content-wrapper-sm">
                    <a href="/" className="navbar-brand">WeCare</a>
                    <div id="menu-button">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="/about">About</a></li>
                        <li><a href="/reserve">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* <!-- Main header --> */}
            <header>
                {/* <!-- First replaceble image --> */}
                <img className="img-absolute" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/cityscapes-landing-page/88c9b44e3def10ae253dd8d44b717cfa78cca42d/img/city.png" alt="City 1" />
                <div className="wrapper astonish animated fadeInDown">
                    <h1><strong>Team</strong>Hackit</h1>
                    <h2>We are the one who create future , with our atonishing ideas.</h2>
                </div>
            </header>

            {/* <!-- Main content --> */}
            <main>
                <div className="content-wrapper" id="about">
                    {/* <!-- second replaceble image --> */}
                    <img className="img-absolute" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/cityscapes-landing-page/master/img/city2.png" alt="City 2" />
                    <div className="grid">
                        <div className="grid-col-sm-12 grid-col-md-6 astonish" data-animation="fadeInLeft">
                            <h2 className="section-title">About Wecare</h2>
                            <p>CityScapes is a fully responsive and customizable landing page template. All images can easily be replaced from the html side, without having to dig through the css.</p>
                            <p>The full version of this template is available at Github and it comes with the SASS files in order to provide quicker customization features, for those who are developers.</p>
                            <p>Javascript files are also included, they are used to enhance the user experience but apart from the menu.js file, they are all optional.</p>
                        </div>
                    </div>
                </div>

                <div id="reserve" className="content-wrapper-lg text-center astonish" data-animation="zoomIn">
                    <h2 className="section-title">Explore Our AI-BOT</h2>
                    <p>CityScapes is great for any travel agency or tour agency, that wishes to showcase the focal points of a city. If you want a unique looking landing page that has a unique artistic style that will attract clients, then this is the template for you. Go
                        ahead and download it for free from Github.</p>
                    <a href="/ttps://github.com/Jesus-E-Rodriguez/cityscapes-landing-page" className="btn btn-outline-purple" target="_blank">Download</a>
                </div>

                <div className="content-wrapper" id="contact">
                    {/* <!-- Third replaceble image --> */}
                    <img className="img-absolute" src="https://raw.githubusercontent.com/Jesus-E-Rodriguez/cityscapes-landing-page/master/img/city3.png" alt="City 3" />

                    {/* <!-- Custom form, important note: you will need additional code in order to make this form work --> */}
                    <form className="contact-form astonish" action="#" method="post" data-animation="fadeInRight">
                        <h2 className="section-title">Contact Us</h2>
                        <div className="grid">
                            <div className="grid-col-sm-12 grid-col-md-6">
                                <div className="form-group">
                                    <input type="text" name="firstName" required />
                                    <label for="firstName">First Name:</label>
                                </div>
                            </div>
                            <div className="grid-col-sm-12 grid-col-md-6">
                                <div className="form-group">
                                    <input type="text" name="lastName" required />
                                    <label for="lasttName">Last Name:</label>
                                </div>
                            </div>
                            <div className="grid-col-sm-12">
                                <div className="form-group">
                                    <input type="text" name="email" required />
                                    <label for="email">Email:</label>
                                </div>
                            </div>
                            <div className="grid-col-sm-12">
                                <div className="form-group">
                                    <textarea name="message" required></textarea>
                                    <label for="message">Message:</label>
                                </div>
                            </div>
                        </div>
                        <input className="btn btn-outline-teal" type="submit" value="Send" />
                    </form>
                </div>

                {/* <!-- This is an embedded Google map, this is easily customizable especially if you get a Google API key, this will allow for more customizable features. --> */}
                {/* eslint-disable-next-line */}
                <div class="mapouter">
                    <div class="gmap_canvas">
                    {/* eslint-disable-next-line */}
                        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Manav Rachna International Institute Of Research And Studies&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <a href="https://mcpenation.com/">https://mcpenation.com</a>
                    </div>
                </div>
            </main>
            <footer>
                <div className="content-wrapper-sm display-flex-between">
                    {/* <!-- Easily replaceble copyright information --> */}
                    <small>© {new Date().getFullYear()} , WeCare Copyright , All rights reserved </small>



                    {/* <!-- Make sure to edit the links so that they go to your social media. --> */}
                    <div className="social-links">
                        <h5>Made With ♥ By Team Hackit</h5>
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="/"><i className="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
