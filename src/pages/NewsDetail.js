import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addComment } from "../actions";
import { useEffect, useState } from 'react';
import CommentComponent from '../components/CommentComponent';
import { Button, Container, Form, Row } from 'react-bootstrap';

const NewsDetail = ({ dispatch }) => {

  const [comment, setComment] = useState({
    name: "Ivan Ivanov",
    email: "ivanov@mail.ru",
    tel: "87001234567",
    text: "qwe"
  });
  const [validFields, setValidFields] = useState({});

  const { id } = useParams();
  const news_list = useSelector(state => state.news.news_list);

  const news = news_list.find(el => el.id === parseInt(id));

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setComment({ ...comment, name: value });
        break;
      case "email":
        setComment({ ...comment, email: value });
        break;
      case "tel":
        setComment({ ...comment, tel: value });
        break;
      case "text":
        setComment({ ...comment, text: value });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (validFields?.name && validFields?.email && validFields?.tel && validFields?.text) {
      dispatch(addComment(id, comment));
      setComment({
        name: "",
        email: "",
        tel: "",
        text: ""
      });
      setValidFields({});
    }
  }, [validFields])
  

  const validate =  () => {
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let regEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    let regTel = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let regText = /([^\s])/;
     setValidFields({
      name: regName.test(comment.name),
      email: regEmail.test(comment.email),
      tel: regTel.test(comment.tel),
      text: regText.test(comment.text)
    });
    return;
  }
  const handleSubmit = () => {
    validate();
  }
  return (

    <Container>
      <h1>{news.title}</h1>
      <p>{news.text}</p>
      <Form>
        <Form.Group className="mb-3" >
          {validFields?.email === false && <p>Invalid full name</p> }
          <Form.Control value={comment.name} name="name" onChange={handleChange} placeholder="Full name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          {validFields?.email === false && <p>Invalid email</p> }
          <Form.Control value={comment.email} name="email" onChange={handleChange} placeholder="Email" type="email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          {validFields?.tel === false && <p>Invalid tel</p> }
          <Form.Control value={comment.tel} name="tel" onChange={handleChange} placeholder="Tel." type="tel" />
        </Form.Group>
        <Form.Group className="mb-3" >
          {validFields?.text === false && <p>Invalid text</p> }
          <Form.Control value={comment.text} name="text" onChange={handleChange} placeholder="Main text" />
        </Form.Group>
        <Button onClick={handleSubmit}>
          Add comment
        </Button>
      </Form>
      <Row>
        <h3>Comments:</h3>
        {
          news.comments.map(el => (
            <CommentComponent key={el.id} data={el} newsId={news.id} />
          ))
        }
      </Row>
    </Container>
  );
}

export default connect()(NewsDetail);
