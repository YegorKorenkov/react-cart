import { FC, useRef } from 'react';
import InputMask from 'react-input-mask';

import { DataModel } from 'src/constants/data';
import { useAppDispatch } from 'src/hooks/useDispatchType';
import { addItem, deleteItem, minusItem, setItemAmount } from 'src/store/slice';
import { getPriceWithDiscount } from 'src/utils/getPriceWithDiscount';

interface Props {
  itemData: DataModel[0];
}

const CartItem: FC<Props> = ({ itemData }) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  const onAddItem = () => {
    if (itemData.amount <= 99) {
      dispatch(addItem(itemData.id));
    }
  };

  const onMinusItem = () => {
    if (itemData.amount > 0) {
      dispatch(minusItem(itemData.id));
    }
  };

  return (
    <div className="cart__item">
      <img width={50} height={70} src={itemData.imgUrl} alt="Product" />
      <span className="cart__item__name">{itemData.name}</span>
      <div className="cart__item__amount">
        <button onClick={onMinusItem}>-</button>
        <InputMask
          ref={ref}
          className="input-text"
          mask="99"
          maskPlaceholder=""
          type="text"
          onChange={(e) => dispatch(setItemAmount({ id: itemData.id, amount: +e.target.value }))}
          value={'' + itemData.amount}
        />
        <button onClick={onAddItem}>+</button>
      </div>
      <span className="cart__item__price">
        {getPriceWithDiscount(itemData.amount, itemData.price).stringPrice}
      </span>

      <button onClick={() => dispatch(deleteItem(itemData.id))} className="cart__item__delete-btn">
        Delete
      </button>
    </div>
  );
};

export default CartItem;
