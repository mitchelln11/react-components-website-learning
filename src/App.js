import './App.css';
import Accordion from './components/accordion';
import { StoreSection } from './components/ecomm/eCommStore';
import FormFill from './components/formFill';

function App() {
  return (
    <div className="App" data-testid="app-container">

      {/* A static component that displays static text */}
      <h2>Historical Facts</h2>
      <div id="accordionSection">
        <p>The following accordion is pieced together with basic elements of React. The data, out of simplicity and the goal of learning React, is pulling from an array of objects within the file structure as opposed to pulling from an actual database.</p>
        <Accordion />
      </div>
      <h2>Shop From Our Store</h2>
        <p>This small eCommerce store is built out of React components. Rather than using the more advanced <i>useContext</i> or a third party such as <i>Redux</i>, I used the practice of "Lifting state up" that helps adjacent components work together. This data, again out of simplicity, is pulling from another array of objects within the file structure.</p>
        <StoreSection />
      <h2>Contact Us</h2>
      <div id="form-fill">
        <FormFill />
      </div>
    </div>
  );
}

export default App;
