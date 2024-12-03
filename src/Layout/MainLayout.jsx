import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen">
      <div className="container mx-auto py-5">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
