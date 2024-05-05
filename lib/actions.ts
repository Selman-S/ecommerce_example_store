

export const getCollections = async () => {

 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`); 
 const data = await response.json();
 
 return data;

}

export const getProducts = async () => {

 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`); 
 const data = await response.json();
 return data;

}

export const getProductDetail = async (id:string) => {

 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`); 
 const data = await response.json();
 return data;

}
