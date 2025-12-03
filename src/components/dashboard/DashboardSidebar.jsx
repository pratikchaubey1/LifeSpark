// components/DashboardSidebar.jsx
import React from "react";

const DASHBOARD_ITEMS = [
  { label: "Profile" },
  { label: "ePin" },
  { label: "Active ID" },
  { label: "My Team Network" },
  { label: "My Team Business Support" },
  { label: "Income / Reports" },
];

export default function DashboardSidebar({ open, onClose }) {
  if (!open) return null;

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
          {DASHBOARD_ITEMS.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-800/80 transition"
            >
              <span>{item.label}</span>
              <span className="text-xs opacity-60">›</span>
            </button>
          ))}
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
