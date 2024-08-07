import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Guides() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Guides;
