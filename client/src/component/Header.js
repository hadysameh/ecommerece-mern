import { Link } from "react-router-dom"
import MyAccountMenu from "./MyAccountMenu"
import axios from 'axios'
import React,{useState,useEffect} from 'react';
export default function Header(){
    const [cartData, setcartData] = useState([])
    const [totalPrice, settotalPrice] = useState(0)
    const fetchCartData=()=>{
      axios.get('api/cart/')
      .then((res)=>{
          // console.log(res.data)
          setcartData(res.data)
          settotalPrice(cartData.reduce((a,b)=>parseFloat(b.product.price)+a,0))

          
      }).catch(err=>{
        console.log(err)
      })
    }
    const handelOnDeleteCartProduct=(id)=>{
      axios.delete('api/cart/delete',{data:{id}})
      .then(res=>{
        console.log(res)
        console.log(id)

        fetchCartData()
      })
    }
    useEffect(()=>{
      fetchCartData()
    },[cartData])
    return (
        <div>
            <div className="preloader loader" style={{display: "block"}}> <img src="/image/loader.gif"  alt="#"/></div>

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
                          <MyAccountMenu></MyAccountMenu>                       
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
              <div id="logo"> <Link to="/"><img src="/image/logo.png" title="E-Commerce" alt="E-Commerce" className="img-responsive" /></Link> </div>
            </div>
            <div className="col-sm-9 col-xs-9 header-right">
              <div id="search" className="input-group">
                <input type="text" name="search"  placeholder="Enter your keyword ..." className="form-control input-lg" />
                <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-lg"><span>Search</span></button>
                </span> </div>
              <div id="cart" className="btn-group btn-block">
                <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle cart-dropdown-button" onClick={fetchCartData}> <span id="cart-total">
                <span>Shopping Cart</span><br/>
                {cartData.length} item(s)- ${totalPrice}</span></button>
                <ul className="dropdown-menu pull-right cart-dropdown-menu">
                {cartData.map((cartItem)=>(
                            <li key={cartItem._id}>
                            <table className="table table-striped">
                              <tbody>
                                <tr>
                                  
                                  <td className="text-center"><Link to={'product/'+cartItem.product._id}><img className="img-thumbnail" style={{width:'56px'}}title="lorem ippsum dolor dummy" alt="lorem ippsum dolor dummy" src={cartItem.product.img?"http://localhost:5000/"+cartItem.product.img:''}/></Link></td>
                                  <td className="text-left"><Link to={'product/'+cartItem.product._id}>{cartItem.product.productName}</Link></td>
                                  <td className="text-right">{cartItem.product.price+'$'}</td>
                                  <td className="text-center"><button className="btn btn-danger btn-xs" onClick={()=>handelOnDeleteCartProduct(cartItem._id)} title="Remove" type="button"><i className="fa fa-times"></i></button></td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                          ))}
                  
                  <li>
                    <div>
                      <table className="table table-bordered">
                        <tbody>
                         
                          <tr>
                            <td className="text-right"><strong>Total</strong></td>
                            <td className="text-right">$254.00</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-right"> <span className="btn-viewcart"><Link to='/cart'><strong><i className="fa fa-shopping-cart"></i> View Cart</strong></Link></span> <span className="btn-checkout"><a href="checkout.html"><strong><i className="fa fa-share"></i> Checkout</strong></a></span> </p>
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
                        <li><Link to='/'  className="parent"  >Home</Link> </li>
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


