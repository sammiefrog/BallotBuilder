// importing necessary dependencies, components, and files
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        (promiseInProgress === true) ?
        <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Loader type="ThreeDots" color="#ff3d00" height="100" width="100" />
          </div>
        : null
     );  
    }

// Rendering application to public html file via root
ReactDOM.render(
    <React.StrictMode>
    <App />
    <LoadingIndicator/>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
