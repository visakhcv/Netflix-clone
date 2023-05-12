import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './request';


function App() {
  return (
    <div >
      <h1>Netflix</h1>      
      <Row title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
