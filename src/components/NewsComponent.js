import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NewsComponent({ data }) {
  const [news, setNews] = useState();
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    setNews(data);
    setIsFetching(false)
    return () => {
      setNews();
    }
  }, [news])

  return (
    <>
      {
        !isFetching &&
        (
          <Card >
            <Card.Body>
              <Card.Title><Link to={`/${news.id}`}>{news.title}</Link></Card.Title>
              <Card.Text>{news.text}</Card.Text>
            </Card.Body>
          </Card>
        )
      }
    </>
  )
}

export default NewsComponent