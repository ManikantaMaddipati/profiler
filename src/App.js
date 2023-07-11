import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";

export default function App() {
    return (
        <BrowserRouter>
           <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}




