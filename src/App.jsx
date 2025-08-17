import "./App.css";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home.jsx'
import Shop from "./Components/Shop/Shop.jsx";
import Card from "./Components/Card/Card.jsx";
import Shoop from "./Components/Shoop/Shoop.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sobre from "./Components/Sobre/Sobre.jsx";
function App() {
  return (
    <div>
      <Header/>
    <Home/> 
    <Shop/>
    <Card/>
    <Shoop/>
    <Sobre/>
    <Footer/>
    </div>
  );
}

export default App;
