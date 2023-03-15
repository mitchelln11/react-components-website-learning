import './App.css';
import Accordion from './components/accordion';
import { StoreSection } from './components/ecomm/CheckBoxEcommParent';
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
      {/* <div id="product-store">
        <aside>
          <h3>Filters</h3>
          <fieldset>
            <legend>Brands</legend>
            <GenericCheckboxList prodVal="brand" />
          </fieldset>
          
          <fieldset>
            <legend>Categories</legend>
            <GenericCheckboxList prodVal="mainCategory" />
          </fieldset>
        </aside>
        <div id="product-gallery">
        </div>
      </div> */}
      <h2>Contact Us</h2>
      <div id="form-fill">
        <FormFill />
      </div>
    </div>
  );
}

export default App;
