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
 createdAt: string;
 updatedAt: string;
};

type OrderType = {
 shippingAddress: Object;
 _id: string;
 customerClerkId: string;
 products: [OrderItemType]
 shippingRate: string;
 totalAmount: number
}

type OrderItemType = {
 product: ProductType;
 color: string;
 size: string;
 quantity: number;
 _id: string;
}