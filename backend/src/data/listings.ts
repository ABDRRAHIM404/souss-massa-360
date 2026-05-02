// Souss Massa 360 Listings Data
// Données des listings Souss Massa 360
// بيانات قوائم سوس ماسا 360

export interface Listing {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  currency: string; // MAD - Moroccan Dirham / Dirham marocain / الدرهم المغربي
  image: string;
  rating: number;
  reviews: number;
  amenities: string[];
  maxGuests: number;
  type: 'Berber Homestay' | 'Villa' | 'Riad' | 'Guesthouse'; // Types d'hébergement berbère / أنواع الإقامة الأمازيغية
}

export const AGADIR_LISTINGS: Listing[] = [
  {
    id: '1',
    name: 'Amazigh Heritage Stay',
    location: 'Paradise Valley, Souss-Massa',
    description: 'Authentic Berber homestay in the heart of Paradise Valley. Experience traditional hospitality and local cuisine prepared by Amazigh women from the village. Perfect for cultural immersion.',
    price: 250,
    currency: 'MAD',
    image: '/images/amazigh-heritage.jpg',
    rating: 4.8,
    reviews: 142,
    amenities: ['WiFi', 'Home-cooked meals', 'Berber tea ceremony', 'Hiking guides', 'Hammam'],
    maxGuests: 4,
    type: 'Berber Homestay',
  },
  {
    id: '2',
    name: 'Taghazout Surf Lodge',
    location: 'Taghazout, Coastal Region',
    description: 'Bohemian surf lodge perched on cliffs overlooking the Atlantic. Stay with a Berber family, enjoy fresh seafood, and explore pristine beaches. Perfect for surfers and beach lovers.',
    price: 350,
    currency: 'MAD',
    image: '/images/taghazout-surf.jpg',
    rating: 4.7,
    reviews: 98,
    amenities: ['Surfboard rental', 'Beach access', 'Sunset views', 'Yoga studio', 'Restaurant'],
    maxGuests: 6,
    type: 'Guesthouse',
  },
  {
    id: '3',
    name: 'Argan Garden Retreat',
    location: 'Taroudant, Anti-Atlas Mountains',
    description: 'Stunning eco-friendly homestay surrounded by argan groves. Learn traditional argan oil production and enjoy organic, locally-sourced meals with your Berber hosts.',
    price: 200,
    currency: 'MAD',
    image: '/images/argan-garden.jpg',
    rating: 4.9,
    reviews: 167,
    amenities: ['Argan workshop', 'Garden tours', 'Cooking classes', 'Mountain views', 'Traditional decor'],
    maxGuests: 5,
    type: 'Berber Homestay',
  },
  {
    id: '4',
    name: 'Atlas Mountain View',
    location: 'Immouzer, Coastal Mountains',
    description: 'Breathtaking mountain views from this traditional Berber riad. Wake up to panoramic vistas, enjoy fresh juice from local fruits, and learn about mountain life from locals.',
    price: 300,
    currency: 'MAD',
    image: '/images/atlas-mountain.jpg',
    rating: 4.6,
    reviews: 112,
    amenities: ['Terrace', 'Panoramic views', 'Breakfast included', 'Local guide', 'Photography spot'],
    maxGuests: 4,
    type: 'Riad',
  },
  {
    id: '5',
    name: 'Tafraoute Rock Stay',
    location: 'Tafraoute, Anti-Atlas',
    description: 'Intimate homestay nestled among iconic pink and blue painted rocks. Experience authentic Berber village life, traditional meals, and stunning desert landscapes.',
    price: 180,
    currency: 'MAD',
    image: '/images/tafraoute-rocks.jpg',
    rating: 4.9,
    reviews: 156,
    amenities: ['Rock formations view', 'Local market tour', 'Stargazing', 'Family meals', 'Vehicle hire'],
    maxGuests: 3,
    type: 'Berber Homestay',
  },
  {
    id: '6',
    name: 'Souss Valley Farm',
    location: 'Agadir Outskirts, Souss Valley',
    description: 'Working farm stay experience with organic agriculture focus. Help with farm activities, enjoy farm-to-table meals, and connect with Berber farming traditions.',
    price: 220,
    currency: 'MAD',
    image: '/images/souss-valley-farm.jpg',
    rating: 4.7,
    reviews: 89,
    amenities: ['Farm activities', 'Vegetable garden', 'Organic meals', 'Animals', 'Peaceful setting'],
    maxGuests: 5,
    type: 'Berber Homestay',
  },
];

export const getListingById = (id: string): Listing | undefined => {
  return AGADIR_LISTINGS.find(listing => listing.id === id);
};

export const getListingsByType = (type: Listing['type']): Listing[] => {
  return AGADIR_LISTINGS.filter(listing => listing.type === type);
};

export const getListingsByLocation = (location: string): Listing[] => {
  return AGADIR_LISTINGS.filter(listing =>
    listing.location.toLowerCase().includes(location.toLowerCase())
  );
};
