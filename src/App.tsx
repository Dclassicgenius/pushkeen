import "./App.css";
import Card from "./components/Card/Card";
import { cards } from "./cards";

function App() {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default App;
