import React, { Component } from "react";
import axios from "axios";
import ClassGetList from "./ClassGetList";
import Home from "../Home";
class ClassExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksData: [],
      CategoriesData: [],
      PublishersData: [],
    };
  }
  componentDidMount() {
    this.getBookData();
    this.getCategoriesData();
    this.getPublishersData();
  }

  getBookData() {
    console.log("1st time getBookData");
    axios.get("http://localhost:8080/api/BooksDetails").then((booksdata) => {
      const BooksData = booksdata.data;
      console.log(BooksData);
      
      this.setState({ BooksData: booksdata.data });
      console.log(BooksData);
    });
  }

  getCategoriesData() {
    console.log("1st time getCategoriesData");
    axios
      .get("http://localhost:8080/api/CategoryDetails")
      .then((categoriesdata) => {
        const CategoriesData = categoriesdata.data;
        this.setState({ CategoriesData });
        //console.log(CategoriesData);
      });
  }

  getPublishersData() {
    console.log("1st time getPublishersData");
    axios
      .get("http://localhost:8080/api/PublisherDetails")
      .then((publishersdata) => {
        const PublishersData = publishersdata.data;
        this.setState({ PublishersData });
        //console.log(PublishersData);
      });
  }

  
  
  handleClickDelete = (BDID) => {
    fetch("http://localhost:8080/api/BooksDetails/delete/" + BDID, {
    // axios.get('http://localhost:8080/api/BooksData/delete/'+BDID,{
      method: "GET",
    }).then((result) => {
      result.json().then((res) => {
        
        this.getBookData();
      });
    });
  };

  render() {
    const { BooksData, CategoriesData, PublishersData } = this.state;

    return (
      <div>
          <h1><Home /></h1>
        <h1>Class Example Page </h1>

        <ClassGetList
          PassBookData={BooksData}
          PassCategoryData={CategoriesData}
          PassPublishersData={PublishersData}
          PassFunctionDelete={this.handleClickDelete}
          
        />
       
      </div>
    );
  }
}

export default ClassExample;
