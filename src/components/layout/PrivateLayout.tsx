import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PrivateLayout() {
  return (
    <>
      <Navbar variant="solid"/>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}