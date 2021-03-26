import "./App.css";
import { FaGooglePlay } from "react-icons/fa";
import { GiFruitBowl, GiScooter, GiHealthNormal } from "react-icons/gi";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { useRef, useEffect, useState } from "react";

let themeVal = localStorage.getItem("theme");

if (themeVal) {
  themeVal = localStorage.getItem("theme");
} else {
  themeVal = "light-theme";
}

function App() {
  const sideBarRef = useRef();

  const [theme, setTheme] = useState(themeVal);

  const handleChange = (e) => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      console.log("dark");
    } else {
      setTheme("light-theme");
      console.log("light");
    }
  };

  // Side bar functionality
  const handleMenu = () => {
    sideBarRef.current.classList.toggle("show-sidebar");
  };

  // Checkbox functionality
  useEffect(() => {
    document.documentElement.className = theme.trim();
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <nav className="flex navbar">
        <div className="logo">
          <span>H</span>
          <span>D</span>
        </div>
        <ul className="flex ul" ref={sideBarRef}>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Delivery</a>
          </li>

          <li>
            <a href="/">Reviews</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
          <AiOutlineClose className="close" onClick={handleMenu} />
        </ul>

        <label className="switch">
          <input
            type="checkbox"
            className="toggle"
            onChange={handleChange}
            checked={theme === "dark-theme" ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <AiOutlineBars className="menu-bar" onClick={handleMenu} />
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
