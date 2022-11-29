import React from 'react'

function Section() {
  return (
    <section className="slider_section">
    <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide" src="images/banner2.jpg" alt="First slide" />
          <div className="container">
            <div className="carousel-caption relative">
              <h1>Group BERLIN</h1>
            
              <a href="Javascript:void(0)">Read More</a>
            </div>
          </div>
        </div> 
      </div>
      <a className="bottom_arrow_scroll" href="#about"><img src="icon/errow.png" /></a>
    </div>
  </section>
  )
}

export default Section
