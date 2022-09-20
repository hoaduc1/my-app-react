import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import logo from './logo.svg';
import './App.css';
import ProductShow from "./components/productShow"; //Import component
import image1 from './components/images/1.jpg';
import image2 from './components/images/2.png';
import image3 from './components/images/3.png';
import image4 from './components/images/4.png';
import image5 from './components/images/5.jpg';
import image6 from './components/images/6.png';
import image7 from './components/images/7.jpg';
// import { render } from '@testing-library/react';

function App() {
  console.log(123);
  var testData = [
    {
      name: "Quần jean",
      type: "Skinny",
      color: "Đen",
      size: "L",
      image: [
        {
        original: image3,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image4,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image5,
        originalHeight: 200,
        originalWidth: 200
        }
      ],
      startPrice: 20000,
      currentPrice: 22000,
      description: 'Bao đẹp bao chất ngầu',
      photoUrls: [],
      createdUserName: 'Nguyễn Văn A'
    },
    {
      name: "Quần ngắn",
      type: "Đùi bò",
      color: "Đỏ",
      size: "XL",
      image: [
        {
        original: image1,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image2,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image6,
        originalHeight: 200,
        originalWidth: 200
        }
      ],
      startPrice: 25000,
      currentPrice: 2800,
      photoUrls: [],
      createdUserName: 'Nguyễn Văn B',
    },
    {
      name: "Quần jean",
      type: "Skinny",
      color: "Đen",
      size: "L",
      image: [
        {
        original: image3,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image5,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image7,
        originalHeight: 200,
        originalWidth: 200
        }
      ],
      startPrice: 30000,
      currentPrice: 33000,
      photoUrls: [],
      createdUserName: 'Nguyễn Văn C'
    },
    {
      name: "Quần ngắn",
      type: "Đùi bò",
      color: "Đỏ",
      size: "XL",
      image: [
        {
        original: image2,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image4,
        originalHeight: 200,
        originalWidth: 200
        }, 
        {
        original: image6,
        originalHeight: 200,
        originalWidth: 200
        }
      ],
      startPrice: 20800,
      currentPrice: 21000,
      photoUrls: [],
      createdUserName: 'Nguyễn Thị D'
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
              return  <ProductShow 
                      name={item.name}
                      type={item.type} 
                      color={item.color} 
                      size={item.size} 
                      image={item.image}
                      startPrice={item.startPrice}
                      currentPrice={item.currentPrice}
                      description={item.description}
                      createdUserName={item.createdUserName}> {item.name}
                      </ProductShow>
          })
        }
      </div>
    </div>
  );
}

export default App;
