import React from 'react';
import { Provider } from 'react-redux';

// import store from './Customer/store'
import store from './Cart/store'
import CustomerIndex from './Customer/components/CustomerIndex';
import CartIndex from './Cart/CartIndex'

function ThunkApp() {
//for customerIndex run json server

  return (
    <>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        {/* <Login/> */}
        <CartIndex/>
        {/* <CustomerIndex /> */}
      </Provider>

      {/* </BrowserRouter> */}

    </>
  );
}

export default ThunkApp;
