import React, { useState, useEffect } from "react";

import ActivateID from "./ActivateID";
import TeamBusiness from "./MyTeamBusiness/TeamBusiness";
import RankRewardBusiness from "./MyTeamBusiness/RankRewardBusiness";
import FreedomBusiness from "./MyTeamBusiness/FreedomBusiness";
import EditProfile from "./EditProfile";
import EditBankDetail from "./Editbankdetail";
import ImageUpload from "./Imageuploader";
import ActivePin from "./ePin/ActivePin";
import TransferPin from "./ePin/TransferPin";
import UsedPin from "./ePin/UsedPin";
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
  { label: "Active ID" },
  {
    label: "My Team Business Support",
    children: [
      { label: "Team Business" },
      { label: "Rank Reward Business" },
      { label: "Freedom Business" },
    ],
  },
];

export default function DashboardSidebar({
  open = true,
  onClose,
  children,
}) {
  const [openParent, setOpenParent] = useState(null);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = prev;
      setActivePanel(null);
      setOpenParent(null);
    }
    return () => (document.body.style.overflow = prev);
  }, [open]);

  if (!open) return null;

  const handleParentClick = (label, hasChildren) => {
    if (hasChildren) {
      setOpenParent((p) => (p === label ? null : label));
    } else if (label === "Active ID") {
      setActivePanel("activate-id");
    }
  };

  const handleChildClick = (parent, child) => {
    // ✅ ePin section
    if (parent === "ePin") {
      if (child === "Generate ePin")
        return setActivePanel("epin-generate");
      if (child === "ePin Transfer")
        return setActivePanel("epin-transfer");
      if (child === "ePin Report")
        return setActivePanel("epin-report");
    }

    // Profile
    if (parent === "Profile") {
      if (child === "Edit Profile")
        return setActivePanel("edit-profile");
      if (child === "KYC Upload")
        return setActivePanel("kyc-upload");
      if (child === "Edit Bank Details")
        return setActivePanel("edit-bank-details");
    }

    // Team business
    if (parent === "My Team Business Support") {
      if (child === "Team Business")
        return setActivePanel("team-business");
      if (child === "Rank Reward Business")
        return setActivePanel("rank-reward-business");
      if (child === "Freedom Business")
        return setActivePanel("freedom-business");
    }

    setActivePanel(null);
  };

  const renderRightPanelContent = () => {
    // Active ID
    if (activePanel === "activate-id") return <ActivateID compact />;

    // ePin
    if (activePanel === "epin-generate") return <ActivePin />;
    if (activePanel === "epin-transfer") return <TransferPin />;
    if (activePanel === "epin-report") return <UsedPin />;

    // Profile
    if (activePanel === "edit-profile") return <EditProfile />;
    if (activePanel === "kyc-upload") return <ImageUpload />;
    if (activePanel === "edit-bank-details") return <EditBankDetail />;

    // Team business
    if (activePanel === "team-business") return <TeamBusiness />;
    if (activePanel === "rank-reward-business")
      return <RankRewardBusiness />;
    if (activePanel === "freedom-business")
      return <FreedomBusiness />;

    return children || null;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white flex flex-col">
        <div className="h-14 flex items-center justify-between px-4 border-b border-slate-800">
          <span className="text-sm font-semibold uppercase">
            Member Menu
          </span>
          <button onClick={onClose} className="text-xl">×</button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1 text-sm">
          {DASHBOARD_ITEMS.map((item) => {
            const open = openParent === item.label;
            return (
              <div key={item.label}>
                <button
                  onClick={() =>
                    handleParentClick(item.label, !!item.children)
                  }
                  className="w-full flex justify-between px-3 py-2 rounded hover:bg-slate-800"
                >
                  {item.label}
                  {item.children && <span>›</span>}
                </button>

                {item.children && open && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() =>
                          handleChildClick(item.label, child.label)
                        }
                        className="block w-full text-left px-3 py-1.5 rounded hover:bg-slate-800"
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

      {/* Right Panel */}
      <section className="fixed inset-y-0 left-72 right-0 z-40 bg-slate-950 text-white overflow-y-auto p-4 md:p-6">
        {renderRightPanelContent()}
      </section>
    </>
  );
}
