export interface Restaurant {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  cuisine: string;
  description: string;
  source: 'offmenu' | 'topjaw' | 'other';
  sourceDetails: {
    episodeTitle?: string;
    episodeNumber?: string;
    featuredDate?: string;
    guestName?: string;
  };
  photos?: string[];
  rating?: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  phoneNumber?: string;
  website?: string;
  tags: string[];
}