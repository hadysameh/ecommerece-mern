import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import { Link } from 'react-router-dom';
// import store from './../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { useState ,useEffect} from 'react';
import { setUser, setToken } from '../store/userSlice'
import { useHistory } from "react-router-dom";
 
const MyAccountMenue = props => {

    const [isAuth, setisAuth] = useState(false)
    let user=useSelector((state) => state.user.user)
    let token=useSelector((state) => state.user.token)    
    
    useEffect(()=>{
        // console.log(user)
        // console.log(token)
        setisAuth(user && token)
        
    })

    const dispatch = useDispatch()
    const history = useHistory()

    

    const handleLogout = ()=>{
        axios.post('/api/user/logout')
        .then((res)=>{            
            dispatch(setToken(res.data.token))
            dispatch(setUser(res.data.user))            
            history.push('/')
        })
    }
    

    return (
        <ul className="dropdown-menu dropdown-menu-right">
             
                { isAuth ? 
                    
                        <li><a href="#" onClick={handleLogout}>logout</a></li>
                    :
                     
                    <div>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </div>
                    
                }
                
            
            
                </ul>
    );
};

MyAccountMenue.propTypes = {
    
};

export default MyAccountMenue;