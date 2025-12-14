import React from "react";

const TotalDirectUser = () => {
  // 🔹 Future me API se data aayega
  const directUsers = []; 
  // Example:
  // const directUsers = [
  //   { name: "Rahul Kumar", userId: "USR001", status: "Active", joined: "12-02-2024" },
  // ];

  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-8">
      
      {/* ===== HEADER ===== */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          My Direct Team
        </h1>
        <p className="text-slate-500 mt-1 text-sm md:text-base">
          List of users directly referred by you
        </p>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

        {/* ===== TABLE HEADER (DESKTOP ONLY) ===== */}
        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-slate-100 text-slate-600 font-medium text-sm">
          <span>Name</span>
          <span>User ID</span>
          <span>Status</span>
          <span>Joining Date</span>
        </div>

        {/* ===== NO DATA STATE ===== */}
        {directUsers.length === 0 && (
          <div className="py-16 flex flex-col items-center justify-center text-center text-slate-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png"
              alt="No data"
              className="h-28 mb-4 opacity-70"
            />
            <p className="text-lg font-semibold">No Records Found</p>
            <p className="text-sm mt-1">
              You don’t have any direct team members yet.
            </p>
          </div>
        )}

        {/* ===== DATA LIST ===== */}
        {directUsers.map((user, index) => (
          <div
            key={index}
            className="border-t md:border-none md:grid md:grid-cols-4 gap-4 px-4 md:px-6 py-4 hover:bg-slate-50 transition"
          >
            {/* MOBILE CARD VIEW */}
            <div className="md:hidden space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-500">Name</span>
                <span className="font-medium text-slate-800">
                  {user.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">User ID</span>
                <span className="text-slate-700">{user.userId}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Status</span>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    user.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Joining Date
                </span>
                <span className="text-slate-600">{user.joined}</span>
              </div>
            </div>

            {/* DESKTOP TABLE VIEW */}
            <span className="hidden md:block font-medium text-slate-800">
              {user.name}
            </span>
            <span className="hidden md:block text-slate-600">
              {user.userId}
            </span>
            <span className="hidden md:block">
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  user.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </span>
            <span className="hidden md:block text-slate-500">
              {user.joined}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalDirectUser;
