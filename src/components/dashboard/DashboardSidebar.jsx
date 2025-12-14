import React, { useState, useEffect } from "react";

/* ===== IMPORT SCREENS ===== */
import ActivateID from "./ActivateID";
import EditProfile from "./EditProfile";
import EditBankDetail from "./Editbankdetail";
import ImageUpload from "./Imageuploader";

import TotalDirectUser from "./MyTeamNetwork/TotalDirectUser";
import TotalActiveUser from "./MyTeamNetwork/TotalActiveUser";
import TotalInactiveUser from "./MyTeamNetwork/TotalInactiveUser";

/* ===== SIDEBAR MENU ===== */
const DASHBOARD_ITEMS = [
  {
    label: "Profile",
    children: [
      { label: "Edit Profile", key: "edit-profile" },
      { label: "KYC Upload", key: "kyc-upload" },
      { label: "Edit Bank Details", key: "edit-bank-details" },
    ],
  },
  {
    label: "Active ID",
    key: "activate-id",
  },
  {
    label: "My Team Network",
    children: [
      { label: "Total Direct User", key: "direct-user" },
      { label: "Total Active User", key: "active-user" },
      { label: "Total Inactive User", key: "inactive-user" },
    ],
  },
];

export default function DashboardSidebar({ open, onClose }) {
  const [openParent, setOpenParent] = useState(null);
  const [activePanel, setActivePanel] = useState(null);

  /* ===== BODY SCROLL LOCK ===== */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  /* ===== PANEL RENDER ===== */
  const renderPanel = () => {
    switch (activePanel) {
      case "activate-id":
        return <ActivateID />;

      case "edit-profile":
        return <EditProfile />;

      case "kyc-upload":
        return <ImageUpload />;

      case "edit-bank-details":
        return <EditBankDetail />;

      case "direct-user":
        return <TotalDirectUser />;

      case "active-user":
        return <TotalActiveUser />;

      case "inactive-user":
        return <TotalInactiveUser />;

      default:
        return (
          <div className="h-full flex items-center justify-center text-slate-400 text-lg">
            Select a menu option
          </div>
        );
    }
  };

  return (
    <>
      {/* ===== OVERLAY ===== */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* ===== SIDEBAR ===== */}
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white flex flex-col shadow-2xl">
        {/* HEADER */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-800">
          <h2 className="font-semibold text-lg">Member Menu</h2>
          <button
            onClick={onClose}
            className="text-xl hover:text-red-400"
          >
            ×
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {DASHBOARD_ITEMS.map((item) => {
            const hasChildren = item.children?.length;
            const isOpen = openParent === item.label;

            return (
              <div key={item.label}>
                {/* PARENT */}
                <button
                  onClick={() => {
                    if (hasChildren) {
                      setOpenParent(isOpen ? null : item.label);
                    } else {
                      setActivePanel(item.key);
                    }
                  }}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-slate-800"
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <span
                      className={`transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  )}
                </button>

                {/* CHILDREN */}
                {hasChildren && isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.key}
                        onClick={() => setActivePanel(child.key)}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-slate-700 ${
                          activePanel === child.key
                            ? "bg-slate-700 text-white"
                            : ""
                        }`}
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
      </aside>

      {/* ===== RIGHT CONTENT ===== */}
      <section className="fixed inset-y-0 left-0 md:left-72 right-0 z-40 bg-slate-100 overflow-y-auto p-4 md:p-6">
        {renderPanel()}
      </section>
    </>
  );
}
