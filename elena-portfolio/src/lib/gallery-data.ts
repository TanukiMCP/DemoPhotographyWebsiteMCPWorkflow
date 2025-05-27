export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  location: string;
  camera?: string;
  settings?: string;
  width: number;
  height: number;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  location: string;
  coverImage: string;
  images: GalleryImage[];
  featured: boolean;
}

export const galleries: Gallery[] = [
  {
    id: 'morocco',
    title: 'Morocco Markets',
    description: 'Vibrant souks and bustling marketplaces where tradition meets daily life',
    location: 'Morocco',
    coverImage: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop',
    featured: true,
    images: [
      {
        id: 'morocco-1',
        src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=800&fit=crop',
        alt: 'Moroccan spice market with colorful displays',
        title: 'Spice Merchant',
        description: 'A vendor arranges his colorful spices in the medina of Marrakech',
        location: 'Marrakech, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/125s, ISO 400',
        width: 1200,
        height: 800
      },      {
        id: 'morocco-2',
        src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop',
        alt: 'Traditional Moroccan textiles and carpets',
        title: 'Textile Treasures',
        description: 'Handwoven carpets and fabrics tell stories of generations',
        location: 'Fez, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/4.0, 1/60s, ISO 800',
        width: 1200,
        height: 800
      },
      {
        id: 'morocco-3',
        src: 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?w=1200&h=800&fit=crop',
        alt: 'Moroccan man in traditional dress',
        title: 'Guardian of Tradition',
        description: 'A craftsman preserves ancient techniques in modern times',
        location: 'Chefchaouen, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/250s, ISO 200',
        width: 1200,
        height: 800
      },
      {
        id: 'morocco-4',
        src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=800&fit=crop',
        alt: 'Moroccan architecture and doorways',
        title: 'Doorways to History',
        description: 'Every entrance tells a story in the ancient medina',
        location: 'Rabat, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/5.6, 1/125s, ISO 400',
        width: 1200,
        height: 800
      },
      {
        id: 'morocco-5',
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
        alt: 'Moroccan desert landscape',
        title: 'Desert Dreams',
        description: 'The Sahara reveals its timeless beauty at golden hour',
        location: 'Sahara Desert, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/8.0, 1/250s, ISO 100',
        width: 1200,
        height: 800
      },
      {
        id: 'morocco-6',
        src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=800&fit=crop',
        alt: 'Moroccan tea ceremony',
        title: 'Tea Ritual',
        description: 'The art of hospitality flows through every cup',
        location: 'Essaouira, Morocco',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/60s, ISO 1600',
        width: 1200,
        height: 800
      }
    ]
  },  {
    id: 'peru',
    title: 'Peru Festivals',
    description: 'Colorful celebrations where ancient traditions come alive',
    location: 'Peru',
    coverImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop',
    featured: true,
    images: [
      {
        id: 'peru-1',
        src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop',
        alt: 'Peruvian festival dancers in traditional costumes',
        title: 'Dance of the Ancestors',
        description: 'Traditional dancers honor their heritage in vibrant celebration',
        location: 'Cusco, Peru',
        camera: 'Canon EOS R5',
        settings: 'f/4.0, 1/125s, ISO 800',
        width: 1200,
        height: 800
      },
      {
        id: 'peru-2',
        src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&h=800&fit=crop',
        alt: 'Machu Picchu ancient ruins',
        title: 'Lost City Revealed',
        description: 'Morning mist unveils the mysteries of Machu Picchu',
        location: 'Machu Picchu, Peru',
        camera: 'Canon EOS R5',
        settings: 'f/11, 1/60s, ISO 200',
        width: 1200,
        height: 800
      },
      {
        id: 'peru-3',
        src: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&h=800&fit=crop',
        alt: 'Peruvian woman in traditional dress',
        title: 'Keeper of Culture',
        description: 'Traditional dress carries the stories of generations',
        location: 'Sacred Valley, Peru',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/250s, ISO 400',
        width: 1200,
        height: 800
      },
      {
        id: 'peru-4',
        src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=800&fit=crop',
        alt: 'Peruvian market with colorful textiles',
        title: 'Woven Stories',
        description: 'Every thread tells a tale in the highland markets',
        location: 'Pisac, Peru',
        camera: 'Canon EOS R5',
        settings: 'f/5.6, 1/125s, ISO 600',
        width: 1200,
        height: 800
      },
      {
        id: 'peru-5',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Peruvian mountain landscape',
        title: 'Andean Majesty',
        description: 'The Andes stand as silent witnesses to time',
        location: 'Huacachina, Peru',
        camera: 'Canon EOS R5',
        settings: 'f/8.0, 1/250s, ISO 100',
        width: 1200,
        height: 800
      }
    ]
  },  {
    id: 'japan',
    title: 'Japan Temples',
    description: 'Sacred spaces where spirituality meets architectural beauty',
    location: 'Japan',
    coverImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop',
    featured: true,
    images: [
      {
        id: 'japan-1',
        src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop',
        alt: 'Traditional Japanese temple with cherry blossoms',
        title: 'Spring Awakening',
        description: 'Cherry blossoms frame the ancient temple in perfect harmony',
        location: 'Kyoto, Japan',
        camera: 'Canon EOS R5',
        settings: 'f/4.0, 1/125s, ISO 200',
        width: 1200,
        height: 800
      },
      {
        id: 'japan-2',
        src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop',
        alt: 'Japanese monk in meditation',
        title: 'Moment of Zen',
        description: 'A monk finds peace in the temple gardens',
        location: 'Nara, Japan',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/60s, ISO 800',
        width: 1200,
        height: 800
      },
      {
        id: 'japan-3',
        src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&h=800&fit=crop',
        alt: 'Traditional Japanese architecture details',
        title: 'Sacred Geometry',
        description: 'Every line and curve speaks of ancient wisdom',
        location: 'Tokyo, Japan',
        camera: 'Canon EOS R5',
        settings: 'f/5.6, 1/125s, ISO 400',
        width: 1200,
        height: 800
      },
      {
        id: 'japan-4',
        src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&h=800&fit=crop',
        alt: 'Japanese garden with stone lantern',
        title: 'Garden of Reflection',
        description: 'Stone lanterns guide the path to enlightenment',
        location: 'Kanazawa, Japan',
        camera: 'Canon EOS R5',
        settings: 'f/8.0, 1/60s, ISO 200',
        width: 1200,
        height: 800
      },
      {
        id: 'japan-5',
        src: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1200&h=800&fit=crop',
        alt: 'Japanese tea ceremony',
        title: 'Way of Tea',
        description: 'The tea ceremony embodies the essence of Japanese culture',
        location: 'Uji, Japan',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/125s, ISO 1600',
        width: 1200,
        height: 800
      }
    ]
  },  {
    id: 'india',
    title: 'India Villages',
    description: 'Rural life where tradition flows through everyday moments',
    location: 'India',
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
    featured: true,
    images: [
      {
        id: 'india-1',
        src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop',
        alt: 'Indian woman in colorful sari',
        title: 'Colors of Life',
        description: 'A village woman carries the vibrancy of her culture',
        location: 'Rajasthan, India',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/250s, ISO 400',
        width: 1200,
        height: 800
      },
      {
        id: 'india-2',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Indian temple architecture',
        title: 'Divine Architecture',
        description: 'Ancient temples reach toward the heavens',
        location: 'Tamil Nadu, India',
        camera: 'Canon EOS R5',
        settings: 'f/8.0, 1/125s, ISO 200',
        width: 1200,
        height: 800
      },
      {
        id: 'india-3',
        src: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1200&h=800&fit=crop',
        alt: 'Indian spice market',
        title: 'Spice Symphony',
        description: 'Aromatic spices create a feast for all senses',
        location: 'Kerala, India',
        camera: 'Canon EOS R5',
        settings: 'f/4.0, 1/60s, ISO 800',
        width: 1200,
        height: 800
      },
      {
        id: 'india-4',
        src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=800&fit=crop',
        alt: 'Indian village children',
        title: 'Future Guardians',
        description: 'Children play in the village where tradition lives on',
        location: 'Uttar Pradesh, India',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/125s, ISO 600',
        width: 1200,
        height: 800
      },
      {
        id: 'india-5',
        src: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&h=800&fit=crop',
        alt: 'Indian festival celebration',
        title: 'Festival of Colors',
        description: 'Holi brings communities together in joyful celebration',
        location: 'Varanasi, India',
        camera: 'Canon EOS R5',
        settings: 'f/5.6, 1/250s, ISO 800',
        width: 1200,
        height: 800
      }
    ]
  }
];export const getAllGalleries = (): Gallery[] => galleries;

export const getGalleryById = (id: string): Gallery | undefined => 
  galleries.find(gallery => gallery.id === id);

export const getFeaturedGalleries = (): Gallery[] => 
  galleries.filter(gallery => gallery.featured);