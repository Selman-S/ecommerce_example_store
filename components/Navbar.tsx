"use client"
import Image from "next/image"
import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import { useUser } from "@clerk/nextjs"


const Navbar = () => {
 const {user} = useUser()
 console.log(user);
 
  return (
   <div className="sticky top-0 z-10 py-2 flex justify-between items-center px-8 bg-white ">
      <Link href="/">
       
      <Image src="/logo.png" width={150} height={30} alt="logo icon" />
      </Link>
      <div>
       <Link href="/">Home</Link>
      </div>
      <div>
       <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"><ShoppingCart />
       <p className="text-base-bold">Cat (0)</p>
       </Link>
       <Menu className="cursor-pointer"/> 
      </div>
     
    </div>
  )
}

export default Navbar
