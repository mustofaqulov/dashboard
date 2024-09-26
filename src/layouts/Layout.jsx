import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="w-[100%] h-[100vh] flex flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
