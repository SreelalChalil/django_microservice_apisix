import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import {Form,Button, Container} from 'react-bootstrap'

const NewBlog = (props) => {

    const backend_url = "http://localhost:8080"
    const [blog,setBlog] = useState({title:"", body:""})


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Blog");
        const response = await Axios.post(`${backend_url}/new`, blog);
        console.log("Response..", response.data);
        if (response.data.id) {
          props.history.push("/");
        } else {
          alert("Error Occured!");
        }
      };
    
    return(
        <Container style={{margin:60}}>
        <Form>
            <Form.Group controlId="title">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control 
                         type="text" 
                         placeholder="Blog Title"   
                         required
                         onChange={(e) =>setBlog({ ...blog, title: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Blog Content</Form.Label>
                <Form.Control 
                        as="textarea" 
                        placeholder="Blog Content"
                        rows="3"  
                        required
                        onChange={(e) =>setBlog({ ...blog, body: e.target.value })}
                 />
            </Form.Group>
            <Button onClick={handleSubmit}>Create New Blog</Button>
        </Form>
        </Container>
    )
}

export default NewBlog;