import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartactions } from '../../store/cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch=useDispatch();
  function removehandler(){
    dispatch(cartactions.removeitemfromcart(id));
  }
  function addhandler(){
    dispatch(cartactions.additemtocart({
      id,title,price
    }));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removehandler}>-</button>
          <button onClick={addhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
