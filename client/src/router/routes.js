import {BrowserRouter as Router , Route ,Switch, useParams} from 'react-router-dom';
import Header from './../component/Header'
import ScrollToTtheTop from './../component/ScrollToTtheTop'
import Footer from './../component/Footer'
import Register from './../pages/register'
import Login from './../pages/login'
import Home from './../pages/home'
import Cart from './../pages/cart'
import Product from './../pages/product'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_Publishable_Key);



 let routes = (
    <Elements stripe={stripePromise}>
        <Router >
            <Header></Header>
            <ScrollToTtheTop/>
                <Switch>

                    <Route exact path='/'>
                        <ScrollToTtheTop/>
                        <Home></Home>
                    </Route>   

                    <Route  exact path="/product/:id?"  >
                        <ScrollToTtheTop/>
                        <Product/>
                    </Route>   

                    <Route exact path='/cart'>
                        <ScrollToTtheTop/>
                        <Cart/>
                    </Route>                              
                    
                    <Route exact path='/register'>
                        <ScrollToTtheTop/>
                        <Register></Register>
                    </Route>
                    
                    <Route exact path='/login'>
                        <ScrollToTtheTop/>
                        <Login></Login>
                    </Route>

                </Switch>
            <Footer></Footer>
        </Router>
    </Elements>
)
export default routes