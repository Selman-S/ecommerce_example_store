

export const getCollections = async () => {

 try {
 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`); 
 console.log("response",response);
 
 const data = await response.json();
 // console.log("data",data);
 
 return data;
 } catch (error) {
  console.log(error);
  
 }
}

export const getProducts = async () => {
 try {
 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`); 
 const data = await response.json();
 return data;
 } catch (error) {
  console.log(error);
  
 }
}
