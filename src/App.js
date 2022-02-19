import './App.css';
import NewsComponent from './components/NewsComponent';
import { connect, useSelector } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { loginAdmin } from './actions';


function App({dispatch}) {
  const news_list = useSelector(state => state.news.news_list);
  const handleLogin = () => {
    dispatch(loginAdmin());
  };
  return (
    <div className="App">
      <Button onClick={handleLogin} >Login as admin</Button>
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

export default connect()(App);
