import {configureStore} from '@reduxjs/toolkit';
import cartslice from './cart-slice';
import uislice from './ui-slice';

const store=configureStore({
    reducer:{ui:uislice.reducer,cart:cartslice.reducer}
})

export default store;