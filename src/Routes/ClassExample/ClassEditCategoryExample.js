import React, { useEffect,useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function ClassEditCategoryExample() {
  let navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { categoryId } = useParams();
  const [Categorydata, setCategorydata] = useState([]);
  

  const isAdd = !categoryId;

  useEffect(() => {
    if (!isAdd) {
      axios
        .get(`http://localhost:8080/api/CategoryDetails/${categoryId}`)
        .then((res1) => {
          const categoryDataState = res1.data;
          const fields = ["categoryid", "Name"];
          fields.forEach((field) => setValue(field, categoryDataState[field]));
        });
    }
    axios.get(`http://localhost:8080/api/CategoryDetails`).then((res1) => {
      const categorydata = res1.data;
      setCategorydata(categorydata);
    });
  });



  function onSubmit(data) {
    return isAdd ? createUser(data) : updateUser(categoryId, data);
  }

  function createUser(data) {
    const addData = {
      data: data,
    };
    axios
      .post("http://localhost:8080/api/CategoryDetails/add/", addData)
      .then((res) => {
        console.log(res);
      });
  }

  function updateUser(id, data) {
    const editData = {
      id: id,
      data: data,
    };
    console.log(editData);
    axios
      .post("http://localhost:8080/api/CategoryDetails/edit/", editData)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <Container>
      <Row>
        <Col md="10">
          <label>Edit Category Details</label>
        </Col>
        <Col md="2">
          <Button
            onClick={() => {
              navigate("/classexample");
            }}
          >
            Back
          </Button>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)} className="AddCategory-popup">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Id</Form.Label>
          <Form.Control
            name="Category Id"
            type="text"
            {...register("categoryid")}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <div>
            <select className="popup-input" {...register("Category.Name")}>
              {Categorydata.map((item) => (
                <option>{item.Name}</option>
              ))}
            </select>
          </div>
        </Form.Group>

        

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default ClassEditCategoryExample;
