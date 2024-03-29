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
import ClassEditPublisherExample from "./Routes/ClassExample/ClassEditPublisherExample";
import FunctionBookSearchPanel from "./Routes/FunctionExample/FunctionBookSearchPanel";


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
      <Route exact path="/ClassEditPublisherExample/:publisherId" element={<ClassEditPublisherExample/>} />
      <Route exact path="/addpublisher" element={<ClassEditPublisherExample/>} />
      <Route exact path="/searchpanel" element={<FunctionBookSearchPanel/>} />
      
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
