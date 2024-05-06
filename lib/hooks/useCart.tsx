import { create } from "zustand";
import {toast} from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
 item: ProductType;
 quantity: number;
 color?: string; // ? means optional
 size?: string; // ? means optional
}

interface CartStore {
 cartItems: CartItem[];
 addItem:(item: CartItem) => void;
 removeItem:(_id: string) => void;
 increaseQuantity: (_id: string) => void;
 decreaseQuantity: (_id: string) => void;
 clearCart: () => void;
}

const useCart = create(persist<CartStore>(
 (set,get) => ({
  cartItems:[],
  addItem: (data: CartItem) => {
   const {item,quantity, color, size} = data;
   const currentItems = get().cartItems; // all items in the cart
   const isExisting = currentItems.find((cartItem) => {
    return cartItem.item._id === item._id && cartItem.color === color && cartItem.size === size;
   });
   if(isExisting){
    
    return toast("Item already exists in the cart",{icon:"🛒"});;
   }

   set({cartItems: [...currentItems, {item, quantity, color, size}]});
   toast("Item added to the cart",{icon:"🛒"});
  },
  removeItem: (_id: String) => {
   const currentItems = get().cartItems;
   const newItems = currentItems.filter((item) => item.item._id !== _id);
   set({cartItems: newItems});
   toast("Item removed from the cart",{icon:"🛒"});
  },
  increaseQuantity: (_idToIncrease: string) => {
   const currentItems = get().cartItems;
   const newItems = currentItems.map((currentItem) => {
    if(currentItem.item._id === _idToIncrease){
     return {...currentItem, quantity: currentItem.quantity + 1};
    }
    return currentItem;
   });
   set({cartItems: newItems});
   toast("Item quantity increased");
  },
  decreaseQuantity: (_idToDecrease: string) => {
   const currentItems = get().cartItems;
   const newItems = currentItems.map((currentItem) => {
    if(currentItem.item._id === _idToDecrease){
     return {...currentItem, quantity: currentItem.quantity - 1};
    }
    return currentItem;
   });
   set({cartItems: newItems});
   toast("Item quantity decreased");

  },
  clearCart: () => {
   set({cartItems: []});
   toast("Cart cleared");
  },
 }),
 {
  name: "cart-storage",
  storage:createJSONStorage(()=> localStorage),
 },
));

export default useCart;