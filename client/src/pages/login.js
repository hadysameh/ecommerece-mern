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
            console.log(res)
            store.dispatch(setToken(res.data.token))
            store.dispatch(setUser(res.data.user))
            this.props.history.push('/');
        } )
        .catch((error)=> {
            if (error.response) {
            //   console.log(error.response.data);
              this.setState({error:error.response.data.msg})
            //   console.log(error.response.status);
            //   console.log(error.response.headers);
            }
          })

    }
    render(){
        return (
        <main>
            <div id="wrapper">
            <div className="container">
            <div className="row">
                <div id="content-wrapper" className="col-xs-12">
            <section id="main">
                <header className="page-header">
                    <h1>
                        Login
                    </h1>
                </header>
                <section id="content" className="page-content card card-block">
                    <section className="register-form">
                        {/* <p>Already have an account? <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/login">Log in instead!</a></p> */}
                        <p>Don't have an account? <Link to="/register">register instead!</Link></p>

                            <form id="customer-form" className="js-customer-form" method="post" onSubmit={this.onSubmit}>
                            <section>
                                <span className='text-danger'>{this.state.error}</span>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Email
                                    </label>
                                    <div className="col-md-6">
                                        <input 
                                            value={this.state.email} 
                                            onChange={this.onChange} 
                                            className="form-control" 
                                            name="email"
                                            type="email" 
                                            required/>
                                    </div>
                                    <div className="col-md-3 form-control-comment">
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Password
                                    </label>
                                    <div className="col-md-6">
                                    <div className="input-group js-parent-focus">
                                        <input 
                                            value={this.state.password}
                                            onChange={this.onChange} 
                                            className="form-control js-child-focus js-visible-password" 
                                            name="password" 
                                            type="password"
                                            required/>
                                        <span className="input-group-btn">
                                            <button className="btn" type="button" data-action="show-password" data-text-show="Show" data-text-hide="Hide">
                                            Show
                                            </button>
                                        </span>
                                    </div>
                                    </div>
                                    <div className="col-md-3 form-control-comment">
                                    </div>
                                </div>      
                              </section>
                            <footer className="form-footer clearfix">
                                <input 
                                    
                                    type="hidden" 
                                    name="submitCreate" value="1"/>
                                <button className="btn btn-primary form-control-submit float-xs-right" data-link-action="save-customer" type="submit">
                                    Save
                                </button>
                            </footer>
                        </form>
                        </section>
                    </section>
                </section>
                </div>
                </div>
                </div>
                </div>
            </main>
        )
    }
}
export default withRouter(register);