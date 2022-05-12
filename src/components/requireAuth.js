import React from 'react';
import { Navigate } from "react-router-dom";
import { AppContext } from "../context";

function RequireAuth( { children } ) {
    const { token } = React.useContext(AppContext);

    if (!token) {
        return <Navigate to='/'/>
    }
    return children;
}

export default RequireAuth;