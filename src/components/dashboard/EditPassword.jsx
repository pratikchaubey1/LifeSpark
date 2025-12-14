import React, { useState } from "react";

function EditPassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // 👁️ visibility states
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full min-h-[100vh] text-black flex items-start justify-center px-4 py-6 bg-gray-200">
      <div className="w-full max-w-lg bg-gray-50 rounded-xl shadow-lg border border-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Edit Password
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Update your account password securely
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Current Password
            </label>
            <div className="relative">
              <input
                type={show.current ? "text" : "password"}
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <span
                onClick={() =>
                  setShow({ ...show, current: !show.current })
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
              >
                {show.current ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={show.new ? "text" : "password"}
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <span
                onClick={() =>
                  setShow({ ...show, new: !show.new })
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
              >
                {show.new ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={show.confirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <span
                onClick={() =>
                  setShow({ ...show, confirm: !show.confirm })
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
              >
                {show.confirm ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg p-3">
            🔒 Password should be at least 8 characters long and include a mix
            of letters, numbers, and symbols.
          </div>

          {/* Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPassword;
