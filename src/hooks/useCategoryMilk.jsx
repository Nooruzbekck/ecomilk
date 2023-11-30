import { useSearchParams } from "react-router-dom"

export const useCategoryMilk = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const ProducMilkId = (nameProduct) => {
    setSearchParams({ title: nameProduct })
  }

  const category = searchParams.get("title")
  return {
    category,
    ProducMilkId,
  }
}
