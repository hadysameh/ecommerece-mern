import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import axios from 'axios'
import { useHistory } from "react-router-dom";
const Product = (props) => {
    const [productData, setproductData] = useState({})

    const history = useHistory()
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
            console.log(productData.productName)
        })
    },[])

    const handelAddToCart=()=>{
        axios.post('api/cart/store',{product:productData})
        .then((res)=>{
            // console.log(res)
            history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div>
            
            <div className="breadcrumb parallax-container">
                <div className="parallax"><img src="/image/prlx.jpg" alt="#"/></div>
                <h1>Product</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="category.html">Desktops</a></li>
                    <li><a href="#">{productData.productName}</a></li>
                </ul>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="content col-sm-12">
                        <div className="row">
                            <div className="col-sm-5">
                            <div className="thumbnails">
                                <div><a className="thumbnail fancybox" href="image/product/product8.jpg" title="Casual Shirt With Ruffle Hem"><img src={'http://localhost:5000/'+productData.img} title="Casual Shirt With Ruffle Hem" alt="iPod Classic" /></a></div>
                                
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
                            <p className="product-desc"> 		
                                {productData.discription}</p>
                            <div id="product">
                                <div className="form-group">
                                <div className="qty">
                                    {/* <label>Qty</label>
                                    <input id="qty" placeholder="1" type="number"/> */}
                                    <ul className="button-group list-btn">
                                   
                                    <li>
                                        <button onClick={handelAddToCart} type="button" className="addtocart-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart"  ><i className="fa fa-shopping-bag"></i></button>
                                    </li>
                                    
                                    
                                    </ul>
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