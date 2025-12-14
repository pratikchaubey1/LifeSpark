import React, { useState, useEffect } from "react";

/* ===== IMPORT SCREENS ===== */
import ActivateID from "./ActivateID";
import EditProfile from "./EditProfile";
import EditBankDetail from "./Editbankdetail";
import ImageUpload from "./Imageuploader";

import TeamBusiness from "./MyTeamBusiness/TeamBusiness";
import RankRewardBusiness from "./MyTeamBusiness/RankRewardBusiness";
import FreedomBusiness from "./MyTeamBusiness/FreedomBusiness";

import TotalDirectUser from "./MyTeamNetwork/TotalDirectUser";
import TotalInactiveUser from "./MyTeamNetwork/TotalInactiveUser";

/* ===== SIDEBAR MENU ===== */
const DASHBOARD_ITEMS = [
  {
    label: "Profile",
    children: [
      { label: "Edit Profile" },
      { label: "KYC Upload" },
      { label: "Edit Bank Details" },
    ],
  },
  { label: "Active ID" },
  {
    label: "My Team Network",
    children: [
      { label: "Direct Team" },
      { label: "Inactive Direct Team" },
    ],
  },
  {
    label: "My Team Business Support",
    children: [
      { label: "Team Business" },
      { label: "Rank Reward Business" },
      { label: "Freedom Business" },
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

  /* ===== PARENT CLICK ===== */
  const handleParentClick = (label, hasChildren) => {
    if (hasChildren) {
      setOpenParent((prev) => (prev === label ? null : label));
    } else {
      if (label === "Active ID") setActivePanel("activate-id");
    }
  };

  /* ===== CHILD CLICK ===== */
  const handleChildClick = (parent, child) => {
    if (parent === "Profile") {
      if (child === "Edit Profile") setActivePanel("edit-profile");
      if (child === "KYC Upload") setActivePanel("kyc-upload");
      if (child === "Edit Bank Details")
        setActivePanel("edit-bank-details");
    }

    if (parent === "My Team Network") {
      if (child === "Direct Team") setActivePanel("direct-team");
      if (child === "Inactive Direct Team")
        setActivePanel("inactive-direct-team");
    }

    if (parent === "My Team Business Support") {
      if (child === "Team Business") setActivePanel("team-business");
      if (child === "Rank Reward Business")
        setActivePanel("rank-reward-business");
      if (child === "Freedom Business")
        setActivePanel("freedom-business");
    }
  };

  /* ===== RIGHT PANEL ===== */
  const renderPanel = () => {
    if (activePanel === "activate-id") return <ActivateID compact />;

    if (activePanel === "edit-profile") return <EditProfile />;
    if (activePanel === "kyc-upload") return <ImageUpload />;
    if (activePanel === "edit-bank-details") return <EditBankDetail />;

    if (activePanel === "direct-team") return <TotalDirectUser />;
    if (activePanel === "inactive-direct-team")
      return <TotalInactiveUser />;

    if (activePanel === "team-business") return <TeamBusiness />;
    if (activePanel === "rank-reward-business")
      return <RankRewardBusiness />;
    if (activePanel === "freedom-business")
      return <FreedomBusiness />;

    return (
      <div className="h-full flex items-center justify-center text-slate-400 text-lg">
        Select a menu option
      </div>
    );
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
          <h2 className="font-semibold">Member Menu</h2>
          <button onClick={onClose} className="text-xl hover:text-red-400">
            ×
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {DASHBOARD_ITEMS.map((item) => {
            const isOpen = openParent === item.label;
            const hasChildren = item.children?.length;

            return (
              <div key={item.label}>
                <button
                  onClick={() =>
                    handleParentClick(item.label, hasChildren)
                  }
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

                {hasChildren && isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() =>
                          handleChildClick(item.label, child.label)
                        }
                        className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-slate-700"
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
