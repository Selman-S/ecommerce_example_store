import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
   const {userId} = auth()

   if (!userId) {
     return new NextResponse("Unauthorized", {status: 401, });
   }

   await connectToDB();

   let user = await User.findOne({
     clerkId: userId,
   });

   // kullanıcı ilk kez girdiği zaman yeni bir data oluşturur
   if (!user) {
     user = await User.create({
       clerkId: userId,
       wishlist: [],
     });
     await user.save();
   }

   return NextResponse.json(user,{status: 200, });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", {status: 500, });
  }
};
