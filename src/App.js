import './App.css';
import './App.scss';
import Footer from './components/commonFiles/Footer';
import Header from './components/commonFiles/Header';
import Banner from './components/Home/Banner';
import FeaturedCategory from './components/Home/FeaturedCategory';
function App() {
  return (
   <>
    <Header/>
    <Banner/>
    <FeaturedCategory/>
    <Footer/>
   </>
  );
}
export default App;
