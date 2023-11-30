import { InfoProduct } from "../components/info-product/InfoProduct"
import ProductCover from "../components/product-cover/ProductCover"
import { AllProductList } from "../components/all-products/AllProductList"
import { useCategoryMilk } from "../hooks/useCategoryMilk"
import { withLayout } from "../layout/Layout"

function PruductInfoPage() {
  const { category } = useCategoryMilk()
  return (
    <>
      <ProductCover />
      {category ? <InfoProduct /> : null}
      <AllProductList />
    </>
  )
}

export default withLayout(PruductInfoPage)
