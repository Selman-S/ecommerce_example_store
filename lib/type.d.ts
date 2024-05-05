type CollectionType = {
 _id: string;
 title: string;
 image: string;
 products: number;
};

type ProductType = {
 _id: string;
 title: string;
 description: string;
 media: [string];
 category: string;
 collections: [string];
 tags: [string];
 sizes: [string];
 colors: [string];
 price: number;
 cost: number;
 createdAt: Date;
 updatedAt: Date;
}

type UserType = {
 clerkId: string;
 wishlist: [string];
 orders: [string];
 createdAt:string;
 updatedAt:string;
}