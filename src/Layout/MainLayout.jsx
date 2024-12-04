import React, { useContext } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Components/Loading";
const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen flex flex-col font-poppins">
      <div className="pb-5">
        <Header></Header>
      </div>
      <div className="px-3 pb-20 dark:bg-slate-900 flex-1">
        <Outlet></Outlet>
      </div>
      <div className="w-full dark:bg-slate-950 bg-base-200">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
