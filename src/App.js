import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FindValue from './components/FindValue/FindValue';
import FindPercentage from './components/FindPercentage/FindPercentage';
import IncreaseDecrease from './components/IncreaseDecrease/IncreaseDecrease';
import PriceIncrease from './components/PriceIncrease/PriceIncrease';
import PriceDecrease from './components/PriceDecrease/PriceDecrease';
import Gst from './components/Gst/Gst';

function App() {
  return (
    <>
      <Header />
      <FindValue />
      <FindPercentage />
      <IncreaseDecrease />
      <PriceIncrease />
      <PriceDecrease />
      <Gst />
      <Footer />
    </>
  );
}

export default App;
