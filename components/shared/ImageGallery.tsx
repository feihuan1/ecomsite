"use client"

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: any;
}

const ImageGallery = ({ images }: ImageGalleryProps) => { 
    const [thumbnail, setThumbnail] = useState(images[0])

    const handleThumbnailChange = (image: any) => {
            setThumbnail(image)
    }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: number) => (
          <div
            className="overflow-hidden rounded-lg bg-gray-100"
            key={`image-gallery-${idx}`}
          >
            <Image
            onClick={() => setThumbnail(image)}
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image 
                src={urlFor(thumbnail).url()} 
                alt="photo" 
                width={500} 
                height={500} 
                className="w-full h-full object-cover object-center"
            />
      </div>
    </div>
  );
};

export default ImageGallery;
