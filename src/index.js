import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import {GlobalStyle} from "./components/Styled-Components/Global";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle/>

                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
