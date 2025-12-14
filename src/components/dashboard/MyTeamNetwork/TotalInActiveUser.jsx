import React from "react";

const TotalInactiveUser = () => {
  // 🔹 Future me API se inactive users aayenge
  const inactiveUsers = [];
  // Example:
  // const inactiveUsers = [
  //   {
  //     name: "Amit Sharma",
  //     userId: "USR102",
  //     status: "Inactive",
  //     lastActive: "10-01-2024",
  //   },
  // ];

  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-8">
      
      {/* ===== HEADER ===== */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Direct Inactive Users
        </h1>
        <p className="text-slate-500 mt-1 text-sm md:text-base">
          List of your directly referred inactive members
        </p>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

        {/* ===== TABLE HEADER (DESKTOP ONLY) ===== */}
        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-slate-100 text-slate-600 font-medium text-sm">
          <span>Name</span>
          <span>User ID</span>
          <span>Status</span>
          <span>Last Active Date</span>
        </div>

        {/* ===== EMPTY STATE ===== */}
        {inactiveUsers.length === 0 && (
          <div className="py-16 flex flex-col items-center justify-center text-center text-red-600">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
              alt="No inactive users"
              className="h-28 mb-4 opacity-80"
            />
            <p className="text-lg font-semibold">
              No Inactive Users Found
            </p>
            <p className="text-sm mt-1 text-red-500 max-w-md">
              Currently all your direct members are active.  
              Inactive users will appear here once available.
            </p>
          </div>
        )}

        {/* ===== DATA LIST ===== */}
        {inactiveUsers.map((user, index) => (
          <div
            key={index}
            className="border-t md:border-none md:grid md:grid-cols-4 gap-4 px-4 md:px-6 py-4 hover:bg-slate-50 transition"
          >
            {/* ===== MOBILE CARD VIEW ===== */}
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
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                  {user.status}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Last Active
                </span>
                <span className="text-slate-600">
                  {user.lastActive}
                </span>
              </div>
            </div>

            {/* ===== DESKTOP TABLE VIEW ===== */}
            <span className="hidden md:block font-medium text-slate-800">
              {user.name}
            </span>
            <span className="hidden md:block text-slate-600">
              {user.userId}
            </span>
            <span className="hidden md:block">
              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                {user.status}
              </span>
            </span>
            <span className="hidden md:block text-slate-500">
              {user.lastActive}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalInactiveUser;
