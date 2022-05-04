// import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "../routes/Auth";
// import Home from "../routes/Home";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <Router>
            <Routes>
                {isLoggedIn && Navigation ? (
                    <Route path="/" element={<Auth/>}>
                    </Route>
                ) : (
                    <Route path="/" element={<Home/>}>
                    </Route>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;