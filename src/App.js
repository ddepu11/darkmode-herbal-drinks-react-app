import "./App.css";
import { FaGooglePlay } from "react-icons/fa";
import { GiFruitBowl, GiScooter, GiHealthNormal } from "react-icons/gi";

function App() {
  const handleChange = (e) => {};

  return (
    <div className="container">
      <nav className="flex navbar">
        <div className="logo">
          <span>H</span>
          <span>D</span>
        </div>
        <ul className="flex ul">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/d">Delivery</a>
          </li>

          <li>
            <a href="/r">Reviews</a>
          </li>

          <li>
            <a href="/c">Contact</a>
          </li>
        </ul>
        <label className="switch">
          <input type="checkbox" className="toggle" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
      </nav>

      <main className="hero">
        <h1>Delivery natural herbal drinks</h1>
        <p>Perfect snack for hot summer East right and tasty</p>
        <div className="buttons flex">
          <button>Request a call</button>
          <div className="right flex">
            <button className="play ">
              <FaGooglePlay />
            </button>
            <span>Smoothies Recipe Video</span>
          </div>
        </div>
      </main>
      <footer className="footer flex">
        <button className="flex ">
          <GiFruitBowl className="icon" />
          <span className="c">There are over 500 recipies in our menu</span>
        </button>
        <button className="flex ">
          <GiHealthNormal className="icon" />
          <span className="c">There are over 500 recipies in our menu</span>
        </button>
        <button className="flex ">
          <GiScooter className="icon" />
          <span className="c">There are over 500 recipies in our menu</span>
        </button>
      </footer>
    </div>
  );
}

export default App;