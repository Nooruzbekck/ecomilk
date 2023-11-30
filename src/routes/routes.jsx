import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import LoadingIndicator from "../components/loader/Loader"

const ErrorPage = lazy(() => import("pages/ErrorPage"))
const DiscountsPage = lazy(() => import("pages/DiscountPage/DiscountsPage"))
const ProductInfoPage = lazy(() => import("pages/PruductInfoPage"))
const App = lazy(() => import("../App"))

const LazyComponent = (Component) => (
  <Suspense fallback={<LoadingIndicator />}>
    <Component />
  </Suspense>
)

export const app_routes = createBrowserRouter([
  {
    path: "/",
    element: LazyComponent(App),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/discounts",
    element: LazyComponent(DiscountsPage),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/product-info",
    element: LazyComponent(ProductInfoPage),
  },
])
