import React from "react";
import { useParams } from "react-router-dom";

export const Login=()=>{
    const { id } = useParams();

    return(<div data-testid="loginId">{id}</div>)
}