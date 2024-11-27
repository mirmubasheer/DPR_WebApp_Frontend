
// App.tsx
import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './Routes/routes';
import { theme } from './Theme/theme';
import CursorBall from './CursorBall';
import Preloader from './components/Preloader';

// Create a new instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}> 
      <QueryClientProvider client={queryClient}>
        <Box className="App">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <RouterProvider router={router} />
              <CursorBall />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </>
          )}
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;










// // App.tsx
// import React, { useState, useEffect } from 'react';
// import { Box, ThemeProvider } from '@mui/material';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { RouterProvider } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// import router from './Routes/routes';
// import { theme } from './Theme/theme';
// import CursorBall from './CursorBall';
// import Preloader from './components/Preloader';

// // Create a new instance of QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Wait until the entire page has loaded
//     const handlePageLoad = () => setIsLoading(false);

//     if (document.readyState === "complete") {
//       handlePageLoad(); 
//     } else {
//       window.addEventListener("load", handlePageLoad); // Wait for the full page load event
//     }

//     return () => window.removeEventListener("load", handlePageLoad);
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <QueryClientProvider client={queryClient}>
//         <Box className="App">
//           {isLoading ? (
//             <Preloader />
//           ) : (
//             <>
//               <RouterProvider router={router} />
//               <CursorBall />
//               <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//               />
//             </>
//           )}
//         </Box>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;
