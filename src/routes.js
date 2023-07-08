import { createBrowserRouter } from "react-router-dom";
import FormPage from "./pages/FormPage";
import CardPage from "./pages/CardPage";
import Redirect from "./pages/RedirectPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Page Not found...</div>,
  },
  {
    path: "/",
    element: <FormPage />,
  },
  {
    path: "vCard/:uuid",
    element: <CardPage />,
  },
  {
    path: "redirect/:uuid",
    element: <Redirect />,
  },
]);

export default router;
