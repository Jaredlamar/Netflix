import React from'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App( ) {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchTrending}/>
      <Row 
      title="Trending Now" 
      fetchUrl={requests.fetchTrending} 
      isLargeRow
      />
      
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
       
    </div>
  );
}

export default App;
