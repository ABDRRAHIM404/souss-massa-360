import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section / Section Héros / قسم البطل / ⵜⴰⵏⵏⴰⵡⵜ ⵜⴰⵏⵏⴰⵡⵜ */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Souss Massa 360
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the Authentic Berber Soul of Southern Morocco
            {/* Découvrez l'âme berbère authentique du Maroc méridional */}
            {/* اكتشف روح الأمازيغ الأصيلة في جنوب المغرب */}
            {/* ⵜⴰⵡⵉ ⵖⵔ ⵜⵎⵙⵙⴰⵏⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ ⵏ ⵓⵎⵓⵔⵓⴽ ⴰⵏⵏⴰⵏⵏⴰⵙ */}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">
            Explore Homestays
            {/* Explorer les hébergements / استكشف الإقامات / ⵜⴰⵡⵉ ⵖⵔ ⵉⵙⵙⵓⴳⴰⵎⴻⵏ */}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Souss Massa 360?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Listings */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Authentic Berber Stays</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {homestays.map((stay, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{stay.name}</h3>
                <p className="text-gray-600 mb-2">📍 {stay.location}</p>
                <p className="text-orange-500 font-bold text-lg">{stay.price} MAD <span className="text-sm">/night</span></p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  { icon: "🏠", title: "Authentic Homestays", description: "Stay with local Berber families in traditional homes" },
  { icon: "🍲", title: "Traditional Cuisine", description: "Learn to cook tagine and bake fresh bread" },
  { icon: "🎨", title: "Artisan Workshops", description: "Experience argan oil and pottery making firsthand" }
];

// Homestays data / Données des hébergements / بيانات الإقامات / ⵉⵙⴻⴼⴽⴰ ⵏ ⵉⵙⵙⵓⴳⴰⵎⴻⵏ
const homestays = [
  { name: "Amazigh Heritage Stay", location: "Paradise Valley", price: "250" },
  { name: "Taghazout Surf Lodge", location: "Taghazout", price: "350" },
  { name: "Argan Garden Retreat", location: "Taroudant", price: "200" },
  { name: "Atlas Mountain View", location: "Immouzer", price: "300" },
  { name: "Tafraoute Rock Stay", location: "Tafraoute", price: "180" },
  { name: "Souss Valley Farm", location: "Agadir", price: "220" }
];

export default HomePage;
