import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Subscribe } from "../components/subscribe";

export const MainLayout = () => {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Subscribe />
          <Footer />
        </footer>
      </div>
    </>
  );
};
