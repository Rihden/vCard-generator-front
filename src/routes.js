import { createBrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Card from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "vCard/:id",
    element: <Card />,
  },
]);

export default router;
