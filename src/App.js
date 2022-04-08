import React from "react";
import styled from "styled-components";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./assets/css/App.css";

function App() {
  return (
      
        <div className="pageContainer">
          <Sidebar/>
          <MainContent/>

        </div>
      
  );
}

export default App;
