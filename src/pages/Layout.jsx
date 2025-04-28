import React, { useState } from 'react';
import "../assets/css/layout.css";
import Mm from "../components/mm";
import CallAdmin from "../components/CallAdmin";
import EmailForm from "../components/EmailForm";
import AuthButton from "./Auth/AuthButton";
import { useNavigate } from 'react-router-dom';
// Import images correctly
import closecircle from "../assets/img/icon/close-circle.svg";
import logo from "../assets/img/logo.svg";
import searchIcon from "../assets/img/search.svg";
import basketIcon from "../assets/img/basket.svg";
import facebookIcon from '../assets/img/icon/Icon-facebook.svg';
import twitterIcon from '../assets/img/icon/Icon-twitter.svg';
import instagramIcon from '../assets/img/icon/icon-instagram.svg';
import youtubeIcon from '../assets/img/icon/Icon-youtube.svg';
import paypalIcon from "../assets/img/icon/paypal@2x.svg";
import americanExpressIcon from "../assets/img/icon/american express.svg";
import visaIcon from "../assets/img/icon/visa.svg";
import masterCardIcon from "../assets/img/icon/master card.svg";
import backToUpButtonIcon from '../assets/img/icon/back to up bottun.svg';

function Layout({ children }) {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()
  const handleClose = () => {
    setShow(false);
    console.log('handleClose called, show state is now:', false); 
  };
  const handleShow = () => {
    setShow(true);
    console.log('handleShow called, show state is now:', true);
  };
  console.log('Current show state before rendering modal:', show); 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className="container-fluid " id='layout'>

      {/*header */}
      < nav className="navbar navbar-expand-lg mb-4 ">
        <div className="container">
          <div className="collapse navbar-collapse desktop-only" id="navbarNav">
            <a className="navbar-brand" href="#"><img src={logo} alt="logo" style={{ width: '56px' }} onClick={() => navigate('/ ')}/></a>
            <ul className="navbar-nav mx-auto quick-links-head" style={{ paddingLeft: '20px' }}>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/ ')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/products ')}>Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/blog ')}>Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/faq')}>FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/contact ')}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center mobile-only ">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: 'none' }}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <h2 className="mobile-only"
            style={{ color: '#0951BE' }}
          >Tech Heim</h2>
          <div className="float-start">
            <button className="mobile-text" onClick={handleShow}>
              <img src={searchIcon} alt="search" style={{ width: '24px' }} />
            </button>
            <button className="mobile-text1 me-2"><img src={basketIcon} alt="basket" style={{ height: '45px' }} onClick={() => navigate('/account')}/></button>
            <AuthButton />
          </div>
        </div>
      </nav>
      {/* Modal */}
      {show && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header" style={{border:'none'}}>
              <div className="modal-body">
                <div style={{ width: '75%', border: '1px #444444 solid', padding: '11px', borderRadius: '10px', marginBottom: '20px' }}>
                  <input style={{ border: 'none', width: '90%', boxShadow: 'none', outline: 'none' }}
                    type="text"
                    placeholder="What can we help you to find ?"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  /><button style={{ backgroundColor: 'inherit', boxShadow: 'none', border: 'none', float: 'right', }}>
                    <img src={searchIcon} alt="search" /></button></div>
                <h5 style={{ float: 'left', marginInline: '10px' }}>Search about : </h5>
                <h5 style={{ color: '#0C68F4', float: 'left' }}>{searchQuery}</h5>
              </div>
              <span className="close" onClick={handleClose}>
                <button style={{ backgroundColor: 'inherit', boxShadow: 'none', border: 'none' }}>
                  <img src={closecircle} alt="" style={{ width: '28px', marginBottom: '40px' }} /></button></span>
            </div>
          </div>
        </div>
      )}
      <div className=" mobile-only mobile-search ">
        <form className="d-flex input-group rounded " style={{ backgroundColor: '#EDEDED', height: '50px' }}>
          <input
            className="form-control rounded"
            type="search"
            placeholder="What can we help you to find ?"
            aria-label="Search"
            style={{ border: 'none', backgroundColor: 'inherit', boxShadow: 'none', height: '50px' }} />
          <img src={searchIcon} alt="search" style={{ paddingRight: '25px' }} />
        </form>
      </div>
      {children}
      {/*footer */}
      <footer className="modern-footer pt-5 ">
        <div className="container footer-content desktop-only">
          <div className="row g-4 mb-5">
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Company</h3>
              <ul className="quick-links">
                <li><a href="#">about us</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status </a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Info</h3>
              <ul className="quick-links">
                <li><a href="#">How it works?</a></li>
                <li><a href="#">our promises</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="footer-title">Contact us</h3>
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
            <div className="col-lg-3 col-md-12">
              <h3 className="footer-title ">Sign up for News and updates</h3>
              <form className="mb-4" >
                <EmailForm />
              </form>
              <div className="col-lg-3 col-md-2">
                <div className='social-links ' style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '-10px'
                }}>
                  <a href="#" className="social-icon"><img src={facebookIcon} alt="facebook icon" /></a>
                  <a href="#" className="social-icon"><img src={twitterIcon} alt="twitter icon" /></a>
                  <a href="#" className="social-icon"><img src={instagramIcon} alt="instagram icon" /></a>
                  <a href="#" className="social-icon"><img src={youtubeIcon} alt="youtube icon" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-1"
              style={{
                position: 'relative',
                left: '25px',
              }}>
              <CallAdmin />
              <button
                style={{
                  backgroundColor: 'inherit',
                  border: 'none',
                  position: 'relative',
                  top: '130px'
                }}
                onClick={scrollToTop}
                aria-label="Back to top">
                <img
                  src={backToUpButtonIcon}
                  alt="Back to top"
                  style={{
                    backgroundColor: 'inherit',
                    width: '47px'
                  }} />
              </button></div>
          </div>
        </div>
        <div className="container desktop-only">
          <div className='social-link' style={{
            display: 'flex',
            gap: '6px',
            marginTop: '50px'
          }}>
            <a href="#" className="social-icon"><img src={paypalIcon} alt="paypal" /></a>
            <a href="#" className="social-icon"><img src={americanExpressIcon} alt="american express" /></a>
            <a href="#" className="social-icon"><img src={visaIcon} alt="visa" /></a>
            <a href="#" className="social-icon"><img src={masterCardIcon} alt="master card" /></a>
          </div></div>
        <div className="footer-content">
          <Mm />
        </div>
        <div className="footer-bottom desktop-only">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-6 text-center text-md-start">
                <p>&copy; 2024 YourBrand. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p>Made with by <a href="#">YourBrand</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Layout;