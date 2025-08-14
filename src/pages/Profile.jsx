export default function Profile() {
  const user = {
    name: "Asha Kumari",
    email: "asha.kumari@example.com",
    phone: "9876543210",
    village: "Rampur",
    role: "Farmer",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">User Dashboard</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Full Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Phone:</span> {user.phone}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Village:</span> {user.village}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Role:</span> {user.role}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Joined:</span> Jan 2024
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-semibold">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
