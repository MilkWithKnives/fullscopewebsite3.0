// lib/portfolio.ts

export const PHOTO_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1600585154154-1e47f3dd76cc?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1554995208-5196c2dcbf19?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1600585154788-3d4a3e987cfa?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1600585154526-990dced4d86b?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1598300183173-3b4064a1a2c3?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1597007516390-5c1c6d45d6d0?auto=format&fit=crop&w=1600&q=70',
];

export const DRONE_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1500534324633-95f76c02d2d2?auto=format&fit=crop&w=1600&q=70',
];

export type VideoItem = { title: string; poster: string; src: string };

export const VIDEO_ITEMS: VideoItem[] = [
  {
    title: 'Hillside Modern',
    poster: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    title: 'Coastal Contemporary',
    poster: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    title: 'Skylight Loft',
    poster: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
  {
    title: 'Desert Retreat',
    poster: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
];