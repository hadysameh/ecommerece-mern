import React, { Component } from 'react'
import store from './../store/store'
import { Route ,Link, withRouter} from 'react-router-dom';
import { setUser, setToken ,test} from './../store/userSlice'
import axios from 'axios';
class register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
            email:'',
            password:'',
            error:''
            
        }
      }
    componentDidMount(){        
        
    } 
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('/api/user/login',{...this.state})
        .then((res)=>{ 
            store.dispatch(setToken(res.data.token))
            store.dispatch(setUser(res.data.user))
            this.props.history.push('/');
        } )
        .catch((error)=> {
            if (error.response) { 
              this.setState({error:error.response.data.msg}) 
            }
          })

    }
    render(){
        return (
        <main>
            <div class="breadcrumb parallax-container">
                <div class="parallax"><img src="image/prlx.jpg" alt="#"/></div>
                <h1>Login</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 hidden-xs column-left" id="column-left">
                    <div class="Categories left-sidebar-widget">
                        <div class="columnblock-title">Account</div>
                        <div class="category_block">
                        <ul class="box-category">
                            <li><Link to='/login'>login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-9" id="content">
                    <div class="row">
                        <div class="col-sm-6">
                        <h2>New Customer</h2>
                        <p>Checkout Options:</p>
                        <div class="radio">
                            <label>
                            <input type="radio" name="account" value="register" checked="checked"/>
                            Register Account</label>
                        </div>
                        </div>
                        <div class="col-sm-6">
                <h2 className="text-danger">{this.state.error}</h2>

                        <h2>Returning Customer</h2>
                        <p>I am a returning customer</p>
                        <form>
                            <div class="form-group">
                                <label class="control-label" >E-Mail</label>
                                <input type="text" 
                                    value={this.state.email} 
                                    onChange={this.onChange} 
                                    name="email" 
                                    placeholder="E-Mail" 
                                    id="input-email" 
                                    class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="control-label" >Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={this.state.password} 
                                    onChange={this.onChange} 
                                    placeholder="Password" 
                                    id="input-password" 
                                    class="form-control"/>
                                <a href="forgetpassword.html" class="forgot">Forgotten Password</a></div>
                            <input type="button" value="Login" id="button-login" data-loading-text="Loading..." class="btn btn-primary" onClick={this.onSubmit}/>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </main>
        )
    }
}
export default withRouter(register);