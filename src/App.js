import './App.css';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homeintro from './components/Homeintro/Homeintro';
import Fucntional from './components/Functional/Fucntional';
import Payment from './components/Payment/Payment';
import Purchaseinfo from './components/Purchaseinfo/Purchaseinfo';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Homeintro />
      <Fucntional />
      <Payment />
      <Purchaseinfo />
      <Footer /> 
    </div>
  );
}

export default App;
