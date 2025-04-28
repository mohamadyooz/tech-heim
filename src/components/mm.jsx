import React from 'react'
import CallAdmin from './CallAdmin';

const Mm = () => {
  return (
    <div className='container-fluid mobile-only'>
      <div style={{
        position: 'relative',
        top: '-32px'
      }}>
        <CallAdmin />

        <button
          style={{
            backgroundColor: 'inherit',
            border: 'none',
            paddingBottom: '40px',
            float: 'right'
          }}>
          <img
            src='src\assets\img\icon\back to up bottun.svg'
            alt="My Image"
            style={{
              marginTop:'2px',
              backgroundColor: 'inherit',
              width: '46px'
            }} />
        </button>
      </div>


      <div className="container">
        <h5 className="" style={{
          color: '#ffffff'

        }}

        >Sign up for News and updates</h5>
        <form className="mb-4" >
          <div className="mb-3">
            <input
              style={{
                backgroundColor: 'inherit',
                WebkitTextFillColor: 'white',
                height: '45px'

              }}
              type="email"
              className="form-control newsletter-input "
              placeholder=" E-mail Address"
            />
          </div>
        </form>
      </div>
      <div className='accordion ' id='accordionPanelsStayOpenExample' >
        <div className='accordion-item'
          style={{
            backgroundColor: 'inherit',
            border: 'none'
          }}>
          <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'
              style={{
                backgroundColor: 'inherit',
                color: '#ffffff',
                borderBottom: 'inherit',
                paddingBottom: '0px',
                paddingLeft: '0px'

              }}>
              <h5>Company</h5>

            </button>
          </h2>
          <div id='panelsStayOpen-collapseOne' className='accordion-collapse collapse bgc ' aria-labelledby='panelsStayOpen-headingOne'>
            <div className='accordion-body'>
              <div className="col-lg-3 col-md-6">

                <ul className="quick-links">
                  <li><a href="#">about us</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'
          style={{
            backgroundColor: 'inherit',
            border: 'none'
          }}>
          <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseTwo' aria-expanded='false' aria-controls='panelsStayOpen-collapseTwo'
              style={{
                backgroundColor: 'inherit',
                color: '#ffffff',
                border: 'inherit',
                paddingBottom: '0px',
                paddingLeft: '0px'
              }}>
              <h5>Info</h5>
            </button>
          </h2>
          <div id='panelsStayOpen-collapseTwo' className='accordion-collapse collapse bgc' aria-labelledby='panelsStayOpen-headingTwo'>
            <div className='accordion-body'>
              <div className="col-lg-3 col-md-6">

                <ul className="quick-links">
                  <li><a href="#">How it works?</a></li>
                  <li><a href="#">our promises</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item' style={{
          backgroundColor: 'inherit',
          border: 'none'
        }}>
          <h2 className='accordion-header' id='panelsStayOpen-headingThree'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseThree' aria-expanded='false' aria-controls='panelsStayOpen-collapseThree'
              style={{
                backgroundColor: 'inherit',
                color: '#ffffff',
                border: 'inherit',
                paddingBottom: '30px',
                paddingLeft: '0px'
              }}>
              <h5>Contact us</h5>
            </button>
          </h2>
          <div id='panelsStayOpen-collapseThree' className='accordion-collapse collapse bgc' aria-labelledby='panelsStayOpen-headingThree'>
            <div className='accordion-body'>
              <div className="col-lg-3 col-md-6">

                <ul className="contact-info mb-4">
                  <li>

                    <span>123 Main Street, Anytown,USA</span>
                  </li>
                  <li>

                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li>

                    <span>TechHeimSupport@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-2">
        <div className="social-links">
          <div className='social-links1'>
            <a href="#" className="social-icon"><img src="src\assets\img\icon\paypal@2x.svg" alt="paypal" /></a>
            <a href="#" className="social-icon"><img src="src\assets\img\icon\american express.svg" alt="american express" /></a>
            <a href="#" className="social-icon"><img src="src\assets\img\icon\visa.svg" alt="visa" /></a>
            <a href="#" className="social-icon"><img src="src\assets\img\icon\master card.svg" alt="master card" /></a>
          </div>
          <div className='social-links'>
            <a href="#" className="social-icon"><img src='src\assets\img\icon\Icon-facebook.svg'></img></a>
            <a href="#" className="social-icon"><img src='src\assets\img\icon\Icon-twitter.svg'></img></a>
            <a href="#" className="social-icon"><img src='src\assets\img\icon\icon-instagram.svg'></img></a>
            <a href="#" className="social-icon"><img src='src\assets\img\icon\Icon-youtube.svg'></img></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Mm;