import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProductPage from "./ProductPage";

import BasketPage from "./BasketPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="/basket" element={<BasketPage/>}/>
        </Routes>
    );
}

export default App;
