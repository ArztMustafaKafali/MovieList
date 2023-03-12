import React from "react";
import { Container, Row } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WatchList from "../carts/WatchList";

const App = () => {
  return (
    <div className="movie">
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/watchlist" element={<WatchList></WatchList>}>
          </Route>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
