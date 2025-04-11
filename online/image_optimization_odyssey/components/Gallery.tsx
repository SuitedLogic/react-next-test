import { JSX } from "react";

interface ImageData {
    id: number;
    url: string;
    alt: string;
  }
  
  interface GalleryProps {
    images: ImageData[];
  }
  
  export default function Gallery({ images }: GalleryProps): JSX.Element {
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="relative">
            <img
              src={img.url}
              width={800}
              height={600}
              alt={img.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    );
  }