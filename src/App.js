import React from 'react';
import './App.css';
import './App.scss';
import Footer from './components/commonFiles/Footer';
import Header from './components/commonFiles/Header';
import Banner from './components/Home/Banner';
import BestSeller from './components/Home/BestSeller';
import CommingSoon from './components/Home/CommingSoon';
import FeaturedBooks from './components/Home/FeaturedBooks';
import FeaturedCategory from './components/Home/FeaturedCategory';
import FeaturedSales from './components/Home/FeaturedSales';
function App() {
  return (
   <>
    <Header/>
    <Banner/>
    <FeaturedCategory/>
    <FeaturedBooks/>
    <FeaturedSales/>
    <BestSeller/>
    <CommingSoon/>
    <Footer/>
   </>
  );
}
export default App;
