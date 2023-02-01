import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiactions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { cartactions } from './store/cart-slice';

let isinitial=true;
function App() {
  const showcart=useSelector((state)=>state.ui.iscartvisible);
  const cart=useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.ui.notification)

  const fetchcartdata=()=>{
    return async (dispatch) =>{
      const fetchdata = async () =>{
        const response = await fetch('https://redux-demo-3e192-default-rtdb.firebaseio.com/cart.json');
        if (!response.ok){
          throw new Error('failed');
        }
        const data = await response.json();
        return data;
      }
      try {
        const cartdata=await fetchdata();
        dispatch(cartactions.replacecart({items:cartdata.items || [],totalquantity:cartdata.totalquantity}));
      }
      catch (error){
        dispatch(uiactions.shownotif({
          status:'error',
          title:'error!',
          message:'sending cart data failed'
        }))  
      }
      
    }
  }
  useEffect(()=>{
    dispatch(fetchcartdata())
  },[dispatch])
  useEffect(()=>{
    const sendcartdata=async()=>{
      dispatch(uiactions.shownotif({
        status:'pending',
        title:'sending',
        message:'sending cart data'
      }))
    const response= await fetch('https://redux-demo-3e192-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
    body:JSON.stringify({items:cart.items,totalquantity:cart.totalquantity})}
    )
  if (!response.ok){
    throw new Error('sending failed');
  }
  
    dispatch(uiactions.shownotif({
      status:'success',
      title:'success!',
      message:'sent cart data'
    }))
  }
  if (isinitial){
    isinitial=false;
    return;
  }

  if (cart.changed){
    try{
    sendcartdata()}
    catch(error)
    {
      dispatch(uiactions.shownotif({
        status:'error',
        title:'error!',
        message:'sending cart data failed'
      }))  

    }
}},[cart,dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
