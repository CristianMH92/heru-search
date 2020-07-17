import React from 'react';
import Nav from './components/Nav'
import Searcher from './components/Searcher'
import Home from'./components/Home'
import Result from './components/Result'
import { Container, Row, Col } from 'react-bootstrap'
import LogoGiphy from './assets/img/logo.png'
import Gifs from './components/Gifs';
import  { Provider } from 'react-redux'
import generateStore from './redux/store'
import { 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
function App() {
   const store = generateStore()
  return (
    <Router>
      <Nav />
      <Container className="mt-5">
         <Row className="justify-content-md-center">
            <Col xs={12} sm={3} md={3}>
               <img
                  alt="Search Gifs"
                  src={ LogoGiphy }
                  width = "100"
                  height ="100"
                  className="text-center"
               />
            </Col>
         </Row>
      </Container>
      <Provider store={ store }>
         <Searcher />
      </Provider>
      <Switch>
      <Router path="/" exact>
         <Provider store={ store }>
               <Home/>
            </Provider>
        </Router>
       <Router path="/search">
         <Provider store={ store }>
              <Result/>
         </Provider>
        </Router>
        <Router path="/top">
          <Provider store={ store }>
            <Gifs />
          </Provider>
        </Router>
      </Switch>
    </Router>
  );
}
export default App;
