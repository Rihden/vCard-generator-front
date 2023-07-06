import { createBrowserRouter } from "react-router-dom";
import Form from "./pages/Form";
import Card from "./pages/Card";
import Redirect from "./pages/Redirect";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Page Not found...</div>
  },
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "vCard/:uuid",
    element: <Card />,
  },
  {
    path: "redirect/:uuid",
    element: <Redirect />
  }
]);

export default router;
