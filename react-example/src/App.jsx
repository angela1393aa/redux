import { useSelector } from "react-redux"; //讀取 store 裏面的資料
function App() {
  // 這裡建議採用callback的方式去讀取相應的state，會比較不影響效能
  const coffee = useSelector((state) => state.coffee);
  console.log("coffee", coffee);
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
