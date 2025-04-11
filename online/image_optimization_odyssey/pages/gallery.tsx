import { JSX } from 'react';
import Gallery from '../components/Gallery';

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

const demoImages: ImageData[] = [
  { id: 1, url: '/images/cat.webp', alt: '' },
  { id: 2, url: '/images/happy_dog.jpg', alt: 'A happy dog' },
];

export default function GalleryPage(): JSX.Element {
  return (
    <div>
      <h1>Image Gallery</h1>
      <Gallery images={demoImages} />
    </div>
  );
}