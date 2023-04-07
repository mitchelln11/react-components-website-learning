import './App.css';
import Accordion from './components/accordion';
import { StoreSection } from './components/ecomm/eCommStore';
import FormFill from './components/formFill';

function App() {
  return (
    <div className="App">

      {/* A static component that displays static text */}
      <h2>Potential Facts</h2>
      <div id="accordionSection">
        <Accordion />
      </div>
      <h2>Shop From Our Store</h2>
      <StoreSection />
      <h2>Contact Us</h2>
      <div id="form-fill">
        <FormFill />
      </div>
    </div>
  );
}

export default App;
