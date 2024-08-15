import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AddPlacePage from "./pages/AddPlacePage/AddPlacePage";
import PlacesPage from "./pages/PlacesPage/PlacesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/places/add", element: <AddPlacePage /> },
      { path: "/places", element: <PlacesPage /> },
    ],
  },
]);

export default router;
