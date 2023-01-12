import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'routes';
import store from 'store'
import {Provider} from 'react-redux'
import { createStandaloneToast } from '@chakra-ui/toast'

const {ToastContainer, toast} = createStandaloneToast()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   StrictMode removido pois renderizava duas vezes
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router />
//     </Provider>
//   </React.StrictMode>
// );

root.render(
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>
);

// toast({
//   description: 'está funcionando',
//   duration: 2000
// })