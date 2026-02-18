import {
  Shield,
  Calculator,
  FileSpreadsheet,
  FileText,
  Clock,
  BarChart3,
  Settings,
  ListChecks
} from "lucide-react";

export const menuConfig = [

  /* ================= ADMINISTRATION ================= */
  {
    section: "Administration",
    icon: Shield,
    mode: "submenu",
    pages: [
      { name: "Rule updation", icon: ListChecks, path: "/administration/rule-update" },
      { name: "Debit report", icon: FileText, path: "/administration/debit-report" },
      { name: "Working days", icon: Clock, path: "/administration/working-days" },
      { name: "Remove bill number", icon: FileText, path: "/administration/remove-bill-number" },
      { name: "Remove DV number", icon: FileText, path: "/administration/remove-dv-number" },
      { name: "Mayur Pank data", icon: FileText, path: "/administration/mayur-pank-data" }
    ]
  },

  /* ================= COMPUTE PAYMENTS ================= */
  {
    section: "Compute Payments",
    icon: Calculator,
    mode: "route",
    path: "/compute-payments"
  },

  /* ================= EXCEL BANK ================= */
  {
  section: "Excel to Bank Soft Copy",
  icon: FileSpreadsheet,
  mode: "route",
  path: "/excel-bank"
},
{
  section: "Old Reports/Schedules",
  icon: FileText,
  mode: "route",
  path: "/old-reports"
},
{
  section: "Pending Bills",
  icon: Clock,
  mode: "route",
  path: "/pending-bills"
},

  /* ================= REPORTS DROPDOWN ================= */
  {
    section: "Reports",
    icon: BarChart3,
    mode: "submenu",
    pages: [
      { name: "Proof pay reports", icon: FileText, path: "/reports/proof" },
      { name: "Bank statements", icon: FileText, path: "/reports/bank" },
      { name: "CDA reports", icon: FileText, path: "/reports/cda" },
      { name: "Change reports", icon: FileText, path: "/reports/change" },
      { name: "CPF after ", icon: FileText, path: "/reports/cpf" },
      { name: " CPF upto", icon: FileText, path: "/reports/cpfupto" },
      { name: "Other reports", icon: FileText, path: "/reports/other" },
      { name: "Annual increment data", icon: FileText, path: "/reports/increment" },
      { name: "CCS versus paybill", icon: FileText, path: "/reports/ccs" },
      { name: "Consolidated payslips", icon: FileText, path: "/reports/payslip" }
    ]
  },

  /* ================= IT STEPS ================= */
  {
    section: "Steps for IT to Pay",
    icon: ListChecks,
    mode: "route",
    path: "/it-steps"
  },

  /* ================= UPDATIONS ================= */
  {
    section: "Updations",
    icon: Settings,
    mode: "submenu",
    pages: [
      { name: "Pay data", icon: FileText, path: "/updations/pay" },
      { name: "Pers data", icon: FileText, path: "/updations/personal" },
      { name: "CCS recovery", icon: FileText, path: "/updations/ccs" },
      { name: "Add bill details", icon: FileText, path: "/updations/build" },
      { name: "Add DV details", icon: FileText, path: "/updations/dvd" }
    ]
  }

];
