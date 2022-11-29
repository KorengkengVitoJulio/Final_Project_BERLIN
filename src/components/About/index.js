import React from 'react'
import data from 'D:/FinalProject_Front_End/finalproject-app/src/db.json'
function About() {
  return (
  <div id="about" className="about">
  <div className="container">
    <div className="row">   
      <div className="col-md-12">
        <div className="titlepage">
        {data.map(({title, subTitle}) => (
          <div><h2>{title}</h2>
          <span>{subTitle}</span>
          </div>
          ))};
            
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row flexcss">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-box">
          <h3>distracted by the readable </h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettersdistracted by the readable distracted by the readable , a</p>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-img">
          <figure><img src="images/aboutimg.png" alt="img" /></figure>
        </div>
      </div>
    </div>
    <a href="Javascript:void(0)">read more</a>
  </div>
</div>
  )
}

export default About
