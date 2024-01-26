import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <>
      <main>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
