import React, {lazy, Suspense} from 'react';
import './app.css';

import {BrowserRouter as Router} from "react-router-dom";
import Loader from "./components/common/Loader";

const ComponentWrapper = lazy(() => import("./components/common/ComponentWrapper"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader/>}>
                <ComponentWrapper/>
            </Suspense>
        </Router>
    )
}

export default App;
