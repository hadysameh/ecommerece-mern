import { Route, Redirect } from "react-router-dom";

const isAuth= true

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