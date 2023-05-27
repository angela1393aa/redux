import CoffeeBlock from "./components/CoffeeBlock"; //咖啡
import CoffeeBeanBlock from "./components/coffeeBeanBlock"; //咖啡豆
function App() {
  return (
    <div className="container">
      <h1>Restaurant Record</h1>
      <CoffeeBlock />
      <CoffeeBeanBlock />
    </div>
  );
}

export default App;
