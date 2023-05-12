
import FirstPage from "../pages/FirstPage";
import Order from "../pages/Order";
import Reviews from "../pages/Reviews";
import Catalog from "../pages/Catalog";
import LastPage from "../pages/LastPage";


export default function Home() {
  return (
    <main>
      <FirstPage />
      <Catalog />
      <Order />
      <Reviews />
      <LastPage />
    </main>
  )
}
