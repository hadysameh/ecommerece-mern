import React, { Component } from 'react'
import store from './../store/store'
import { Route , Link,withRouter} from 'react-router-dom';
import { setUser, setToken ,test} from './../store/userSlice'
import axios from 'axios';
class register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            address:'',
            country:'United Kingdom',
            state:'',
            email:'',
            password:'',
            repassword:'',
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
        
        axios.post('/api/user/register',{...this.state})
        .then((res)=>{
            console.log(res)
            store.dispatch(setToken(res.data.token))
            store.dispatch(setUser(res.data.user))
            this.props.history.push('/');
        } )
        .catch( (error)=> {
            if (error.response) {
                console.log(error.response.data);
                this.setState({error:error.response.data.msg})
                console.log(error.response.status);
                console.log(error.response.headers);
            //   this.setState({error:error.response.data.msg})
            }
          });
    }
    render(){
        return (
        <main>
            
            <div className="breadcrumb parallax-container">
            <div className="parallax"><img src="image/prlx.jpg" alt="#"/></div>
            <h1>Register Account</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="register.html">Register</a></li>
            </ul>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-sm-3 hidden-xs column-left" id="column-left">
                <div className="Categories left-sidebar-widget">
                    <div className="columnblock-title">Account</div>
                    <div className="category_block">
                    <ul className="box-category">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-sm-9" id="content">
                <p>If you already have an account with us, please login at the <Link to='/login'>login page</Link>.</p>
                <h2 className="text-danger">{this.state.error}</h2>
                <form className="form-horizontal" encType="multipart/form-data" method="post" action="http://html.lionode.com/moonstore/ms03/register.html">
                    <fieldset id="account">
                    <legend>Your Personal Details</legend>
                    <div className="form-group required">
                        <label htmlFor="input-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.firstName}
                            onChange={this.onChange} 
                            type="firstName"
                            className="form-control"
                            id="input-email"
                            placeholder="first Name"
                            name="firstName"/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.lastName}
                            onChange={this.onChange} 
                            type="firstName"
                            className="form-control"
                            id="input-email"
                            placeholder="last Name"
                            name="lastName"/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-2 control-label">E-Mail</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.email}
                            onChange={this.onChange} 
                            type="email"
                            className="form-control"
                            id="input-email"
                            placeholder="E-Mail"
                            name="email"/>
                        </div>
                    </div>
                    
                    </fieldset>
                    <fieldset id="address">
                    <legend>Your Address</legend>
                   
                    <div className="form-group required">
                        <label htmlFor="input-address-1" className="col-sm-2 control-label">Address </label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.address}
                            onChange={this.onChange} 
                            type="text"
                            className="form-control"
                            id="input-address-1"
                            placeholder="Address"
                            name="address"/>
                        </div>
                    </div>
                   
                    
                    <div className="form-group required">
                        <label htmlFor="input-country" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-10">
                        <select
                            value={this.state.country}
                            onChange={this.onChange}
                             
                            className="form-control"
                            id="input-country"
                            name="country">
                             <option> --- Please Select --- </option>
                             <option>Aaland Islands</option>
                             <option>Afghanistan</option>
                             <option>Albania</option>
                             <option>Algeria</option>
                             <option>American Samoa</option>
                             <option>Andorra</option>
                             <option>Angola</option>
                             <option>Anguilla</option>
                             <option>Antarctica</option>
                             <option>Antigua and Barbuda</option>
                             <option>Argentina</option>
                             <option>Armenia</option>
                             <option>Aruba</option>
                             <option>Ascension Island (British)</option>
                             <option>Australia</option>
                             <option>Austria</option>
                             <option>Azerbaijan</option>
                             <option>Bahamas</option>
                             <option>Bahrain</option>
                             <option>Bangladesh</option>
                             <option>Barbados</option>
                             <option>Belarus</option>
                             <option>Belgium</option>
                             <option>Belize</option>
                             <option>Benin</option>
                             <option>Bermuda</option>
                             <option>Bhutan</option>
                             <option>Bolivia</option>
                             <option>Bonaire, Sint Eustatius and Saba</option>
                             <option>Bosnia and Herzegovina</option>
                             <option>Botswana</option>
                             <option>Bouvet Island</option>
                             <option>Brazil</option>
                             <option>British Indian Ocean Territory</option>
                             <option>Brunei Darussalam</option>
                             <option>Bulgaria</option>
                             <option>Burkina Faso</option>
                             <option>Burundi</option>
                             <option>Cambodia</option>
                             <option>Cameroon</option>
                             <option>Canada</option>
                             <option>Canary Islands</option>
                             <option>Cape Verde</option>
                             <option>Cayman Islands</option>
                             <option>Central African Republic</option>
                             <option>Chad</option>
                             <option>Chile</option>
                             <option>China</option>
                             <option>Christmas Island</option>
                             <option>Cocos (Keeling) Islands</option>
                             <option>Colombia</option>
                             <option>Comoros</option>
                             <option>Congo</option>
                             <option>Cook Islands</option>
                             <option>Costa Rica</option>
                             <option>Cote D'Ivoire</option>
                             <option>Croatia</option>
                             <option>Cuba</option>
                             <option>Curacao</option>
                             <option>Cyprus</option>
                             <option>Czech Republic</option>
                             <option>Democratic Republic of Congo</option>
                             <option>Denmark</option>
                             <option>Djibouti</option>
                             <option>Dominica</option>
                             <option>Dominican Republic</option>
                             <option>East Timor</option>
                             <option>Ecuador</option>
                             <option>Egypt</option>
                             <option>El Salvador</option>
                             <option>Equatorial Guinea</option>
                             <option>Eritrea</option>
                             <option>Estonia</option>
                             <option>Ethiopia</option>
                             <option>Falkland Islands (Malvinas)</option>
                             <option>Faroe Islands</option>
                             <option>Fiji</option>
                             <option>Finland</option>
                             <option>France, Metropolitan</option>
                             <option>French Guiana</option>
                             <option>French Polynesia</option>
                             <option>French Southern Territories</option>
                             <option>FYROM</option>
                             <option>Gabon</option>
                             <option>Gambia</option>
                             <option>Georgia</option>
                             <option>Germany</option>
                             <option>Ghana</option>
                             <option>Gibraltar</option>
                             <option>Greece</option>
                             <option>Greenland</option>
                             <option>Grenada</option>
                             <option>Guadeloupe</option>
                             <option>Guam</option>
                             <option>Guatemala</option>
                             <option>Guernsey</option>
                             <option>Guinea</option>
                             <option>Guinea-Bissau</option>
                             <option>Guyana</option>
                             <option>Haiti</option>
                             <option>Heard and Mc Donald Islands</option>
                             <option>Honduras</option>
                             <option>Hong Kong</option>
                             <option>Hungary</option>
                             <option>Iceland</option>
                             <option>India</option>
                             <option>Indonesia</option>
                             <option>Iran (Islamic Republic of)</option>
                             <option>Iraq</option>
                             <option>Ireland</option>
                             <option>Isle of Man</option>
                             <option>Israel</option>
                             <option>Italy</option>
                             <option>Jamaica</option>
                             <option>Japan</option>
                             <option>Jersey</option>
                             <option>Jordan</option>
                             <option>Kazakhstan</option>
                             <option>Kenya</option>
                             <option>Kiribati</option>
                             <option>Korea, Republic of</option>
                             <option>Kosovo, Republic of</option>
                             <option>Kuwait</option>
                             <option>Kyrgyzstan</option>
                             <option>Lao People's Democratic Republic</option>
                             <option>Latvia</option>
                             <option>Lebanon</option>
                             <option>Lesotho</option>
                             <option>Liberia</option>
                             <option>Libyan Arab Jamahiriya</option>
                             <option>Liechtenstein</option>
                             <option>Lithuania</option>
                             <option>Luxembourg</option>
                             <option>Macau</option>
                             <option>Madagascar</option>
                             <option>Malawi</option>
                             <option>Malaysia</option>
                             <option>Maldives</option>
                             <option>Mali</option>
                             <option>Malta</option>
                             <option>Marshall Islands</option>
                             <option>Martinique</option>
                             <option>Mauritania</option>
                             <option>Mauritius</option>
                             <option>Mayotte</option>
                             <option>Mexico</option>
                             <option>Micronesia, Federated States of</option>
                             <option>Moldova, Republic of</option>
                             <option>Monaco</option>
                             <option>Mongolia</option>
                             <option>Montenegro</option>
                             <option>Montserrat</option>
                             <option>Morocco</option>
                             <option>Mozambique</option>
                             <option>Myanmar</option>
                             <option>Namibia</option>
                             <option>Nauru</option>
                             <option>Nepal</option>
                             <option>Netherlands</option>
                             <option>Netherlands Antilles</option>
                             <option>New Caledonia</option>
                             <option>New Zealand</option>
                             <option>Nicaragua</option>
                             <option>Niger</option>
                             <option>Nigeria</option>
                             <option>Niue</option>
                             <option>Norfolk Island</option>
                             <option>North Korea</option>
                             <option>Northern Mariana Islands</option>
                             <option>Norway</option>
                             <option>Oman</option>
                             <option>Pakistan</option>
                             <option>Palau</option>
                             <option>Palestinian Territory, Occupied</option>
                             <option>Panama</option>
                             <option>Papua New Guinea</option>
                             <option>Paraguay</option>
                             <option>Peru</option>
                             <option>Philippines</option>
                             <option>Pitcairn</option>
                             <option>Poland</option>
                             <option>Portugal</option>
                             <option>Puerto Rico</option>
                             <option>Qatar</option>
                             <option>Reunion</option>
                             <option>Romania</option>
                             <option>Russian Federation</option>
                             <option>Rwanda</option>
                             <option>Saint Kitts and Nevis</option>
                             <option>Saint Lucia</option>
                             <option>Saint Vincent and the Grenadines</option>
                             <option>Samoa</option>
                             <option>San Marino</option>
                             <option>Sao Tome and Principe</option>
                             <option>Saudi Arabia</option>
                             <option>Senegal</option>
                             <option>Serbia</option>
                             <option>Seychelles</option>
                             <option>Sierra Leone</option>
                             <option>Singapore</option>
                             <option>Slovak Republic</option>
                             <option>Slovenia</option>
                             <option>Solomon Islands</option>
                             <option>Somalia</option>
                             <option>South Africa</option>
                             <option>South Georgia &amp; South Sandwich Islands</option>
                             <option>South Sudan</option>
                             <option>Spain</option>
                             <option>Sri Lanka</option>
                             <option>St. Barthelemy</option>
                             <option>St. Helena</option>
                             <option>St. Martin (French part)</option>
                             <option>St. Pierre and Miquelon</option>
                             <option>Sudan</option>
                             <option>Suriname</option>
                             <option>Svalbard and Jan Mayen Islands</option>
                             <option>Swaziland</option>
                             <option>Sweden</option>
                             <option>Switzerland</option>
                             <option>Syrian Arab Republic</option>
                             <option>Taiwan</option>
                             <option>Tajikistan</option>
                             <option>Tanzania, United Republic of</option>
                             <option>Thailand</option>
                             <option>Togo</option>
                             <option>Tokelau</option>
                             <option>Tonga</option>
                             <option>Trinidad and Tobago</option>
                             <option>Tristan da Cunha</option>
                             <option>Tunisia</option>
                             <option>Turkey</option>
                             <option>Turkmenistan</option>
                             <option>Turks and Caicos Islands</option>
                             <option>Tuvalu</option>
                             <option>Uganda</option>
                             <option>Ukraine</option>
                             <option>United Arab Emirates</option>
                             <option>United Kingdom</option>
                             <option>United States</option>
                             <option>United States Minor Outlying Islands</option>
                             <option>Uruguay</option>
                             <option>Uzbekistan</option>
                             <option>Vanuatu</option>
                             <option>Vatican City State (Holy See)</option>
                             <option>Venezuela</option>
                             <option>Viet Nam</option>
                             <option>Virgin Islands (British)</option>
                             <option>Virgin Islands (U.S.)</option>
                             <option>Wallis and Futuna Islands</option>
                             <option>Western Sahara</option>
                             <option>Yemen</option>
                             <option>Zambia</option>
                             <option>Zimbabwe</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-zone" className="col-sm-2 control-label">Region / State</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.state}
                            onChange={this.onChange} 
                            type="text"
                            className="form-control"
                            id="input-password"
                            placeholder="Region / State"
                            name="state"
                            />
                       </div>
                    </div>
                    </fieldset>
                    <fieldset>
                    <legend>Your Password</legend>
                    <div className="form-group required">
                        <label htmlFor="input-password" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.password}
                            onChange={this.onChange} 
                            type="password"
                            className="form-control"
                            id="input-password"
                            placeholder="Password"
                           
                            name="password"/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-confirm" className="col-sm-2 control-label">Password Confirm</label>
                        <div className="col-sm-10">
                        <input
                            value={this.state.repassword}
                            onChange={this.onChange} 
                            type="password"
                            className="form-control"
                            
                            id="input-confirm"
                            placeholder="Password Confirm"
                            name="repassword"/>

                       </div>
                    </div>
                    </fieldset>
                   
                    <div className="buttons">
                    <div className="pull-right">
                        <input
                        onClick={this.onSubmit}
                        type="submit"
                        className="btn
                        btn-primary"
                         />
                <h2 className="text-danger">{this.state.error}</h2>

                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>

            </main>
        )
    }
}
export default withRouter(register);