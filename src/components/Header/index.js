
import React from 'react'

function Header() {
  return (
    <header>
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo"> <a href="index.html">Group Project</a> </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <div className="menu-area">
              <div className="limit-box">
                <nav className="main-menu">
                  <ul className="menu-area-main">
                    <li className="active"> <a href="index.html">Home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#service"> Service</a> </li>
                    <li> <a href="#screenshot">Screenshot</a> </li>
                    <li> <a href="#blog">Blog</a> </li>
                    <li> <a href="#contact">Contact us</a> </li>
                    <li className="mean-last"> <a href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header inner */} 
    </div></header>
  )
}

export default Header
