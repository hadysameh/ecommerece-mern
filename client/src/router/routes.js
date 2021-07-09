import {BrowserRouter as Router , Route ,Switch, useParams} from 'react-router-dom';
import Header from './../component/Header'
import Footer from './../component/Footer'
import Register from './../pages/register'
import Login from './../pages/login'
import Home from './../pages/home'

import Product from './../pages/product'
 let routes = (
    <Router >
        <Header></Header>
            <Switch>

                <Route exact path='/'>
                    <Home></Home>
                </Route>   

                <Route  exact path="/product/:id?"  >
                    <Product/>
                </Route>             
                
                <Route exact path='/about'>
                    about
                </Route>
                
                <Route exact path='/register'>
                    <Register></Register>
                </Route>
                
                <Route exact path='/login'>
                    <Login></Login>
                </Route>

            </Switch>
        <Footer></Footer>
    </Router>
)
export default routes