import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Shop } from "./pages/shop/shop";
import { ShopSingle } from "./pages/shop-single/shop-single";
import { Pagges } from "./pages/pagges/pagges";
import { Projects } from "./pages/projects/projects";
import { News } from "./pages/news/news";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pagges" element={<Pagges />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop-single/:id" element={<ShopSingle />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
