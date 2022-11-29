import React from 'react'

function Screenshot() {
  return (
    <div id="screenshot" className="Screenshot">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Screenshot</h2>
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br />using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active"> <img className="first-slide" src="images/banner.png" alt="First slide" /> </div>
              <div className="carousel-item"> <img className="second-slide" src="images/banner.png" alt="Second slide" /> </div>
              <div className="carousel-item"> <img className="third-slide" src="images/banner.png" alt="Third slide" /> </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev"> <i className="fa fa-angle-left" /></a> <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next"> <i className="fa fa-angle-right" /></a> 
          </div>
          <div className="read-more">
            <a href="Javascript:void(0)">download now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Screenshot
