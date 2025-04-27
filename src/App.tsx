import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject // Optional: for type safety
} from 'react-router-dom';
import './App.css'; // Keep global app styles

// Import Layout and Page components
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import TranslationsPage from './components/TranslationsPage';
import OfferDetailPage from './components/OfferDetailPage';
// Import ScrollRestoration here if placing it in Layout
// import { ScrollRestoration } from 'react-router-dom';


// Define routes using the object-based configuration
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // Layout wraps all child routes
    // ScrollRestoration can also potentially be placed here if Layout doesn't render it
    // children of the Layout route:
    children: [
      {
        index: true, // This is the default child route for "/"
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "translations",
        element: <TranslationsPage />,
      },
      {
        path: "offer/:offerId",
        element: <OfferDetailPage />,
      },
      // Add a 404 route if desired
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // }
    ],
  },
  // You could define routes outside the Layout here if needed
];

// Create the router instance
const router = createBrowserRouter(routes, {
  basename: "/learnWithT", // Keep the basename for GitHub Pages
});

// The App component now renders the RouterProvider
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;