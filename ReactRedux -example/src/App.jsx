import CoffeeBlock from "./components/CoffeeBlock"; //咖啡
import CoffeeBeanBlock from "./components/coffeeBeanBlock"; //咖啡豆
import CakeBlock from "./components/CakeBlock";

function App() {
  return (
    <div className="container">
      <h1>Restaurant Record</h1>
      <CoffeeBlock />
      <CoffeeBeanBlock />
      <CakeBlock />
    </div>
  );
}

export default App;
