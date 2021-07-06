import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const isAuth= false
axios.post('/user/isauth')
.then((res)=>{
    if(res.data.status=='unauthorized'){
        isAuth=false
    }else{
        isAuth=true
    }
})

const authProtectedeRoute =({component:Component,...rest})=>{
    return(
        <Route 
            {...rest}
            render ={(props)=>{
                if(isAuth){
                    return <Component {...props}/>;
                }
                else {
                    return <Redirect to="/login"/>;
                }
            }}
            />
    )
}

export default authProtectedeRoute