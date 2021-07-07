import MyAccountMenu from "./MyAccountMenu"
export default function Header(){
    return (
        <div>
            <div className="preloader loader" style={{display: "block"}}> <img src="image/loader.gif"  alt="#"/></div>

            <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="top-left pull-left">
                  <div className="language">
                    <form action="#" method="post" encType="multipart/form-data" id="language">
                      <div className="btn-group">
                        <button className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> English <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                          <li><a href="#">Arabic</a></li>
                          <li><a href="#"> English</a></li>
                          <li><a href="#"> French</a></li>
                        </ul>
                      </div>
                    </form>
                  </div>
                  <div className="currency">
                    <form action="#" method="post" encType="multipart/form-data" id="currency">
                      <div className="btn-group">
                        <button className="btn btn-link dropdown-toggle" data-toggle="dropdown"> <strong>USD</strong> <span className="caret"></span> </button>
                        <ul className="dropdown-menu">
                          <li><a href="#">Euro</a></li>
                          <li><a href="#">Pound</a></li>
                          <li><a href="#">USD</a></li>
                        </ul>
                      </div>
                    </form>
                  </div>
                  <div className="wel-come-msg"> Welcome to our online store! </div>
                </div>
                <div className="top-right pull-right">
                  <div id="top-links" className="nav pull-right">
                    <ul className="list-inline">
                      <li className="dropdown"><a href="#" title="My Account" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true"></i><span>My Account</span> <span className="caret"></span></a>
                        {/* <ul className="dropdown-menu dropdown-menu-right">
                          <li><a href="register.html">Register</a></li>
                          <li><a href="login.html">Login</a></li> */}
                          <MyAccountMenu></MyAccountMenu>
                        {/* </ul> */}
                      </li>
                      <li><a href="#" id="wishlist-total" title="Wish List (0)"><i className="fa fa-heart" aria-hidden="true"></i><span>Wish List</span><span> (0)</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-inner">
            <div className="col-sm-3 col-xs-3 header-left">
              <div id="logo"> <a href="index.html"><img src="image/logo.png" title="E-Commerce" alt="E-Commerce" className="img-responsive" /></a> </div>
            </div>
            <div className="col-sm-9 col-xs-9 header-right">
              <div id="search" className="input-group">
                <input type="text" name="search"  placeholder="Enter your keyword ..." className="form-control input-lg" />
                <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-lg"><span>Search</span></button>
                </span> </div>
              <div id="cart" className="btn-group btn-block">
                <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle cart-dropdown-button"> <span id="cart-total">
                <span>Shopping Cart</span><br/>
                3 item(s) - $254.00</span></button>
                <ul className="dropdown-menu pull-right cart-dropdown-menu">
                  <li>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-center"><a href="#"><img className="img-thumbnail" title="lorem ippsum dolor dummy" alt="lorem ippsum dolor dummy" src="image/product/7product56x72.jpg"/></a></td>
                          <td className="text-left"><a href="#">lorem ippsum dolor dummy</a></td>
                          <td className="text-right">x 1</td>
                          <td className="text-right">$254.00</td>
                          <td className="text-center"><button className="btn btn-danger btn-xs" title="Remove" type="button"><i className="fa fa-times"></i></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-center"><a href="#"><img className="img-thumbnail" title="lorem ippsum dolor dummy" alt="lorem ippsum dolor dummy" src="image/product/7product56x72.jpg"/></a></td>
                          <td className="text-left"><a href="#">lorem ippsum dolor dummy</a></td>
                          <td className="text-right">x 1</td>
                          <td className="text-right">$254.00</td>
                          <td className="text-center"><button className="btn btn-danger btn-xs" title="Remove" type="button"><i className="fa fa-times"></i></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-center"><a href="#"><img className="img-thumbnail" title="lorem ippsum dolor dummy" alt="lorem ippsum dolor dummy" src="image/product/7product56x72.jpg"/></a></td>
                          <td className="text-left"><a href="#">lorem ippsum dolor dummy</a></td>
                          <td className="text-right">x 1</td>
                          <td className="text-right">$254.00</td>
                          <td className="text-center"><button className="btn btn-danger btn-xs" title="Remove" type="button"><i className="fa fa-times"></i></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <div>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td className="text-right"><strong>Sub-Total</strong></td>
                            <td className="text-right">$210.00</td>
                          </tr>
                          <tr>
                            <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                            <td className="text-right">$2.00</td>
                          </tr>
                          <tr>
                            <td className="text-right"><strong>VAT (20%)</strong></td>
                            <td className="text-right">$42.00</td>
                          </tr>
                          <tr>
                            <td className="text-right"><strong>Total</strong></td>
                            <td className="text-right">$254.00</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-right"> <span className="btn-viewcart"><a href="cart.html"><strong><i className="fa fa-shopping-cart"></i> View Cart</strong></a></span> <span className="btn-checkout"><a href="checkout.html"><strong><i className="fa fa-share"></i> Checkout</strong></a></span> </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
            <nav id="menu" className="navbar">
                <div className="nav-inner">
                    <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
                    <button type="button" className="btn btn-navbar navbar-toggle" ><i className="fa fa-bars"></i></button>
                    </div>
                    <div className="navbar-collapse">
                    <ul className="main-navigation">
                        <li><a href="index.html"   className="parent"  >Home</a> </li>
                        <li><a href="category.html"   className="parent"  >Collection</a> </li>
                        <li><a href="category.html"   className="parent"  >Women</a> </li>
                        <li><a href="category.html"   className="parent"  >Men</a> </li>
                        <li><a href="#" className="active parent">Page</a>
                        <ul>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="blog.html" >Blog Page</a></li>
                            <li><a href="single-blog.html" >Singale Blog Page</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                            <li><a href="affiliate.html">Affiliate</a></li>
                            <li><a href="forgetpassword.html">Forget Password</a></li>
                        </ul>
                        </li>
                        <li><a href="blog.html" className="parent"  >Blog</a></li>
                        <li><a href="about-us.html" >About us</a></li>
                        <li><a href="contact.html" >Contact Us</a> </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
      )
}


