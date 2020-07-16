import React from 'react';
import Nav from './components/Nav/Nav'
import Search from './components/Searcher'
import { Container } from 'react-bootstrap'
import LogoGiphy from './assets/img/logo.png'
import Gifs from './components/Gifs';
import  { Provider } from 'react-redux'
import generateStore from './redux/store'
function App() {
   const store = generateStore()
  return (
    <>
    <Nav />
    <Container className="mt-5">
       <img
          alt="Search Gifs"
          src={ LogoGiphy }
          width = "60"
          height ="60"
          className="text-center"
        />
    </Container>
    <Search />
    <Provider store={ store }>
      <Gifs />
    </Provider>
    </>
  );
}
export default App;
