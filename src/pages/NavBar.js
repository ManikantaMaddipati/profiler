import {Link, Outlet} from "react-router-dom";
import {useReducer, useState} from "react";


function NavBar() {
    const displaySignUpLoginButton =
        {login:true, signUp:true}

    function reducer(displaySignUpLoginButton,action){
        console.log(action.login)
        return action;
    }

    const [buttons, dispatch] = useReducer(reducer,displaySignUpLoginButton);

    return <>
    <nav className="login-page-nav-bar">
        <div className="login-page-logo">
            <div className="login-page-logo">
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
        {buttons.login ?
        <>
            <div className="login-page-logo">
                <button onClick={() => dispatch( {login:false, signUp:true})}>
                    Login
                </button>
            </div>
        </> : ""
        }
        {
        buttons.signUp ?
        <>
            <div className="login-page-logo">
                <button onClick={() => dispatch( {login:true, signUp:false})}>
                    Sign Up
                </button>
            </div>
        </> : ""
        }

    </nav>
       <Outlet />
    </>
}


export default NavBar