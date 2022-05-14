import React,{useState,useEffect } from 'react'
import Axios from 'axios'
import {CardDeck, Card, Container} from 'react-bootstrap';


const Home = () => {

    const backend_url = "http://localhost:8080"
    const [blog,setBlog] = useState([{title:"blog", body:"blog"}])

    useEffect(() => {
        Axios.get(`${backend_url}/all`)
            .then(response => {
                setBlog(response.data);
            }, error => {
                console.log(error);
            });
    })
return (
    <Container style={{margin:60}}>
    <CardDeck>
       
           {blog.map((b)=>
                <>
                    <Card>
                        <Card.Header>
                            <Card.Title>{b.title}</Card.Title>
                        </Card.Header>
                        <Card.Body>{b.body}</Card.Body>
                        <Card.Footer>{b.creationDate}</Card.Footer>
                    </Card>
                </>
           )}
       
    </CardDeck>
    </Container>
)
}

export default Home;