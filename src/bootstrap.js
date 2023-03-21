import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Nav from './components/nav';
import Counter from 'counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const counterURL = process.env.REACT_APP_COUNTER_BASE_URL;

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
    {/* <RouterProvider router={router} /> */}
    <App />
    <React.Suspense>
      <>
        <h2>Component pulled from {counterURL}</h2>
        <Counter />
      </>
    </React.Suspense>
  </React.StrictMode>,
);
