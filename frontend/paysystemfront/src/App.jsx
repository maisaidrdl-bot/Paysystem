import AppSidebar from "./components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="layout">
      <AppSidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
