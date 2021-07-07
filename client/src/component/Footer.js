import $ from 'jquery';
export default function footer(props){
    return(
        <div>
            <div className="footer-top-cms parallax-container">
                <div className="parallax"><img src="image/prlx.jpg" alt="#"/></div>
                <div className="container">
                    <div className="row">
                    <div className="newslatter">
                        <form>
                        <h5>SIGN UP FOR OUR DISCOUNTS TODAY!</h5>
                        <h4 className="title-subline">Be sure to follow our blog and sign up for all of our mailing updates!</h4>
                        <div className="input-group">
                            <input type="text" className=" form-control" placeholder="Your-email@website.com"/>
                            <button type="submit" value="Sign up" className="btn btn-large btn-primary">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    <div className="footer-social">
                        <ul>
                        <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="gplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <h3 className="client-title">Favourite Brands</h3>
                <h4 className="title-subline">The High Quality Products</h4>
                <div id="brand_carouse" className="owl-carousel brand-logo">
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand1.png" alt="Disney" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand2.png" alt="Dell" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand3.png" alt="Harley" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand4.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand6.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand7.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand8.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand9.png" alt="Canon" className="img-responsive" /></a> </div>
                    <div className="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" className="img-responsive" /></a> </div>
                </div>
                </div>
                <footer>
                <div className="cms_searvice">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                        <div className="cms-block1 z-depth-5">
                            <h4>Free Shipping</h4>
                            <p>All order over $150</p>
                        </div>
                        </div>
                        <div className="col-md-3 ">
                        <div className="cms-block2">
                            <h4>30 Days Returns</h4>
                            <p>Money Back Guarantee</p>
                        </div>
                        </div>
                        <div className="col-md-3 ">
                        <div className="cms-block3">
                            <h4>24/7 Support</h4>
                            <p>Feel free to Contact us</p>
                        </div>
                        </div>
                        <div className="col-md-3 ">
                        <div className="cms-block4">
                            <h4>Online Shopping </h4>
                            <p>Save Up to 70% on Store</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-3 footer-block">
                        <h5 className="footer-title">INFORMATION</h5>
                        <ul className="list-unstyled ul-wrapper">
                        <li><a href="contact.html">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">Gift Certificates</a></li>
                        <li><a href="#">View Cart</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Specials</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 footer-block">
                        <h5 className="footer-title">MY ACCOUNT</h5>
                        <ul className="list-unstyled ul-wrapper">
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Gift Certificates</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Affiliates</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 footer-block">
                        <h5 className="footer-title">Extras</h5>
                        <ul className="list-unstyled ul-wrapper">
                        <li><a href="#">Delivery information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Product Recall</a></li>
                        <li><a href="#">Gift Vouchers</a></li>
                        <li><a href="#">Help & FAQs</a></li>
                        <li><a href="#">Sale Only Today</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 footer-block">
                        <div className="content_footercms_right">
                        <div className="footer-contact">
                            <h5 className="contact-title footer-title">Contact Us</h5>
                            <ul className="ul-wrapper">
                            <li><i className="fa fa-map-marker"></i><span className="location2">Offices Addresss:<br/>
                                218,Drimlend Building<br/>
                                Sarthana jakatnaka, Surat City <br/>
                                Gujarat-395013  INDIA</span></li>
                            <li><i className="fa fa-envelope"></i><span className="mail2"><a href="#">info@localhost.com</a><br/>
                                <a href="#">your@domain.com</a></span></li>
                            <li><i className="fa fa-mobile"></i><span className="phone2">+91 0987-654-321<br/>
                                +91 0987-654-321</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div id="bottom-footer">
                    <ul className="footer-link">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="copyright"> Copyright - <a className="yourstore" href="http://www.lionode.com/"> Created by Lionode &copy; 2017 </a></div>
                    <div className="footer-bottom-cms">
                        <div className="footer-payment">
                        <ul>
                            <li className="mastero"><a href="#"><img alt="" src="image/payment/mastero.jpg"/></a></li>
                            <li className="visa"><a href="#"><img alt="" src="image/payment/visa.jpg"/></a></li>
                            <li className="currus"><a href="#"><img alt="" src="image/payment/currus.jpg"/></a></li>
                            <li className="discover"><a href="#"><img alt="" src="image/payment/discover.jpg"/></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <a id="scrollup">Scroll</a>
                </footer>

                
        </div>
    )
}