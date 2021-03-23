import "./App.css";
import { FaGooglePlay } from "react-icons/fa";
import { GiFruitBowl, GiScooter } from "react-icons/gi";

function App() {
  return (
    <div className="container">
      <nav className="flex navbar">
        <div className="logo">
          <span>H</span>
          <span>D</span>
        </div>
        <ul className="flex ul">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Delivery</a>
          </li>

          <li>
            <a href="#">Reviews</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Delivery natural herbal drinks</h1>
        <p>Perfect snack for hot summer East right and tasty</p>
        <div className="buttons">
          <button>Request a call</button>
          <div className="right">
            <button></button>
            <span>Smoothies Recipe Video</span>
          </div>
        </div>
      </main>
      <footer>
        <button>There are over 500 recipies in our menu</button>
        <button>There are over 500 recipies in our menu</button>
        <button>There are over 500 recipies in our menu</button>
      </footer>
    </div>
  );
}

export default App;
