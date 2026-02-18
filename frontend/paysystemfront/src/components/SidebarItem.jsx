import { useNavigate, useLocation } from "react-router-dom";

export default function SidebarItem({ item }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === item.path;

  return (
    <div
      className={`menu-item clickable ${active ? "active" : ""}`}
      onClick={() => navigate(item.path)}
    >
      {item.title}
    </div>
  );
}
