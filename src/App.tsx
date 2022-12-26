﻿import React from 'react';
import logo from './logo.svg';
import './App.css';
import Treegrid from './components/Treegrid/Treegrid'
import Store from "./Storage/Store";
import EmployeerData from "./components/EmployeerData";
import FuncJsTree from "./components/Jstree/FuncJsTree";
import {useDispatch, useSelector} from "react-redux";

function App() {
    let store: Store = new Store();
    store.init();
    const dispatch = useDispatch();
    let currentEmp = useSelector((state:any) => state.currentEmployeer)
    return (
            <div className="App">
                <header className="App-header">
                <div className="row">
                    <div className="col-md-6 StyleJs"><FuncJsTree {...store} /></div>
                    <div className="col-md-6 EmployeeStyle"><EmployeerData {...currentEmp} /></div> 
                </div>
                <div className='row'><div className="col-md-12"><Treegrid /></div></div>
                </header>
            </div>

    );

}

export default App;