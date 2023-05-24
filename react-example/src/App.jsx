import { useSelector } from "react-redux"; //讀取 store 裏面的資料
import { selectCoffee } from "./features/slices/coffeeSlice";

function App() {
  // 這裡建議採用callback的方式去讀取相應的state，會比較不影響效能
  // const coffee = useSelector((state) => state.coffee);
  const coffee = useSelector(selectCoffee);
  console.log("coffee", coffee);
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
