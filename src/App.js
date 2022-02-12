import 'swiper/scss'

import { BrowserRouter } from "react-router-dom";
import productData from "./assets/data/products";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RoutesConfig from "./config/RoutesConfig";

import './App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="main">
            <RoutesConfig />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
