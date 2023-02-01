import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiactions} from '../../store/ui-slice'

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartquantity=useSelector(state=>state.cart.totalquantity);
  function carthandler(){
      dispatch(uiactions.toggle());
  }
  return (
    <button className={classes.button} onClick={carthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
