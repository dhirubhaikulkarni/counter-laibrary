import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Routes/Home";
import FunctionExample from "./Routes/FunctionExample/FunctionExample";
import ClassExample from "./Routes/ClassExample/ClassExample";
import ClassGetList from "./Routes/ClassExample/ClassGetList";
import ClassEditBookExample from "./Routes/ClassExample/ClassEditBookExample";
import ClassEditCategoryExample from "./Routes/ClassExample/ClassEditCategoryExample";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/functionexample" element={<FunctionExample />} />
      <Route path="/classexample" element={<ClassExample />} />
      <Route path="/ClassGetList" element={<ClassGetList />} />
      <Route exact path="/ClassEditBookExample/:bookId" element={<ClassEditBookExample/>} />
      <Route exact path="/addbook" element={<ClassEditBookExample />} />
      <Route exact path="/ClassEditCategoryExample/:categoryId" element={<ClassEditCategoryExample/>} />
      <Route exact path="/addcategory" element={<ClassEditCategoryExample/>} />
      
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
