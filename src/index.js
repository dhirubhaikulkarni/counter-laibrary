import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FunctionExample from "./Routes/FunctionExample/FunctionExample";
import ClassExample from "./Routes/ClassExample/ClassExample";
import ClassEditBookExample from "./Routes/ClassExample/ClassEditBookExample";
import ClassGetList from "./Routes/ClassExample/ClassGetList";
import Home from "./Routes/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/functionexample" element={<FunctionExample />} />
      <Route path="/classexample" element={<ClassExample />} />
      <Route path="/ClassGetList" element={<ClassGetList />} />
      <Route exact path="/ClassEditBookExample/:bookId" element={<ClassEditBookExample/>} />
      <Route exact path="/addbook" element={<ClassEditBookExample />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
