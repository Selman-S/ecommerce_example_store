import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetail } from "@/lib/actions";

const ProductDetail = async ({params}:{params:{productId:string}}) => {
 const productDetail = await getProductDetail(params.productId);
 
  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={productDetail.media}/>
      <ProductInfo productDetail={productDetail}/>
    </div>
  )
}

export default ProductDetail
