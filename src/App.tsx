import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Curriculum from "./pages/Skills/Skills"
import Projects from "./pages/Projects/projects"
/* import AboutMe from "./pages/AboutMe/aboutme" */
import Certificates from "./pages/Certificates/certificates"
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"

export default function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/">
            <Route path="/" element={<Home/>}/>
                <Route path="/habilidades" element={<Curriculum/>}/>
                <Route path="/projetos" element={<Projects/>}/>
                <Route path="/certificados" element={<Certificates/>}/>
                {/* <Route path="/sobremim" element={<AboutMe/>}/> */}
            </Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
