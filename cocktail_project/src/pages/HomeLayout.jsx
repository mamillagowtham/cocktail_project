import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
    <navbar>navbar</navbar>
    {/* <Link to="/about">About page</Link> */}
    <Outlet/>
    <footer>footer</footer>
    </div>
  );
};

export default HomeLayout
