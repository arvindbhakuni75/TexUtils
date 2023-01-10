import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglePurple = () => {
    document.body.style.backgroundColor = "#8918f2";
    showAlert("Mango mode has been enabled", "success");
  };
  const toggleGreen = () => {
    document.body.style.backgroundColor = "#87FD34";
    showAlert("Nature mode has been enabled", "success");
  };
  const toggleStrawberry = () => {
    document.body.style.backgroundColor = "#fc5a8d";
    showAlert("Stawberry mode has been enabled", "success");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          togglePurple={togglePurple}
          toggleGreen={toggleGreen}
          toggleStrawberry={toggleStrawberry}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
                <TextForm
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
