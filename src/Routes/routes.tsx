import { createBrowserRouter } from "react-router-dom";
import { About, Blog, ContactUs, Landing, NotFound, Projects, Selector, Dashboard, ProjectDetails, ChannelPartner, Gallery, BlogDetails, GalleryDetails, Calculator } from '../Pages/Exports';
import Layout from '../Layout/Layout';


const router = createBrowserRouter([

    {
      path: '/',
      element: <Landing />,
      errorElement: <NotFound />, 
    },
    {
      path : "/selector",
      element : <Selector />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          //projects
          path: "/projects",
          element: <Projects />,
        },

        //projects/:id
        {
          path : "/projects/:id",
          element : <ProjectDetails />,
        },
        //projects/:id/calculator
        {
          path : "/projects/:id/calculator",
          element : <Calculator />,
        },
        {
          path : "/channelpartner",
          element : <ChannelPartner />,
        },
        {
          path : "/gallery",
          element : <Gallery />,
        },
        {
          path : "/gallery/:id",
          element : <GalleryDetails />,
        },

        {
          path : "/blog",
          element : <Blog />,
        },
        {
          path:"/blog/:id",
          element:<BlogDetails/>
        },

        {
          path : "/contact",
          element : <ContactUs />,
        },
        ],
    },
    {
      path : "/admin",
      element : <Dashboard />,
    },
  {
    path: "*",
    element: <NotFound />,
  },
]);




export default router;
