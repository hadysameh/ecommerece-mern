import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import Header from './../component/Header'
import Register from './../pages/register'
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

            </Switch>
    </Router>
)
export default routes