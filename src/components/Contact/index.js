import React from 'react'

function Contact() {
  return (
    <div id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-md-3">
          <div className="contact">
            <form>
              <div className="row">
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Name" type="text" name="Name" />
                </div>
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Phone" type="text" name="Email" />
                </div>
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Email" type="text" name="Email" />
                </div>
                <div className="col-sm-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                </div>
                <div className="col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
