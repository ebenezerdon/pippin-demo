import React from 'react'

const NavbarComponent = () => {
    return (
        <nav className="navbarbg">
            <div className="nav-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="far fa-play-circle" /> &nbsp;
                <a href="index.html" className="brand-logo">
                    LearnGround
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="Science.html">Science</a>
                    </li>
                    <li>
                        <a href="Technology.html">Technology</a>
                    </li>
                    <li>
                        <a href="Technology.html">Engineering</a>
                    </li>
                    <li>
                        <a href="Arts.html">Arts</a>
                    </li>
                    <li>
                        <a href="Mathematics.html">Mathematics</a>
                    </li>

                    <li>
                        <a href="SignIn.html">SignIn</a>
                    </li>
                    <li>|</li>

                    <li>
                        <a href="SignUp.html">SignUp</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavbarComponent
