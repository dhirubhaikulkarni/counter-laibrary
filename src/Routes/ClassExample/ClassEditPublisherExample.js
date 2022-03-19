import React, { useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";


function ClassEditPublisherExample() {

  
    let navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const {publisherId} = useParams();

    const isAdd = !publisherId;

    useEffect(() => {
      if(!isAdd) {
       axios.get(`http://localhost:8080/api/PublisherDetails/${publisherId}`).then((res1) => {
          const publisherDataState = res1.data;
          const fields = ['publisherid', 'Name'];
          fields.forEach(field => setValue(field, publisherDataState[field]));
        });
      }
    });

    function onSubmit(data) {
      return isAdd ? createUser(data) : updateUser(publisherId, data);
    }

    function createUser(data) {
      const addData = {
        data: data
      };
      axios.post('http://localhost:8080/api/PublisherDetails/add/' , addData)
      .then((res) => {
        console.log(res);
      });
    }

    function updateUser(id, data) {
      const editData = {
        id: id,
        data: data
      }; 
      console.log(editData);
      axios.post('http://localhost:8080/api/PublisherDetails/edit/' , editData)
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
            <Button onClick={() => {navigate("/classexample")}}>Back</Button>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(onSubmit)} className="AddCategory-popup">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Publisher Id</Form.Label>
            <Form.Control name="Category Id" type="text" {...register('publisherid')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Publisher Name</Form.Label>
            <Form.Control name="Category Name" type="text" {...register('Name')} />
          </Form.Group>

          

          <Button variant="primary" type="submit" >
            Update
          </Button>
        </Form>
      </Container>
    );
}





export default ClassEditPublisherExample;
