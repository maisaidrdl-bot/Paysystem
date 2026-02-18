import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ item }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const Icon = item.icon;

  const handleClick = () => {
    if (item.mode === "route") navigate(item.path);
    else setOpen(!open);
  };

  return (
    <div className={`section ${open ? "active" : ""}`}>
      {/* HEADER */}
      <div className="section-title" onClick={handleClick}>
        <div className="section-left">
          {Icon && <Icon size={18} />}
          <span>{item.section}</span>
        </div>

        {item.mode !== "route" && (
          <ChevronDown
            size={16}
            className={`chevron ${open ? "rotate" : ""}`}
          />
        )}
      </div>

      {/* LINKS ONLY */}
      {open && item.mode === "links" && (
        <div className="dropdown-panel">
          {item.links.map((link, i) => {
            const LinkIcon = link.icon;
            return (
              <div key={i} className="panel-link">
                <LinkIcon size={14} />
                <span>{link.name}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* SUBMENU ROUTES */}
      {open && item.mode === "submenu" && (
        <div className="dropdown-panel">
          {item.pages.map((p, i) => {
            const PageIcon = p.icon;
            return (
              <div
                key={i}
                className="panel-link clickable"
                onClick={() => navigate(p.path)}
              >
                <PageIcon size={14} />
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
