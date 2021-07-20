import React, { useEffect,useState } from 'react';
import { Route ,Link, withRouter} from 'react-router-dom';
import axios from 'axios'
const Home = (props) => {
    // let products=null;
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('/api/product/').then(res=>{
            // console.log(res)1
            setProducts(res.data.products)
            // console.log(products)
        })
    },[])
    const handelAddToCart=(product)=>{
        console.log(product)
        axios.post('api/cart/store',{product})
        .then((res)=>{
            // console.log(res)
            // history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='index'>
            <div className="mainbanner">
                <div id="main-banner" className="owl-carousel home-slider">
                    <div className="item"> <a href="#"><img src="image/banners/Main-Banner1.jpg" alt="main-banner1" className="img-responsive" /></a> </div>
                    <div className="item"> <a href="#"><img src="image/banners/Main-Banner2.jpg" alt="main-banner2" className="img-responsive" /></a> </div>
                    <div className="item"> <a href="#"><img src="image/banners/Main-Banner3.jpg" alt="main-banner3" className="img-responsive" /></a> </div>
                </div>
            </div>
            {/* ############################################################################################################ */}

            <div className="container">
                <div className="cms_banner">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="banner sub-hover">
                            <a href="#"><img src="image/banners/subbanner1.jpg" alt="Sub Banner1" className="img-responsive"/></a>
                            <div className="bannertext">
                            <h2>wooden </h2>
                            <p>From Top Brands</p>
                            <button className="btn">Shop Now</button>
                            </div>        
                        </div>
                    </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="banner sub-hover">
                            <a href="#"><img src="image/banners/subbanner2.jpg" alt="Sub Banner2" className="img-responsive"/></a>
                            <div className="bannertext">
                            <h2>furniture </h2>
                            <p>Latest Designer</p>
                            <button className="btn">Shop Now</button>
                            </div>            
                        </div>
                    </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="banner sub-hover">
                            <a href="#"><img src="image/banners/subbanner3.jpg" alt="Sub Banner3" className="img-responsive"/></a>
                            <div className="bannertext">
                            <h2>HomeTown </h2>
                            <p>Living Room Sets</p>
                            <button className="btn">Shop Now</button>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* ############################################################################################################ */}

            <div id="center">
                <div className="container">
                    <div className="row">
                    <div className="content col-sm-12">
                        <div className="customtab">
                        <h3 className="productblock-title">Our Collection</h3>
                        <div id="tabs" className="customtab-wrapper">
                            <ul className='customtab-inner'>
                            <li className='tab'><a href="#tab-furnitur">Popular</a></li>
                            <li className='tab'><a href="#tab-livin">Best Sellers</a></li>
                            <li className='tab'><a href="#tab-kitche">Specials</a></li>
                            <li className='tab'><a href="#tab-outdoo">New product</a></li>
                            </ul>
                        </div>
                        </div>
                        
                        <div id="tab-furnitur" className="tab-content">
                        <div className="row">
                        {products.map((product)=>(
                        
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12" key={product._id}>
                                <div className="item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock"> <Link to={'/product/'+product._id}> <img src={'http://localhost:5000/'+product.img} alt={product.name} title={product.name} className="img-responsive" /> <img src={'http://localhost:5000/'+product.img} alt="iPod Classic" title="iPod Classic" className="img-responsive" />  </Link>
                                            <ul className="button-group">
                                            <li>
                                                {/* <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List"  ><i className="fa fa-heart-o"></i></button> */}
                                            </li>
                                            <li>
                                                {/* <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button> */}
                                            </li>
                                            <li>
                                                <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                            </li>
                                            <li>
                                                <button type="button" className="addtocart-btn" title="Add to Cart"  onClick={()=>{handelAddToCart(product)}}> Add to Cart </button>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="caption product-detail">
                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                            <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">{product.productName}</a></h4>
                                            <p className="price product-price">${product.price}<span className="price-tax">Ex Tax: $100.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                            
                       
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product1-1.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <ul className="button-group">
                                            <li>
                                                <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                            </li>
                                            <li>
                                                <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                            </li>
                                            <li>
                                                <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                            </li>
                                            <li>
                                                <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="caption product-detail">
                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                            <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                            <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product2-2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  >Add to Cart</button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="less">$150.00</span><span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"><a href="product.html"> <img src="image/product/product3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product3-3.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product4-4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product5-5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product6-6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product7-7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="item">
                                <div className="product-thumb">
                                <div className="image product-imageblock"> <a href="product.html"> <img src="image/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src="image/product/product8-8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                    <ul className="button-group">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" title="Add to Cart"  > Add to Cart </button>
                                    </li>
                                    </ul>
                                </div>
                                <div className="caption product-detail">
                                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                                    <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Casual Shirt With Ruffle Hem</a></h4>
                                    <p className="price product-price">$122.00<span className="price-tax">Ex Tax: $100.00</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="viewmore">
                            <div className="btn">View More All Products</div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            
             </div>
    );
};

export default Home;