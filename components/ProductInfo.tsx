"use client";
import { useUser } from "@clerk/nextjs";
import { Heart, MinusCircle, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeartFavorite from "./HeartFavorite";

const ProductInfo = ({ productDetail }: { productDetail: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productDetail.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productDetail.sizes[0]
  );
const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productDetail.title}</p>
        <HeartFavorite product={productDetail} />
      </div>

      <div className="flex  gap-2">
        <p className="text-base-medium text-grey-2">Category</p>
        <p className="text-base-bold">{productDetail.category}</p>
      </div>

      <p className="text-heading3-bold">$ {productDetail.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description:</p>
        <p className="text-small-medium">{productDetail.description}</p>
      </div>

      {productDetail.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {productDetail.colors.map((color, index) => (
              <div
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      )}

      {productDetail.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productDetail.sizes.map((color, index) => (
              <div
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === color ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedSize(color)}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
       <p className="text-base-medium text-grey-2">Quantity:</p>
       <div className="flex gap-4 items-center">
        <MinusCircle className="hover:text-red-1 cursor-pointer" onClick={()=>quantity > 1 && setQuantity(quantity - 1)}/>
        <p className="text-body-bold">{quantity}</p>
        <PlusCircle className="hover:text-red-1 cursor-pointer"
        onClick={()=>quantity < 10 && setQuantity(quantity + 1)}
        />

       </div>
      </div>
      <button className="outline text-base-bold  py-3 rounded-lg hover:bg-black hover:text-white">
        Add to cart
      </button>
    </div>
  );
};

export default ProductInfo;
