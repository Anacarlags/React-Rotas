import React from "react";
import './App.css'
import Menu from '../../layouts/Menu'
import Content from '../Content'
import { BrowserRouter } from "react-router-dom";

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
              <Menu/>
              <Content/>
            </BrowserRouter>
            
        </div>
    )
}