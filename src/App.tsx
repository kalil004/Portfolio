import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Curriculum from "./pages/CV/curriculum"
import Projects from "./pages/Projects/projects"
import AboutMe from "./pages/AboutMe/aboutme"
import Certificates from "./pages/Certificates/certificates"

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/">
            <Route path="/" element={<Home/>}/>
                <Route path="/curriculo" element={<Curriculum/>}/>
                <Route path="/projetos" element={<Projects/>}/>
                <Route path="/certificados" element={<Certificates/>}/>
                <Route path="/sobremim" element={<AboutMe/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
