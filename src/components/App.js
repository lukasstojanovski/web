import React from "react";
import { Outlet } from 'react-router-dom';
import {Nav} from './Nav';
import { Blogposts } from "./Blogposts";


export function App() {

  return (
    <div id="app">
      <Nav/>
      <Blogposts/>
      <Outlet />
    </div>
  )
}