import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LinkPage from "./pages/LinkPage";
import ComputePayments from "./pages/ComputePayments";
import Welcome from "./pages/Welcome";
import RuleUpdate from "./pages/RuleUpdate";
import DebitReport from "./pages/DebitReport";
import WorkingDays from "./pages/WorkingDays";
import RemoveBillNumber from "./pages/RemoveBillNumber";
import RemoveDVNumber from "./pages/RemoveDVNumber";
import MayurPankData from "./pages/MayurPankData";
import ProofPayReports from "./pages/ProofPayReports";
import BankStatements from "./pages/BankStatements";
import CDAReports from "./pages/CDAReports";
import ChangeReport from "./pages/ChangeReport";
import CPFAfter from "./pages/CPFAfter";
import CPFUpto from "./pages/CPFupto";
import OtherReports from "./pages/OtherReports";
import AnnualIncrement from "./pages/AnnualIncrement";
import CCSvsPaybill from "./pages/CCSvsPaybill";
import ConsolidatedPayslips from "./pages/ConsolidatedPayslips";
import PayUpdation from "./pages/PayUpdation";
import PersData from "./pages/PersData";
import CCSRecovery from "./pages/CCSRecovery";
import AddBill from "./pages/AddBill";
import AddDV from "./pages/AddDV";
import ExcelBank from "./pages/ExcelBank";
import OldReports from "./pages/OldReports";
import PendingBills from "./pages/PendingBills";

/* ---------- REPORT LINKS ---------- *//* the file that iam working with */
const reportLinks = [
  { name: "Report Link 1" },
  { name: "Report Link 2" },
  { name: "Report Link 3" },
  { name: "Report Link 4" },
  { name: "Report Link 5" },
  { name: "Report Link 6" },
];

/* ---------- UPDATE LINKS ---------- */
const updateLinks = [
  { name: "Update Link 1" },
  { name: "Update Link 2" },
  { name: "Update Link 3" },
  { name: "Update Link 4" },
  { name: "Update Link 5" },
  { name: "Update Link 6" },
];

/* ---------- IT PAY LINKS ---------- */
const itLinks = [
  { name: "Compute PayBill", to: "/" },
  { name: "Add Bill Number", to: "/" },
  { name: "Make IT Tax zero", to: "/" },
  { name: "Remove Bill Number", to: "/" },
  { name: "Compute IT Statement", to: "/" },
  { name: "Execute IT to pay", to: "/" },
];

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      /* Default Home Page */
      {
        index: true,
        element: <Welcome text="Welcome Dashboard" />,
      },

      /* 2. Compute Payments */
      {
        path: "compute-payments",
        element: <ComputePayments />,
      },

      /* 3. Excel to bank soft copy */
      {
        path: "excel-bank",
        element: <ExcelBank />,
      },

      /* 4. Old reports/schedules */
      {
        path: "old-reports",
        element: <OldReports/>,
      },

      /* 5. Pending bills */
      {
        path: "pending-bills",
        element: <PendingBills/>,
      },

      /* 7. Steps for IT to pay */
      {
  path: "it-steps",
  element: <LinkPage title="Steps for IT to Pay" links={itLinks} className="steps-it" />,
},


      /* 6. Reports dropdown pages */
      {
  path: "reports/proof",
  element: <ProofPayReports />,
},

      {
  path: "reports/bank",
  element: <BankStatements />,
},
      {
  path: "reports/cda",
  element: <CDAReports />,
},

      {
        path: "reports/change",
        element: <ChangeReport />,
      },
      {
        path: "reports/cpf",
        element: <CPFAfter />,
      },
      {
        path: "reports/cpfupto",
        element: <CPFUpto/>,
      },
      {
        path: "reports/other",
        element: <OtherReports />,
      },
      {
        path: "reports/increment",
        element: <AnnualIncrement  />,
      },
      {
        path: "reports/ccs",
        element: <CCSvsPaybill />,
      },
      {
        path: "reports/payslip",
        element: <ConsolidatedPayslips />,
      },

      /* 8. Updations dropdown pages */
      {
        path: "updations/pay",
        element: <PayUpdation />,
      },
      {
        path: "updations/personal",
        element: <PersData />,
      },
      {
        path: "updations/ccs",
        element: <CCSRecovery />,
      },
      {
        path: "updations/build",
        element: <AddBill />,
      },
      {
        path: "updations/dvd",
        element: <AddDV />,
      },




      /* 9. Administration pages */
      {
        path: "administration/rule-update",
        element: <RuleUpdate />,
      },
      {
        path: "administration/debit-report",
        element: <DebitReport />,
      },
      {
        path: "administration/working-days",
        element: <WorkingDays />,
      },
      {
        path: "administration/remove-bill-number",
        element: <RemoveBillNumber />,
      },
      {
        path: "administration/remove-dv-number",
        element: <RemoveDVNumber />,
      },
      {
        path: "administration/mayur-pank-data",
        element: <MayurPankData />,
      },



    ],
  },
]);
