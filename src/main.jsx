import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MainPage from "./components/MainPage.jsx";
import CollectionPage, { loader as collectionPageLoader } from "./components/CollectionPage.jsx";
import SearchPage, { loader as searchPageLoader } from "./components/SearchPage.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // view a specific collection
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "collections/:collectionName",
                element: <CollectionPage />,
                loader: collectionPageLoader,
            },
            // payment screen
            {
                path: "cart/payment",
            },
            // view cart
            {
                path: "cart",
                element: <Cart />,
            },
            // view product detail
            {
                path: "product/:product",
            },
            {
                path: "login",
            },
            {
                path: "signup",
            },
            {
                path: "search",
                element: <SearchPage />,
                loader: searchPageLoader,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
