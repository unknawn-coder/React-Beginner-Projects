import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hero(){
  return(
    <><main className="hero sec-container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="description">
        Step into style and comfort with our all-new StrideX Sneakers – where fashion meets function. 
        Lightweight, breathable, and built to last,
         these shoes are perfect for every step of your day,
          from workouts to weekends. Try StrideX today – because your feet deserve the best.

        </p>
        <div className= "hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
      </div>
      <div className="shopping">
        <p>Also available on</p>
        <div className="brand-icons">
          <img src="./images/flipkart.png" alt="flipkart-icon" />
          <img src="./images/amazon.png" alt="Amazon-icon" />
        </div>
      </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);
  function handleclick(message){
    let display = message;
    return alert("Ready to "+display);
  }

  return (
    <>
    
      <div>
        <nav className="container">
          <div className = "logo">
            <img src="./images/brand_logo.png" alt= "Nike-logo"/>
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
            <button>login</button>
          </ul>

        </nav>
      </div>
      <Hero/>
      
      
    </>
  )
}

export default App
