import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayNotes from "./components/DisplayNotes";
import NoteState from "./context/Notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import InvalidURL from "./components/InvalidURL";
import LoadingBar from "react-top-loading-bar";
import Home from "./components/Home";

function App() {
  //loading bar
  const [progress, setProgress] = useState(0);

  const [alert, setAlert] = useState(null);
  //show alert function
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Alert alert={alert} />
          <div className="container" style={{ zIndex: 0 }}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home showAlert={showAlert} setProgress={setProgress} />
                }
              />
              <Route
                exact
                path="/notes"
                element={
                  <DisplayNotes
                    showAlert={showAlert}
                    setProgress={setProgress}
                  />
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <Login showAlert={showAlert} setProgress={setProgress} />
                }
              />
              <Route
                exact
                path="/signup"
                element={
                  <Signup showAlert={showAlert} setProgress={setProgress} />
                }
              />
              <Route path="*" element={<InvalidURL showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
