import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Header from "./components/Header";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import NavState from "./context/navbar/NavState";
import AlertState from "./context/Alert/AlertState";
import ShowAlert from "./components/ShowAlert";
import Logout from "./components/Logout";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <NavState>
          <AlertState>
            <Header />
            <Navbar />
            <ShowAlert />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </AlertState>
        </NavState>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
