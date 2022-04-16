import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashoard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Quiz } from "./pages/Quiz";
import UseFetch from "./hook/useFetch";
import { useEffect } from "react";

export const App = () => {

    const { data } = UseFetch("https://driving-licence-app.herokuapp.com/question/all")
    useEffect(() => {
        console.log(data)
    }, [data])
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}