import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProductPage from "./ProductPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
    );
}

export default App;
