import './App.css';
import Accordion from './components/accordion';
import ProductGallery from './components/eCommStore';
import GenericCheckboxList from './helpers/brandChecklist';
import CategoryCheckboxList from './helpers/categoryChecklist';
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
      <div id="product-store">
        <aside>
          <h3>Filters</h3>
          <fieldset>
            <legend>Brands</legend>
              <GenericCheckboxList />
          </fieldset>
          <h4>Price</h4>
          <fieldset>
            <legend>Categories</legend>
              <CategoryCheckboxList />
          </fieldset>
        </aside>
        <div id="product-gallery">
          <ProductGallery />
        </div>
      </div>

      <h2>Contact Us</h2>
      <div id="form-fill">
        <FormFill />
      </div>
    </div>
  );
}

export default App;
