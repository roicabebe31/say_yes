import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/css/app.css";
import "../src/assets/css/button.css";
import "../src/assets/css/loading-screen.css";
import "../src/assets/css/font.css";
import "../src/assets/css/picture.css";
import "../src/assets/css/random-pop-up.css";
import "../src/assets/css/button.css";
import "../src/assets/css/say-yes.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
