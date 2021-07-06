import $ from 'jquery';
export default function footer(props){
    return(
        <div>
            <div class="footer-top-cms parallax-container">
                <div class="parallax"><img src="image/prlx.jpg" alt="#"/></div>
                <div class="container">
                    <div class="row">
                    <div class="newslatter">
                        <form>
                        <h5>SIGN UP FOR OUR DISCOUNTS TODAY!</h5>
                        <h4 class="title-subline">Be sure to follow our blog and sign up for all of our mailing updates!</h4>
                        <div class="input-group">
                            <input type="text" class=" form-control" placeholder="Your-email@website.com"/>
                            <button type="submit" value="Sign up" class="btn btn-large btn-primary">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    <div class="footer-social">
                        <ul>
                        <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="youtube"><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="container">
                <h3 class="client-title">Favourite Brands</h3>
                <h4 class="title-subline">The High Quality Products</h4>
                <div id="brand_carouse" class="owl-carousel brand-logo">
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand1.png" alt="Disney" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand2.png" alt="Dell" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand3.png" alt="Harley" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand4.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand6.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand7.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand8.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand9.png" alt="Canon" class="img-responsive" /></a> </div>
                    <div class="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" class="img-responsive" /></a> </div>
                </div>
                </div>
                <footer>
                <div class="cms_searvice">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                        <div class="cms-block1 z-depth-5">
                            <h4>Free Shipping</h4>
                            <p>All order over $150</p>
                        </div>
                        </div>
                        <div class="col-md-3 ">
                        <div class="cms-block2">
                            <h4>30 Days Returns</h4>
                            <p>Money Back Guarantee</p>
                        </div>
                        </div>
                        <div class="col-md-3 ">
                        <div class="cms-block3">
                            <h4>24/7 Support</h4>
                            <p>Feel free to Contact us</p>
                        </div>
                        </div>
                        <div class="col-md-3 ">
                        <div class="cms-block4">
                            <h4>Online Shopping </h4>
                            <p>Save Up to 70% on Store</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-sm-3 footer-block">
                        <h5 class="footer-title">INFORMATION</h5>
                        <ul class="list-unstyled ul-wrapper">
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
                    <div class="col-sm-3 footer-block">
                        <h5 class="footer-title">MY ACCOUNT</h5>
                        <ul class="list-unstyled ul-wrapper">
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
                    <div class="col-sm-3 footer-block">
                        <h5 class="footer-title">Extras</h5>
                        <ul class="list-unstyled ul-wrapper">
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
                    <div class="col-sm-3 footer-block">
                        <div class="content_footercms_right">
                        <div class="footer-contact">
                            <h5 class="contact-title footer-title">Contact Us</h5>
                            <ul class="ul-wrapper">
                            <li><i class="fa fa-map-marker"></i><span class="location2">Offices Addresss:<br/>
                                218,Drimlend Building<br/>
                                Sarthana jakatnaka, Surat City <br/>
                                Gujarat-395013  INDIA</span></li>
                            <li><i class="fa fa-envelope"></i><span class="mail2"><a href="#">info@localhost.com</a><br/>
                                <a href="#">your@domain.com</a></span></li>
                            <li><i class="fa fa-mobile"></i><span class="phone2">+91 0987-654-321<br/>
                                +91 0987-654-321</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div id="bottom-footer">
                    <ul class="footer-link">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="copyright"> Copyright - <a class="yourstore" href="http://www.lionode.com/"> Created by Lionode &copy; 2017 </a></div>
                    <div class="footer-bottom-cms">
                        <div class="footer-payment">
                        <ul>
                            <li class="mastero"><a href="#"><img alt="" src="image/payment/mastero.jpg"/></a></li>
                            <li class="visa"><a href="#"><img alt="" src="image/payment/visa.jpg"/></a></li>
                            <li class="currus"><a href="#"><img alt="" src="image/payment/currus.jpg"/></a></li>
                            <li class="discover"><a href="#"><img alt="" src="image/payment/discover.jpg"/></a></li>
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