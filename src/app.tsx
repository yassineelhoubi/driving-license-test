import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashoard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Quiz } from "./pages/Quiz";


export const App=()=>{
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