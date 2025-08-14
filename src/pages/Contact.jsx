export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 md:px-6 py-12">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input className="w-full border p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input className="w-full border p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea className="w-full border p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500" rows={4} placeholder="Type your message..." />
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
