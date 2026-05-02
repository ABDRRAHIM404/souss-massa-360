import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Souss Massa 360
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the Authentic Berber Soul of Southern Morocco
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">
            Explore Homestays
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Souss Massa 360?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">Authentic Homestays</h3>
            <p className="text-gray-600">Stay with local Berber families in traditional homes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🍲</div>
            <h3 className="text-xl font-bold mb-2">Traditional Cuisine</h3>
            <p className="text-gray-600">Learn to cook tagine and bake fresh bread</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Artisan Workshops</h3>
            <p className="text-gray-600">Experience argan oil and pottery making firsthand</p>
          </div>
        </div>
      </div>

      {/* Sample Listings */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Authentic Berber Stays</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Amazigh Heritage Stay</h3>
              <p className="text-gray-600 mb-2">📍 Paradise Valley</p>
              <p className="text-orange-500 font-bold text-lg">250 MAD <span className="text-sm">/night</span></p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Taghazout Surf Lodge</h3>
              <p className="text-gray-600 mb-2">📍 Taghazout</p>
              <p className="text-orange-500 font-bold text-lg">350 MAD <span className="text-sm">/night</span></p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Argan Garden Retreat</h3>
              <p className="text-gray-600 mb-2">📍 Taroudant</p>
              <p className="text-orange-500 font-bold text-lg">200 MAD <span className="text-sm">/night</span></p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
