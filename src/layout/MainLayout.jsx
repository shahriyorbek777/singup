import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function MainLayout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
