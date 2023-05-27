import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//useSelector讀取 store 裏面的資料
//useDispatch呼叫 slice 的 action
import {
  coffeeOrdered,
  coffeeRestocked,
  selectCoffee,
} from "../features/slices/coffeeSlice";

function CoffeeBlock() {
  // 這裡建議採用callback的方式去讀取相應的state，會比較不影響效能
  // const coffee = useSelector((state) => state.coffee);
  const coffee = useSelector(selectCoffee);
  console.log("咖啡", coffee);
  const dispatch = useDispatch(); //呼叫 slice 的 action
  // 這裡採 react 簡單的 useRef 來處理
  // 咖啡購買
  const coffeeOrderQtyRef = useRef(null);
  const coffeeOrderMoneyRef = useRef(null);
  // 咖啡進貨
  const coffeeRestockQtyRef = useRef(null);
  const coffeeRestockMoneyRef = useRef(null);
  // 咖啡購買送出
  const doOrderCoffee = () => {
    const sendData = {
      qty: coffeeOrderQtyRef.current.value,
      money: coffeeOrderMoneyRef.current.value,
    };
    dispatch(coffeeOrdered(sendData)); //呼叫 slice 的 action
  };
  // 咖啡進貨送出
  const doRestockCoffee = () => {
    const sendData = {
      qty: coffeeRestockQtyRef.current.value,
      money: coffeeRestockMoneyRef.current.value,
    };
    dispatch(coffeeRestocked(sendData));
  };
  return (
    <div>
      <h4>咖啡存量 {coffee.numOfCoffee}</h4>
      <fieldset>
        <legend>咖啡購買</legend>
        <div>
          <label htmlFor="coffeeQty">數量</label>
          <input id="coffeeQty" type="number" ref={coffeeOrderQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeMoney">價錢</label>
          <input id="coffeeMoney" type="number" ref={coffeeOrderMoneyRef} />
        </div>
        <button onClick={doOrderCoffee}>購買</button>
      </fieldset>
      <fieldset>
        <legend>咖啡進貨</legend>
        <div>
          <label htmlFor="coffeeRestockQty">數量</label>
          <input
            id="coffeeRestockQty"
            type="number"
            ref={coffeeRestockQtyRef}
          />
        </div>
        <div>
          <label htmlFor="coffeeRestockMoney">價錢</label>
          <input
            id="coffeeRestockMoney"
            type="number"
            ref={coffeeRestockMoneyRef}
          />
        </div>
        <button onClick={doRestockCoffee}>進貨</button>
      </fieldset>
    </div>
  );
}

export default CoffeeBlock;
