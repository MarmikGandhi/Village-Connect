export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-12">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md border-t-4 border-indigo-600">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
          Login to VillageConnect
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="1234567890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Village Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Rampur"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
