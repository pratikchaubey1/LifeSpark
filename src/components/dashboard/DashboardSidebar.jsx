// components/DashboardSidebar.jsx
import React, { useState } from "react";

const DASHBOARD_ITEMS = [
  {
    label: "Profile",
    children: [
      { label: "Edit Profile" },
      { label: "KYC Upload" },
      { label: "Edit Password" },
      { label: "Edit Bank Details" },
      { label: "Welcome Letter" },
      { label: "Create ID Card" },
    ],
  },
  {
    label: "ePin",
    children: [
      { label: "Generate ePin" },
      { label: "ePin Transfer" },
      { label: "ePin Report" },
    ],
  },
  {
    label: "Active ID",
    children: [
      { label: "Activate ID" },
      { label: "Active ID Report" },
    ],
  },
  {
    label: "My Team Network",
    children: [
      { label: "Direct Team" },
      { label: "Level-wise Team" },
      { label: "Genealogy View" },
    ],
  },
  {
    label: "My Team Business Support",
    children: [
      { label: "Business Summary" },
      { label: "Payout Details" },
    ],
  },
  {
    label: "Income / Reports",
    children: [
      { label: "Income Report" },
      { label: "Payout Report" },
      { label: "Wallet Ledger" },
    ],
  },
];

export default function DashboardSidebar({ open, onClose }) {
  const [openParent, setOpenParent] = useState(null); // which main item is expanded

  if (!open) return null;

  const handleParentClick = (label, hasChildren) => {
    if (hasChildren) {
      setOpenParent((prev) => (prev === label ? null : label));
    } else {
      // later you can handle direct navigation here
      console.log("Clicked:", label);
    }
  };

  const handleChildClick = (parentLabel, childLabel) => {
    // here you can do routing / open modals etc.
    console.log(`Clicked: ${parentLabel} → ${childLabel}`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-50 shadow-2xl flex flex-col">
        {/* Top */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-slate-800">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Member Menu
          </span>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-800 text-xl"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1 text-sm">
          {DASHBOARD_ITEMS.map((item) => {
            const isOpen = openParent === item.label;
            const hasChildren = !!item.children?.length;

            return (
              <div key={item.label} className="space-y-1">
                {/* Parent button */}
                <button
                  onClick={() => handleParentClick(item.label, hasChildren)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-800/80 transition"
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <span
                      className={`text-xs opacity-70 transform transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  )}
                </button>

                {/* Children */}
                {hasChildren && isOpen && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() =>
                          handleChildClick(item.label, child.label)
                        }
                        className="w-full text-left rounded-md px-3 py-1.5 text-[13px] bg-slate-900/40 hover:bg-slate-800/80 transition"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-800 px-4 py-4">
          <button className="w-full rounded-lg border border-red-400/60 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-100 hover:bg-red-500/20 transition">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
