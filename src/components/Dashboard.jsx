import React, { useEffect, useState } from 'react'
import "../assets/scss/components/dashboard.scss";
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
const Dashboard = () => {

    const [users, setuser] = useState([{}]);
    const [photo, setphot] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setphot(user.photoURL);
                console.log(user);
                setuser(user);
                // ...
            } else {
                // User is signed out
                window.location.href = "/";
                // ...
            }
        });
    }, []);
    return (
        <>
            <div className='main-dashboard'>
                <div class="app">
                    <header class="app-header">
                        <div class="app-header-logo">
                            <div class="logo">
                                <span class="logo-icon">
                                    <img src={photo} alt="profile" />
                                </span>
                                <h1 class="logo-title">
                                    <span>{users.displayName}</span>
                                </h1>
                            </div>
                        </div>

                        <div class="app-header-mobile">
                            <button class="icon-button large">
                                <i class="ph-list"></i>
                            </button>
                        </div>

                    </header>
                    <div class="app-body">
                        <div class="app-body-navigation">
                            <nav class="navigation">
                                <a href="#">
                                    <i class="ph-browsers"></i>
                                    <span>Dashboard</span>
                                </a>
                                <a href="#">
                                    <i class="ph-check-square"></i>
                                    <span>Scheduled</span>
                                </a>
                                <a href="#">
                                    <i class="ph-swap"></i>
                                    <span>Profile</span>
                                </a>
                                <a href="#" onClick={() => auth.signOut()}>
                                    <i class="ph-swap"></i>
                                    <span>Log Out</span>
                                </a>
                            </nav>
                            <footer class="footer">
                                <h1>Wecare<small>©</small></h1>
                                <div>
                                    Hackit ©<br />
                                    All Rights Reserved 2022
                                </div>
                            </footer>
                        </div>
                        <div class="app-body-main-content">
                            <section class="service-section">
                                <h2>Service</h2>

                                <div class="mobile-only">
                                    <button class="flat-button">
                                        Toggle search
                                    </button>
                                </div>
                                <div class="tiles">
                                    <article class="tile">
                                        <div class="tile-header">
                                            <i class="ph-lightning-light"></i>
                                            <h3>
                                                <span>Electricity</span>
                                                <span>UrkEnergo LTD.</span>
                                            </h3>
                                        </div>
                                        <a href="#">
                                            <span>Go to service</span>
                                            <span class="icon-button">
                                                <i class="ph-caret-right-bold"></i>
                                            </span>
                                        </a>
                                    </article>
                                    <article class="tile">
                                        <div class="tile-header">
                                            <i class="ph-fire-simple-light"></i>
                                            <h3>
                                                <span>Heating Gas</span>
                                                <span>Gazprom UA</span>
                                            </h3>
                                        </div>
                                        <a href="#">
                                            <span>Go to service</span>
                                            <span class="icon-button">
                                                <i class="ph-caret-right-bold"></i>
                                            </span>
                                        </a>
                                    </article>
                                    <article class="tile">
                                        <div class="tile-header">
                                            <i class="ph-file-light"></i>
                                            <h3>
                                                <span>Tax online</span>
                                                <span>Kharkov 62 str.</span>
                                            </h3>
                                        </div>
                                        <a href="#">
                                            <span>Go to service</span>
                                            <span class="icon-button">
                                                <i class="ph-caret-right-bold"></i>
                                            </span>
                                        </a>
                                    </article>
                                </div>
                                <div class="service-section-footer">
                                    <p>Services are paid according to the current state of the currency and tariff.</p>
                                </div>
                            </section>
                            <section class="transfer-section">
                                <div class="transfer-section-header">
                                    <h2>Latest transfers</h2>
                                </div>
                                <div class="transfers">
                                    <div class="transfer">
                                        <div class="transfer-logo">
                                            <img src="https://assets.codepen.io/285131/apple.svg" />
                                        </div>
                                        <dl class="transfer-details">
                                            <div>
                                                <dt>Apple Inc.</dt>
                                                <dd>Apple ID Payment</dd>
                                            </div>
                                            <div>
                                                <dt>4012</dt>
                                                <dd>Last four digits</dd>
                                            </div>
                                            <div>
                                                <dt>28 Oct. 21</dt>
                                                <dd>Date payment</dd>
                                            </div>
                                        </dl>
                                        <div class="transfer-number">
                                            - $ 550
                                        </div>
                                    </div>
                                    <div class="transfer">
                                        <div class="transfer-logo">
                                            <img src="https://assets.codepen.io/285131/pinterest.svg" />
                                        </div>
                                        <dl class="transfer-details">
                                            <div>
                                                <dt>Pinterest</dt>
                                                <dd>2 year subscription</dd>
                                            </div>
                                            <div>
                                                <dt>5214</dt>
                                                <dd>Last four digits</dd>
                                            </div>
                                            <div>
                                                <dt>26 Oct. 21</dt>
                                                <dd>Date payment</dd>
                                            </div>
                                        </dl>
                                        <div class="transfer-number">
                                            - $ 120
                                        </div>
                                    </div>
                                    <div class="transfer">
                                        <div class="transfer-logo">
                                            <img src="https://assets.codepen.io/285131/warner-bros.svg" />
                                        </div>
                                        <dl class="transfer-details">
                                            <div>
                                                <dt>Warner Bros.</dt>
                                                <dd>Cinema</dd>
                                            </div>
                                            <div>
                                                <dt>2228</dt>
                                                <dd>Last four digits</dd>
                                            </div>
                                            <div>
                                                <dt>22 Oct. 21</dt>
                                                <dd>Date payment</dd>
                                            </div>
                                        </dl>
                                        <div class="transfer-number">
                                            - $ 70
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="app-body-sidebar">
                            <section class="payment-section">
                                <h2>Profile</h2>
                                <div class="payment-section-header">
                                    <p>Choose a card to transfer money</p>
                                    <div>
                                    </div>
                                </div>
                                <div class="payments">
                                    <div class="payment">
                                        <div class="card green">
                                            <span>01/22</span>
                                            <span>
                                                •••• 4012
                                            </span>
                                        </div>
                                        <div class="payment-details">
                                            <h3>Internet</h3>
                                            <div>
                                                <span>$ 2,110</span>
                                                <button class="icon-button">
                                                    <i class="ph-caret-right-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="payment">
                                        <div class="card olive">
                                            <span>12/23</span>
                                            <span>
                                                •••• 2228
                                            </span>
                                        </div>
                                        <div class="payment-details">
                                            <h3>Universal</h3>
                                            <div>
                                                <span>$ 5,621</span>
                                                <button class="icon-button">
                                                    <i class="ph-caret-right-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="payment">
                                        <div class="card gray">
                                            <span>03/22</span>
                                            <span>
                                                •••• 5214
                                            </span>
                                        </div>
                                        <div class="payment-details">
                                            <h3>Gold</h3>
                                            <div>
                                                <span>$ 3,473</span>
                                                <button class="icon-button">
                                                    <i class="ph-caret-right-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq">
                                    <p>Most frequently asked questions</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
