import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
