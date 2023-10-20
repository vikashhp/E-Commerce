import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <img className={classes.amount} src={props.imageUrl}/>
        </div>
      </div>
      
    </li>
  );
};

export default CartItem;
