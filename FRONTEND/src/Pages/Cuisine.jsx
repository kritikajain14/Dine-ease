import React from "react";
import { data } from '../restApi.json';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cuisine = () => {

  return (
    <>
    <Navbar/>
    <section className="cuisine-page">
      <h1 className="cuisine-title">Our Signature Cuisine</h1>
      <div className="header"><h2>Breakfast</h2></div>
      <div className="cuisine-grid">
        
        {data[0].breakfast.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>

      <div className="header"><h2>Lunch</h2></div>
      <div className="cuisine-grid">
        {data[0].lunch.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>
      <div className="header"><h2>Dinner</h2></div>
      <div className="cuisine-grid">
        {data[0].dinner.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>
      <div className="header"><h2>Snacks</h2></div>
      <div className="cuisine-grid">
        {data[0].snacks.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>
      <div className="header"><h2>Starters</h2></div>
      <div className="cuisine-grid">
        {data[0].starters.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>
      <div className="header"><h2>Desserts</h2></div>
      <div className="cuisine-grid">
        {data[0].desserts.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div> 

      <div className="header"><h2>Shakes & Drinks</h2></div>
      <div className="cuisine-grid">
        {data[0].shakesdrinks.map((element) => (
          <div className="cuisine-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p className="cuisine-desc">{element.description}</p>
            <p className="cuisine-price">{element.price}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Cuisine;
