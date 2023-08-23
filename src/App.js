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
  const [value, setValue] = useState([0, 1000]);
  const [pref, setPref] = useState(1);


  const [currentMMR, setCurrentMMR] = useState(0);
    const [targetMMR, setTargetMMR] = useState(0);
    const [addons, setAddons] = useState([]);

    const addonPrices = {
        "core": 0.0,
        "support": 0.2,
        "solo": 0.0,
        "duo": 0.8,
        "duo_support": 1.2,
        "streaming": 0.25,
        "priority": 0.25,
        "hero_preferences": 0.15,
    };

    const basePricePerMMR = 10;  // example value

    const calculatePrice = () => {
      // console.log(addons)
        
        const totalAddonMultiplier = addons.reduce((acc, addon) => acc + addonPrices[addon], 0);
        const mmrIncreaseCost = basePricePerMMR * (targetMMR - currentMMR);
        return mmrIncreaseCost * (1 + totalAddonMultiplier);
    };

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

        currentMMR={currentMMR}
        setCurrentMMR={setCurrentMMR}
        targetMMR={targetMMR}
        setTargetMMR={setTargetMMR}
        addons={addons}
        setAddons={setAddons}



        addonPrices={addonPrices}
        calculatePrice={calculatePrice}

        />
      <Payment  value={value} calculatePrice={calculatePrice}/>
      <Purchaseinfo />
      <Footer /> 
    </div>
  );
}

export default App;
