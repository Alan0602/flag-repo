import ReactDOM from "react-dom/client";
import "./index.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Level1 from "./Level1";
import Spiderman from "./Spiderman";
import Submission from "./Submission";

const routes = [
    {
        path: "/level1",
        element: <Level1 />,
    },
    {
        path: "/spiderman",
        element: <Spiderman />,
    },
    {
        path: "/submission",
        element: <Submission />,
    },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


export default App;