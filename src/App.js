import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner'  ;
import Slider from './components/Slider/Slider';
import {page1_url,page2_url } from './url';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Slider title='Trending' api_page='2' url={page1_url}> </Slider>
      <Slider title='Netflix' isSmall api_page='3' url={page2_url}></Slider>
    </div>
  );
}
export default App;
