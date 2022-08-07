import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux"
import store from "./store/app/store"
import { GoogleOAuthProvider } from '@react-oauth/google'


console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID,"google client id")

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store}>
	<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
				<App />
	</GoogleOAuthProvider>
				</Provider>
		</BrowserRouter>
		</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
