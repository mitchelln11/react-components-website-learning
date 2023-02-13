import './App.css';
import Accordion from './components/accordion';
// import { GenericCheckboxList } from './components/ecomm/CheckBoxEcommParent';
import GenericCheckboxList from './components/ecomm/CheckboxSection';
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
      {/* Add parent eComm checkbox filters here */}
      <GenericCheckboxList prodVal="brand" />
      <GenericCheckboxList prodVal="mainCategory" />
      <h2>Contact Us</h2>
      <div id="form-fill">
        <FormFill />
      </div>
    </div>
  );
}

export default App;
