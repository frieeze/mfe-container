import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Nav from './components/nav';
import Counter from 'counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createHashRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/counter',
//     element: <Counter />,
//   },
// ]);

root.render(
  <React.StrictMode>
    <Nav />

    {/* <RouterProvider router={router} /> */}
    <App />
    <React.Suspense>
      <Counter />
    </React.Suspense>
  </React.StrictMode>,
);
