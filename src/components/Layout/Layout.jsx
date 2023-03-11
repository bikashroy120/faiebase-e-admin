import React, { useState } from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";

const Layout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="layout">
      <Sidebar setOpen={setOpen} open={open}/>
      <div className="main__layout">
        <TopNav />

        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
