import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import axios from 'axios'
const Product = (props) => {
    const [productData, setproductData] = useState({})

    let { id } = useParams();
    useEffect(()=>{
        axios.get('api/product/show',{
            params: {
                id: id
              }
        })
        .then(res=>{
            console.log(res.data)
            setproductData(res.data)
            console.log(productData.name)
        })
    },[])
    
    return (
        <div>
            
            <div className="breadcrumb parallax-container">
                <div className="parallax"><img src="/image/prlx.jpg" alt="#"/></div>
                <h1>Product</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="category.html">Desktops</a></li>
                    <li><a href="#">Casual Shirt With Ruffle Hem</a></li>
                </ul>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="content col-sm-12">
                        <div className="row">
                            <div className="col-sm-5">
                            <div className="thumbnails">
                                <div><a className="thumbnail fancybox" href="image/product/product8.jpg" title="Casual Shirt With Ruffle Hem"><img src={'http://localhost:5000/'+productData.img} title="Casual Shirt With Ruffle Hem" alt="iPod Classic" /></a></div>
                                {/* <div id="product-thumbnail" className="owl-carousel">
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product1.jpg" title="iPod Classic"> <img src="/image/product/Pro-09.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product2.jpg" title="iPod Classic"> <img src="/image/product/Pro-02.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product3.jpg" title="iPod Classic"> <img src="/image/product/Pro-05.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product4.jpg" title="iPod Classic"> <img src="/image/product/Pro-08.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product5.jpg" title="iPod Classic"> <img src="/image/product/Pro-06.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product6.jpg" title="iPod Classic"> <img src="/image/product/Pro-04.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                <div className="item">
                                    <div className="image-additional"><a className="thumbnail fancybox" href="image/product/product7.jpg" title="iPod Classic"> <img src="/image/product/Pro-09.jpg" title="iPod Classic" alt="iPod Classic" /></a></div>
                                </div>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-sm-7 prodetail">
                            <h1 className="productpage-title">{productData.productName}</h1>
                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span><span className="riview"><a href="#">1 reviews</a> / <a href="#">Write a review</a></span> </div>
                            <ul className="list-unstyled productinfo-details-top">
                                <li>
                                <h2 className="productpage-price">${productData.price}</h2>
                                </li>
                            </ul>
                            <hr/>
                            <ul className="list-unstyled product_info">
                                <li>
                                <label>Brand:</label>
                                <span> <a href="#">Apple</a></span></li>
                                <li>
                                <label>Product Code:</label>
                                <span> product 20</span></li>
                                <li>
                                <label>Availability:</label>
                                <span> {productData.count}pcs</span></li>
                            </ul>
                            <hr/>
                            <p className="product-desc"> More room to move.		
                                {productData.discription}</p>
                            <div id="product">
                                <div className="form-group">
                                <div className="row">
                                    <div className="Sort-by col-md-6">
                                    <label>Sort by</label>
                                    <select id="select-by-size" className="selectpicker form-control">
                                        <option  >Small</option>
                                        <option >Medium</option>
                                        <option >Large</option>
                                    </select>
                                    </div>
                                    <div className="Color col-md-6">
                                    <label>Color</label>
                                    <select id="select-by-color" className="selectpicker form-control">
                                        <option  >Blue</option>
                                        <option >Green</option>
                                        <option >Orange</option>
                                        <option >White</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="qty">
                                    <label>Qty</label>
                                    <input id="qty" placeholder="1" type="number"/>
                                    <ul className="button-group list-btn">
                                    <li>
                                        <button type="button" className="wishlist" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i className="fa fa-shopping-bag"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="compare" data-toggle="tooltip" data-placement="top" title="Compare this Product" ><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button type="button" className="quick-view" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="productinfo-tab">
                            <ul className="nav nav-tabs">
                            <li className="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
                            <li><a href="#tab-review" data-toggle="tab">Reviews (1)</a></li>
                            </ul>
                            <div className="tab-content">
                            <div className="tab-pane active" id="tab-description">
                                <div className="cpt_product_description ">
                                <div>
                                    <p> <strong>More room to move.</strong></p>
                                    <p> With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.</p>
                                    <p> <strong>Cover Flow.</strong></p>
                                    <p> Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.</p>
                                    <p> <strong>Enhanced interface.</strong></p>
                                    <p> Experience a whole new way to browse and view your music and video.</p>
                                    <p> <strong>Sleeker design.</strong></p>
                                    <p> Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.</p>
                                </div>
                                </div>
                                </div>
                            <div className="tab-pane" id="tab-review">
                                <form className="form-horizontal">
                                <div id="review"></div>
                                <h2>Write a review</h2>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <label className="control-label" htmlFor="input-name">Your Name</label>
                                    <input type="text" name="name" id="input-name" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <label className="control-label" htmlFor="input-review">Your Review</label>
                                    <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                                    <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <label className="control-label">Rating</label>
                                    &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                    <input type="radio" name="rating"/>
                                    &nbsp;
                                    <input type="radio" name="rating"/>
                                    &nbsp;
                                    <input type="radio" name="rating"/>
                                    &nbsp;
                                    <input type="radio" name="rating"/>
                                    &nbsp;
                                    <input type="radio" name="rating"/>
                                    &nbsp;Good</div>
                                </div>
                                <div className="buttons clearfix">
                                    <div className="pull-right">
                                    <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <h3 className="productblock-title">Related Products</h3>
                        <h4 className="title-subline">What’s so special? Check it out!</h4>
                        <div className="box">
                            <div id="related-slidertab" className="row owl-carousel product-slider">
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src={"http://localhost:5000/"+productData.img} alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src={"http://localhost:5000/"+productData.img} alt="iPod Classic" title="iPod Classic" className="img-responsive" />

                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product2-2.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product4-4.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product5-5.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product6-6.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product7-7.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                            <div className="item">
                                <div className="product-thumb transition">
                                <div className="image product-imageblock"> <a href="product.html">
                                    <img src="/image/product/product8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    <img src="/image/product/product8-8.jpg" alt="iPod Classic" title="iPod Classic" className="img-responsive" />
                                    </a>
                                    <ul className="button-group">
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="wishlist" type="button" data-original-title="Add to Wish List"><i className="fa fa-heart-o"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="compare" type="button" data-original-title="Compare this Product"><i className="fa fa-exchange"></i></button>
                                    </li>
                                    <li>
                                        <button title="" data-placement="top" data-toggle="tooltip" className="quick-view" type="button" data-original-title="Quick View"><i className="fa fa-eye"></i></button>
                                    </li>
                                    <li>
                                        <button title="Add to Cart" className="addtocart-btn" type="button">Add to Cart</button>
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
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};

Product.propTypes = {
    
};

export default Product;