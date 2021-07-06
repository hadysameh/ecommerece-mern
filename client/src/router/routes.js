import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import Header from './../component/Header'
import Register from './../pages/register'
import Login from './../pages/login'
 let routes = (
    <Router >
        <Header></Header>
            <Switch>
                
                <Route exact path='/'>

                    home
                    <div>test</div>
                </Route>
                <Route path='/about'>
                    about
                </Route>
                <Route path='/register'>
                    <Register></Register>
                </Route>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                

            </Switch>
    </Router>
)
export default routes