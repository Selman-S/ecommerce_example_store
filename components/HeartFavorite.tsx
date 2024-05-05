"use client"
import { useUser } from '@clerk/nextjs';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const HeartFavorite = ({product}:{product:ProductType}) => {
 const { user } = useUser();
 const router = useRouter();

 const [loading, setLoading] = useState(false);
 const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
 const [isLiked, setIsLiked] = useState(false);

 const getUser = async () => {
   try {
     setLoading(true);
     const response = await fetch("/api/users");
     const data = await response.json();
     setSignedInUser(data);
     setIsLiked(data.wishlist.includes(product._id));
     setLoading(false);
   } catch (error) {
     console.log("user_get", error);
   }
 };

 useEffect(() => {
   getUser();
 }, [user]);

 const handleLike = async (
   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
 ) => {
   e.preventDefault();

   try {
     if (!user) {
       router.push("/sign-in");
       return;
     } else {
       setLoading(true);
       const response = await fetch("/api/users/wishlist", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           productId: product._id,
         }),
       });
       const updatedUser = await response.json();
       setSignedInUser(updatedUser);
       setIsLiked(updatedUser.wishlist.includes(product._id));
       setLoading(false);
     }
   } catch (error) {
     console.log("like", error);
   }
 };
  return (
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? "red" : "white"}`} />
    </button>
  )
}

export default HeartFavorite
