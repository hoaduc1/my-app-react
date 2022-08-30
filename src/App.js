import logo from './logo.svg';
import './App.css';
import ProductShow from "./components/productShow"; //Import component
// import { render } from '@testing-library/react';

function App() {
  console.log(123);
  var testData = [
    {
      name: "Quần jean",
      type: "Skinny",
      color: "Đen",
      size: "L",
      startPrice: 20000,
      currentPrice: 22000,
      description: 'Bao đẹp bao chất ngầu',
      photoUrls: []
    },
    {
      name: "Quần ngắn",
      type: "Đùi bò",
      color: "Đỏ",
      size: "XL",
      startPrice: 25000,
      currentPrice: 2800,
      photoUrls: []
    },
    {
      name: "Quần jean",
      type: "Skinny",
      color: "Đen",
      size: "L",
      startPrice: 30000,
      currentPrice: 33000,
      photoUrls: []
    },
    {
      name: "Quần ngắn",
      type: "Đùi bò",
      color: "Đỏ",
      size: "XL",
      startPrice: 20800,
      currentPrice: 21000,
      photoUrls: []
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className=''>
        {
          testData.map((item, index) => {
            return <ProductShow 
                    name={item.name}
                    type={item.type} 
                    color={item.color} 
                    size={item.size} 
                    startPrice={item.startPrice}
                    currentPrice={item.currentPrice}
                    description={item.description}> {item.name}
                    </ProductShow>
          })
        }
      </div>
    </div>
  );
}

export default App;
