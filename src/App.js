import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
import { CustomRoutes } from "./Routes/Routes";
function App() {
  async function callAPI() {
    try {
      const resp = await axios.get("/api/", {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
      const data = await resp?.data;
      if (resp !== null) {
        console.log("result is: ");
        console.log(data);
      }
    } catch (error) {
      console.log("error in api");
    }
  }

  useEffect(() => {
    callAPI();
  }, []);
  return <CustomRoutes></CustomRoutes>;
}

export default App;
