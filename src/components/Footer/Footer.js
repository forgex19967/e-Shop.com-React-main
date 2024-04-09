import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footer row row-cols-lg-3 row-cols-md-2 row-cols-12 d-flex justify-content-center mx-auto py-5">
            <div>
                <h4><i className="fas fa-phone"></i> Contact Us</h4>
            
            </div>
            <div>
                <h4><i className="far fa-address-card"></i> About Me</h4>
                <p>Pratibha Tiwari</p>
                <a href="https://sourcecodebd.github.io/nafi.com"><p>Website: pratibhat.com</p></a>
            </div>
            <div>
                <h4><i className="far fa-building"></i> Organization</h4>
                <p>Mumbai University</p>
            </div>

            <a href="#banner" className="text-white">
                <div className="scrollToTop">
                    <i className="fas fa-arrow-up"></i>
                </div>
            </a>
        </footer>
    );
};

export default Footer;