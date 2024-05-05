"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
 const [selectedImage, setSelectedImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={selectedImage}
        width={500}
        height={500}
        alt="product image"
        className="w-96 h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">

      {productMedia.map((media, index) => (
       <Image
       key={index}
       src={media}
       width={200}
       height={200}
       alt="product image"
       className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${selectedImage === media ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
       onClick={() => setSelectedImage(media)}
       />
      ))}
      </div>
    </div>
  );
};

export default Gallery;
