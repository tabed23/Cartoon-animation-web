import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homeintro from './components/Homeintro/Homeintro';
import Fucntional from './components/Functional/Fucntional';
import Payment from './components/Payment/Payment';
import Purchaseinfo from './components/Purchaseinfo/Purchaseinfo';
import Footer from './components/Footer/Footer';


function App() {

  const [topbanner, setTopBanner] = useState('solo');
  const [functonalTile, setFunctonalTile] = useState('ranked');
  const [value, setValue] = useState([30, 60]);
    const [pref, setPref] = useState(1);


  return (
    <div className="App">
      <Header />
      <Homeintro topbanner= {topbanner}/>
      <Fucntional 
        topbanner= {topbanner} 
        setTopBanner = {setTopBanner}
        functonalTile={functonalTile}
        setFunctonalTile={setFunctonalTile}
        pref = {pref}
        setPref={setPref}
        value ={value}
        setValue={setValue}
        />
      <Payment  value={value}/>
      <Purchaseinfo />
      <Footer /> 
    </div>
  );
}

export default App;
