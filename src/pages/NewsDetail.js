import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addComment } from "../actions";
import { useState } from 'react';
import CommentComponent from '../components/CommentComponent';
import { Button, Container, Form, Row } from 'react-bootstrap';

const NewsDetail = ({ dispatch }) => {

  const [comment, setComment] = useState({});

  let input;
  const { id } = useParams();
  const news_list = useSelector(state => state.news.news_list);

  const news = news_list.find(el => el.id === parseInt(id))
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "text":
        setComment({ ...comment, text: value });
        break;
      case "name":
        setComment({ ...comment, name: value })
    }
  }

  return (

    <Container>
      <h1>{news.title}</h1>
      <p>{news.text}</p>
      <Form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addComment(id, comment));
        input.value = '';
      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={node => input = node} name="text" onChange={handleChange} placeholder="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={node => input = node} name="name" onChange={handleChange} placeholder="name" />
        </Form.Group>
        <Button type="submit">
          Add comment
        </Button>
      </Form>
      <Row>
      <h3>Comments:</h3>
        {
          news.comments.map(el => (
            <CommentComponent key={el.id} data={el} newsId={news.id}  />
          ))
        }
      </Row>
    </Container>
  );
}

export default connect()(NewsDetail);
