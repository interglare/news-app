import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewsComponent from './components/NewsComponent';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';


function App() {
  const news_list = useSelector(state => state.news.news_list);
  return (
    <div className="App">
      <Container>
        {
          news_list.map(news_item =>
            news_item && (
              <NewsComponent key={news_item.id} data={news_item} />
            ))
        }
      </Container>
    </div>
  );
}

export default App;
