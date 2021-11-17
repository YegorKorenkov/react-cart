import { FC } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import CartItem from './components/CartItem';
import { ReactComponent as ArrowIcon } from 'src/assets/Arrow.svg';

import { selectCartItems, selectDeletedItemsLength } from './store/selectors';
import { useAppDispatch } from './hooks/useDispatchType';
import { returnItem } from './store/slice';
import { DataModel } from './constants/data';
import { getPriceWithDiscount } from './utils/getPriceWithDiscount';

const getTotalAmount = (items: DataModel) => {
  return items.reduce(
    (prev, next) => (prev += getPriceWithDiscount(next.amount, next.price).numberPrice),
    0,
  );
};

const App: FC = () => {
  const items = useSelector(selectCartItems);
  const deletedItemsLength = useSelector(selectDeletedItemsLength);
  const dispatch = useAppDispatch();

  const submitOrder = () => {
    const orderData = {
      items: items.map((item) => ({
        ...item,
        totalPrice: getPriceWithDiscount(item.amount, item.price).numberPrice,
      })),
      totalOrderPrice: getTotalAmount(items),
    };

    console.log(orderData);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="cart">
          <div className="cart__return">
            <button
              onClick={() => dispatch(returnItem())}
              className={classnames({
                cart__return__btn: true,
                cart__return__btn_disabled: !deletedItemsLength,
              })}>
              {' '}
              <ArrowIcon />
              Return product
            </button>
          </div>
          {items.map((item) => (
            <CartItem key={item.id} itemData={item} />
          ))}

          {items.length ? (
            <div className="cart__footer">
              <div className="cart__footer__price">
                <span>Total amount:</span>
                <span>{getTotalAmount(items)}$</span>
              </div>
              <button onClick={submitOrder}>Order</button>
            </div>
          ) : (
            <div className="cart__empty">
              <h2>
                Cart is empty <i>😕</i>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
