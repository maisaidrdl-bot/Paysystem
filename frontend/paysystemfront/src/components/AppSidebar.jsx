/* import Dropdown from "./Dropdown";
import {
  ShieldCheck,
  Calculator,
  FileSpreadsheet,
  Archive,
  Clock,
  FileBarChart,
  Landmark,
  RefreshCcw
} from "lucide-react";

 ---------------- SIDEBAR STRUCTURE ---------------- 

const sidebarData = [
  {
    section: "Administration",
    pages: [
      { name: "Rule updation", path: "/" },
      { name: "Debit report < 0", path: "/" },
      { name: "Working days updation", path: "/" },
      { name: "Remove bill number", path: "/" },
      { name: "Remove DV number", path: "/" },
      { name: "Mayur Pank data", path: "/" }
    ]
  },

  { section: "Compute Payments", pages: [{ name: "Open", path: "/compute-payments" }] },

  { section: "Excel to Bank Soft Copy", pages: [{ name: "Open", path: "/excel-bank" }] },

  { section: "Old Reports/Schedules", pages: [{ name: "Open", path: "/old-reports" }] },

  { section: "Pending Bills", pages: [{ name: "Open", path: "/pending-bills" }] },

  {
    section: "Reports",
    pages: [
      { name: "Proof Pay Reports", path: "/reports/proof" },
      { name: "Bank Statements", path: "/reports/bank" },
      { name: "CDA Reports", path: "/reports/cda" },
      { name: "Change Reports", path: "/reports/change" },
      { name: "CPF Reports", path: "/reports/cpf" },
      { name: "Other Reports", path: "/reports/other" },
      { name: "Annual Increment Data", path: "/reports/increment" },
      { name: "CCS vs Pay Bill", path: "/reports/ccs" },
      { name: "Consolidated Payslips", path: "/reports/payslip" }
    ]
  },

  {
    section: "Steps for IT to Pay",
    pages: [{ name: "Open IT Steps", path: "/it-steps" }]
  },

  {
    section: "Updations",
    pages: [
      { name: "Pay Data", path: "/updations/pay" },
      { name: "Personal Data", path: "/updations/personal" },
      { name: "CCS Recovery", path: "/updations/ccs" },
      { name: "Add Build Details", path: "/updations/build" },
      { name: "Add DVD Details", path: "/updations/dvd" }
    ]
  }
];

 ---------------- ICON MAP ---------------- 

const iconMap = {
  Administration: ShieldCheck,
  "Compute Payments": Calculator,
  "Excel to Bank Soft Copy": FileSpreadsheet,
  "Old Reports/Schedules": Archive,
  "Pending Bills": Clock,
  Reports: FileBarChart,
  "Steps for IT to Pay": Landmark,
  Updations: RefreshCcw
};

---------------- COMPONENT ---------------- 
export default function AppSidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">◆</div>
        <div>
          <div>PAY SYSTEM</div>
          <span className="logo-sub">Wealth Platform</span>
        </div>
      </div>

      <div className="nav-sections">
        {sidebarData.map((section) => {
          const Icon = iconMap[section.section];
          return (
            <Dropdown
              key={section.section}
              section={section.section}
              pages={section.pages}
              Icon={Icon}
            />
          );
        })}
      </div>

      <div className="profile">
        <div className="avatar">JD</div>
        <div>
          <div className="profile-name">James Davidson</div>
          <div className="profile-role">Premium Member</div>
        </div>
      </div>
    </div>
  );
}
 */

import { menuConfig } from "./menoConfig";
import Dropdown from "./Dropdown";
import SidebarItem from "./SidebarItem";

export default function AppSidebar() {
  return (
    <div className="sidebar">
      <div className="logo-icon">₹</div>
      <div className="logo-text">PAY SYSTEM</div>


      {menuConfig.map((item, i) => {
        if (item.type === "page") return <SidebarItem key={i} item={item} />;
        return <Dropdown key={i} item={item} />;
      })}

      <div className="sidebar-bottom">
        <div className="menu-item">Help</div>
        <div className="menu-item">Logout</div>
      </div>
    </div>
  );
}
