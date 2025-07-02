import App from "@/App";
import Books from "@/pages/books";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Books,
            }
        ]
    },
]);

export default router;