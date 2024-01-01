import './App.css';
import { createContext, useState } from 'react';
import Accordion from './components/accordion';
import { StoreSection } from './components/ecomm/eCommStore';
// import FormFill from './components/formFill';
import { ModalPopUp, ModalBtn } from './components/ModalPopUp';
import ShippingFields from './components/ecomm/shippingFields';

export const ModalContext = createContext();

function App() {
  const [revealModal, setRevealModal] = useState(false);
  return (
    <ModalContext.Provider value={[revealModal, setRevealModal]}>
      <ModalPopUp />
      <div className="App">
        
        {/* A static component that displays static text */}
        <h2>Historical Facts</h2>
        <div id="accordionSection">
          <p>The following accordion is pieced together with basic elements of React. The data, out of simplicity and the goal of learning React, is pulling from an array of objects within the file structure as opposed to pulling from an actual database.</p>
          <Accordion />
        </div>
        <h2>Shop From Our Store</h2>
          <p>This small eCommerce store is built out of React components. Rather than using the more advanced <i>useContext</i> or a third party such as <i>Redux</i>, I used the practice of "Lifting state up" that helps adjacent components work together. This data, again out of simplicity, is pulling from another array of objects within the file structure.</p>
          <StoreSection />

        <div id="yt-vids">
          <h2>Youtube Videos</h2>
          <p>The below button opens a modal. The state of being open or not is utilizing the <i>useContext</i> API built into React.</p>
          <ModalBtn />
        </div>
        <h2>Contact Us</h2>
        <div id="form-fill">
          {/* <FormFill /> */}

          <ShippingFields />
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
