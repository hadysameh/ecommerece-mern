import { Link } from "react-router-dom"
import axios from 'axios'
import React,{useState,useEffect} from 'react';

const Cart = props => {
  const [cartData, setcartData] = useState([])
  const [totalPrice, settotalPrice] = useState(0)
  
    const fetchCartData=()=>{
      console.log('will fetch')
      axios.get('api/cart/')
      .then( (res)=>{
          let resCartData = res.data
          setcartData(resCartData)

          settotalPrice( resCartData.reduce((a,b)=>parseFloat(b.product.price)+a,0) )

          console.log(res.data)
           
      }).catch(err=>{
        console.log(err)
      })
    }
    const handelOnDeleteCartProduct=(id)=>{
      axios.delete('api/cart/delete',{data:{id}})
      .then(res=>{
        // console.log(res)
        // console.log(id)

        fetchCartData()
      })
    }
    

    useEffect(()=>{
      
      fetchCartData()
      // settotalPrice( cartData.reduce((a,b)=>parseFloat(b.product.price)+a,0) )
      
    },[])
  
    
    return (
      <div>
        <div className="breadcrumb parallax-container">
          <div className="parallax"><img src={ "./image/prlx.jpg"} alt="#"/></div>
          <h1>Shopping Cart</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Shopping Cart</Link></li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div id="column-left" className="col-sm-3 hidden-xs column-left">
              <div className="Categories left-sidebar-widget">
                <div className="columnblock-title">Top Categories</div>
                <div className="category_block">
                  <ul className="box-category treeview-list treeview">
                    <li><a href="#" className="activSub">Desktops</a>
                      <ul>
                        <li><a href="#">PC</a></li>
                        <li><a href="#">MAC</a></li>
                      </ul>
                    </li>
                    <li><a href="#" className="activSub">Laptops &amp; Notebooks</a>
                      <ul>
                        <li><a href="#">Macs</a></li>
                        <li><a href="#">Windows</a></li>
                      </ul>
                    </li>
                    <li><a href="#" className="activSub">Components</a>
                      <ul>
                        <li><a href="#">Mice and Trackballs</a></li>
                        <li><a href="#" className="activSub" >Monitors</a>
                          <ul>
                            <li><a href="#"  >test 1</a></li>
                            <li><a href="#"  >test 2</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Windows</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Software</a></li>
                    <li><a href="#">Phones & PDAs</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">MP3 Players</a></li>
                  </ul>
                </div>
              </div>
                </div>
            <div className="col-sm-9" id="content">
              <form encType="multipart/form-data" method="post" action="#">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td className="text-center">Image</td>
                        <td className="text-left">Product Name</td>
                        <td className="text-left">category</td>
                        <td className="text-left">remove</td>
                        <td className="text-right">Unit Price</td>
                        {/* <td className="text-right">Total</td> */}
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map(cartItem=>(
                        <tr key={cartItem._id}>
                          <td className="text-center"><a href="product.html"><img className="img-thumbnail" style={{width:'56px'}}title="lorem ippsum dolor dummy" alt="lorem ippsum dolor dummy" src={"http://localhost:5000/"+cartItem.product.img}/></a></td>
                          <td className="text-left"><a href="product.html">{cartItem.product.productName}</a></td>
                          <td className="text-left">{cartItem.product.category}</td>
                          <td className="text-left"><div style={{maxWidth: "200px"}} className="input-group btn-block">
                            
                            <span className="input-group-btn">
                            
                            <button  className="btn btn-danger" onClick={()=>handelOnDeleteCartProduct(cartItem._id)} title="" data-toggle="tooltip" type="button" data-original-title="Remove"><i className="fa fa-times-circle"></i></button>
                            </span></div>
                          </td>
                          <td className="text-right">{cartItem.product.price}</td>
                          {/* <td className="text-right">$254.00</td> */}
                        </tr>
                  
                      ))}
                       </tbody>
                  </table>
                </div>
              </form>

              <form action="payment" method="POST">
                <script 
                    src="//checkout.stripe.com/v2/checkout.js"
                    className="stripe-button"
                    data-key="<%= key %>"
                    data-amount="2500"
                    data-currency="inr"
                    data-name="Crafty Gourav"
                    data-description="Handmade Art and Craft Products"
                    data-locale="auto" >
                  </script>
              </form>
              
              <h2>What would you like to do next?</h2>
              
              
              <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                  <table className="table table-bordered">
                    <tbody>                                             
                      <tr>
                        <td className="text-right"><strong>Total:</strong></td>
                        <td className="text-right">{ totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="buttons">
                <div className="pull-left"><Link className="btn btn-default" to='/'>Continue Shopping</Link></div>
                <div  className="pull-right">
                  
                  
                  <form action={process.env.REACT_APP_Server_url+"api/purchase/create-checkout-session"} method="POST">
                    {/* {cartData.map(cartItem=>(
                      <input type='hidden' name='cartItem' value={cartItem.product} />
                    ))} */}
                    {console.log(cartData)}
                    <input type='hidden' name='cartData' value={JSON.stringify(cartData)} />
                    <button type="submit"  className="btn btn-primary">
                      Checkout
                    </button>
                  </form>
                </div>
                {/* <div className="pull-right"><Link className="btn btn-primary" to=''>Checkout</Link></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        );
};



export default Cart;