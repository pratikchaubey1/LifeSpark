// src/components/MemberDashboard.jsx
import React, { useState } from "react";

const SIDE_MENU = [
  { id: "dashboard", label: "Dashboard" },
  { id: "activeId", label: "Active ID" },
  { id: "epin", label: "E-Pin" },
  { id: "teamNetwork", label: "Team Network" },
  { id: "incomeReport", label: "Income Report" },
  { id: "support", label: "Support" },
  { id: "profile", label: "My Profile" },
  { id: "settings", label: "Settings" },
];

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section
      id="member-panel"
      className="py-10 md:py-14 bg-slate-100 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-500 uppercase">
            Member Dashboard
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1">
            Life Spark Associates Panel
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Manage your IDs, E-Pins, team network, income reports and support
            from one place.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-6">
          {/* Sidebar */}
          <aside className="md:w-64 shrink-0 rounded-2xl bg-white/90 border border-slate-200 shadow-sm shadow-slate-200/80 backdrop-blur-xl p-4 flex flex-col">
            <div className="mb-3">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-500 uppercase">
                Member Panel
              </p>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                Welcome, Associate
              </p>
              <p className="text-[11px] text-slate-500">
                ID: <span className="font-medium text-slate-800">LSA12345</span>
              </p>
            </div>

            <div className="space-y-1 flex-1 overflow-y-auto">
              {SIDE_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs md:text-sm text-left transition
                      ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white shadow-sm shadow-emerald-300/50"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200 text-[11px] text-slate-500">
              <p>
                Wallet:{" "}
                <span className="font-semibold text-slate-900">₹ 8,540</span>
              </p>
              <button className="mt-2 text-red-500 hover:text-red-400">
                Logout
              </button>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-h-[260px]">
            {activeTab === "dashboard" && <MP_Dashboard />}
            {activeTab === "activeId" && <MP_ActiveId />}
            {activeTab === "epin" && <MP_Epin />}
            {activeTab === "teamNetwork" && <MP_TeamNetwork />}
            {activeTab === "incomeReport" && <MP_IncomeReport />}
            {activeTab === "support" && <MP_Support />}
            {activeTab === "profile" && <MP_Profile />}
            {activeTab === "settings" && <MP_Settings />}
          </main>
        </div>
      </div>
    </section>
  );
};

export default MemberDashboard;

/* ========== Reusable Card ========== */

const MPCard = ({ title, children }) => (
  <div className="rounded-2xl bg-white border border-slate-200 shadow-sm shadow-slate-200/70 p-4 md:p-5 mb-4">
    <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
      {title}
    </h3>
    <div className="text-xs md:text-sm text-slate-600">{children}</div>
  </div>
);

/* ========== Tab Contents ========== */

const MP_Dashboard = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Dashboard Overview
    </h2>
    <div className="grid gap-4 md:grid-cols-3">
      <MPCard title="Total Team">
        <p>120 Members</p>
      </MPCard>
      <MPCard title="Active IDs">
        <p>32 IDs</p>
      </MPCard>
      <MPCard title="Today&apos;s Income">
        <p>₹ 1,250</p>
      </MPCard>
    </div>
  </div>
);

const MP_ActiveId = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Active ID
    </h2>
    <MPCard title="Your Active IDs">
      <p>
        Show a table here with columns like: ID, Package, DOJ, Expiry, Status.
      </p>
    </MPCard>
  </div>
);

const MP_Epin = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      E-Pin Management
    </h2>
    <MPCard title="Available E-Pins">
      <p>
        List of E-Pins with value, used/unused status, generated date and
        transfer options.
      </p>
    </MPCard>
    <MPCard title="Generate / Transfer">
      <p>
        Add a form to generate new pins or transfer them to team members.
      </p>
    </MPCard>
  </div>
);

const MP_TeamNetwork = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Team Network
    </h2>
    <MPCard title="Downline Overview">
      <p>
        Show left / right team count, level-wise members, active vs inactive and
        total business volume.
      </p>
    </MPCard>
  </div>
);

const MP_IncomeReport = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Income Report
    </h2>
    <MPCard title="Payout Summary">
      <p>
        Direct income, level income, ROI income, rewards and withdrawal history
        can be displayed here.
      </p>
    </MPCard>
  </div>
);

const MP_Support = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Support
    </h2>
    <MPCard title="Raise a Ticket">
      <p>
        Add a form with Subject, Category, Description and Attachment fields.
        Also show ticket history &amp; status.
      </p>
    </MPCard>
  </div>
);

const MP_Profile = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      My Profile
    </h2>
    <MPCard title="Personal Details">
      <p>
        Name, mobile, email, address, nominee details, bank / UPI details and
        KYC status.
      </p>
    </MPCard>
  </div>
);

const MP_Settings = () => (
  <div>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Settings
    </h2>
    <MPCard title="Security &amp; Preferences">
      <p>
        Password change, 2FA, login alerts and other notification preferences
        can come here.
      </p>
    </MPCard>
  </div>
);
