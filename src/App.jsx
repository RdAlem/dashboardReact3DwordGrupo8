import { Outlet } from "react-router-dom";

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TopBar from "./components/TopBar";

import './App.css';

function App() {

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
