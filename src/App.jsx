import MainSlider from "./components/main-slider/MainSlider"
import { withLayout } from "./layout/Layout"
import MainPage from "pages/MainPage/MainPage"

function App() {
  return (
    <>
      <div>
        <MainSlider />
        <MainPage />
      </div>
    </>
  )
}

export default withLayout(App)
