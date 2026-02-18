import AppSidebar from "./components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="app-container">
      <AppSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
