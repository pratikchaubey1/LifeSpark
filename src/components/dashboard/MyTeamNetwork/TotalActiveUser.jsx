import React from "react";

const TotalActiveUser = () => {
  // 🔹 Future me API / backend se data aayega
  const activeUsers = [];
  // Example:
  // const activeUsers = [
  //   {
  //     name: "Rahul Kumar",
  //     userId: "USR101",
  //     joiningDate: "12-02-2024",
  //     status: "Active",
  //   },
  // ];

  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-8">
      
      {/* ===== HEADER ===== */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Active Direct Users
        </h1>
        <p className="text-slate-500 mt-1 text-sm md:text-base">
          List of your directly referred active members
        </p>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

        {/* ===== TABLE HEADER (DESKTOP ONLY) ===== */}
        <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 bg-slate-100 text-slate-600 font-medium text-sm">
          <span>SR No</span>
          <span>User ID</span>
          <span>Name</span>
          <span>Joining Date</span>
          <span>Status</span>
        </div>

        {/* ===== EMPTY STATE ===== */}
        {activeUsers.length === 0 && (
          <div className="py-16 flex flex-col items-center justify-center text-center text-emerald-600">
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="No active users"
              className="h-24 mb-4 opacity-80"
            />
            <p className="text-lg font-semibold">
              No Active Users Found
            </p>
            <p className="text-sm mt-1 text-emerald-500">
              Active users aane par yahan show honge
            </p>
          </div>
        )}

        {/* ===== DATA LIST ===== */}
        {activeUsers.map((user, index) => (
          <div
            key={index}
            className="border-t md:border-none md:grid md:grid-cols-5 gap-4 px-4 md:px-6 py-4 hover:bg-slate-50 transition"
          >
            {/* ===== MOBILE VIEW ===== */}
            <div className="md:hidden space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-500">SR No</span>
                <span className="font-medium">{index + 1}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">User ID</span>
                <span>{user.userId}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">Name</span>
                <span className="font-medium">{user.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">Joining Date</span>
                <span>{user.joiningDate}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Status</span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                  {user.status}
                </span>
              </div>
            </div>

            {/* ===== DESKTOP VIEW ===== */}
            <span className="hidden md:block">{index + 1}</span>
            <span className="hidden md:block text-slate-600">
              {user.userId}
            </span>
            <span className="hidden md:block font-medium">
              {user.name}
            </span>
            <span className="hidden md:block text-slate-600">
              {user.joiningDate}
            </span>
            <span className="hidden md:block">
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                {user.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalActiveUser;
