import { useState } from 'react';
import mockServices from '../mock_services.json';

export default function Services() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', ...new Set(mockServices.map(service => service?.category || 'Uncategorized'))];

  const filteredServices = mockServices.filter(service =>
    (service?.title || '').toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || service?.category === category)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8 text-center">Government Services</h2>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search services..."
            className="flex-grow border p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white border shadow-md rounded-lg p-5 hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">{service?.title || 'No Title'}</h3>
              <p className="text-gray-700 text-sm">
                {(service?.description || 'No description available').slice(0, 80)}...
              </p>
              <p className="text-xs text-gray-500 mt-2">{service?.category || 'Uncategorized'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected service */}
      {selectedService && (
      <div
        className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        onClick={() => setSelectedService(null)}
      >
        <div
          className="bg-white max-w-md w-full mx-4 p-6 rounded-lg shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl"
            onClick={() => setSelectedService(null)}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Service Details */}
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            {selectedService?.title || 'No Title'}
          </h2>
          <p className="text-sm mb-1 text-gray-500">
            <strong>Category:</strong> {selectedService?.category || 'Uncategorized'}
          </p>
          <p className="text-gray-800 mb-6">{selectedService?.description || 'No description available'}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <a
              href="#"
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded hover:bg-indigo-200 transition text-sm font-medium"
            >
              More Info
            </a>
            <button
              onClick={() => alert(`Apply flow not yet implemented for: ${selectedService.title}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    )}

    </div>
  );
}
