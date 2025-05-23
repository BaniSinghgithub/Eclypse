import React from "react";
import "./home.css";
import CustomersList from "./customers";
import ClothSize from "./clothSize";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Home = () => {
  const [customers, setCustomers] = useState({
    quote: '"Understated, but unforgettable. It feels like it was made for me',
    name: "Random Woman",
    location: "NY, USA",
    image: "/utils/customer1.svg",
  });

  const [selectedClothUrl, setClothUrl] = useState("/utils/cloth3.jpg");

  const selectedCloth = (index) => {
    if(index === 0) {
      setClothUrl("/utils/cloth3.jpg");
    }
    else if(index === 1) {
      setClothUrl("/utils/cloth4.jpg");
    }
    else if(index === 2) {
      setClothUrl("/utils/cloth5.jpg");
    }
  }


  
  const handleCustomerClick = (customer) => {
    setCustomers(CustomersList[customer]);
    
    const customerImages = document.querySelectorAll(".customer-img");
    customerImages.forEach((img, index) => {
      if (index === customer) img.classList.add("curr-img");
      else img.classList.remove("curr-img");
    });
  };
  
  const [price, setPrice] = useState(7999);
  
  const [selectedSizes, setSelectedSize] = useState([]);
  
  const handleClothPrice = (index) => {
    let newSelectedSizes;
    if (selectedSizes.includes(index)) {
      newSelectedSizes = selectedSizes.filter((item) => item !== index);
    } else {
      newSelectedSizes = [...selectedSizes, index];
    }
    setSelectedSize(newSelectedSizes);
    
    //if button is clicked, change the color of the button
    const sizeButtons = document.querySelectorAll(".size-options button");
    sizeButtons.forEach((btn, idx) =>
      idx === index ? btn.classList.toggle("selected") : ""
  );
  
  const totalPrice = newSelectedSizes.reduce((acc, curr) => {
    return acc + Number(ClothSize[curr].price);
  }, 0);
  setPrice(totalPrice);
};

useEffect(() => {
  localStorage.setItem("Total Amount",price);
}, [price]);

  return (
    <>
      <Navbar />
    <div id="top" className="app">
      <div className="eclypse">
        <p>
          Eclypse<sup>®</sup>
        </p>
      </div>

      <section className="hero">
        <video
          src="/utils/video.mov"
          className="top-video"
          autoPlay
          loop
          playsInline
          muted /*playsInline -- allows autoplay to work on mobile Safari.*/
        />
        <div className="hero-caption">A silhouette worth remembering</div>
      </section>

      <section className="philosophy">
        <p>
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>
        <div className="learn-more">
          <a href="." className="">
            Learn more about Eclypse{" "}
            <img src="/utils/arrow-right.png" alt="Arrow" />
          </a>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-col first">
          <video
            src="/utils/video2.mp4"
            alt="video"
            autoPlay
            loop
            playsInline
            muted
          />

          <div className="vid-img">
            <div className="cap">
              <img src="/utils/cloth1.jpg" alt="cloth" className="video2" />
              <div className="cap-text">
                Discreet side pockets with clean finish
              </div>
            </div>
            <div className="cap">
              <img src="/utils/cloth2.jpg" alt="cloth" />
              <div className="cap-text">
                Hand-cut and assembled in small batches
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-col second">
          <div className="cap one">
            <img src="/utils/cloth.jpg" alt="cloth" />
            <div className="cap-text">
              Premium wool blend in signature vermillion
            </div>
          </div>
          <div className="cap two">
            <img className="hide" src="/utils/logo.svg" alt="logo" />
            <div className="cap-text eclypse">
              <p>
                Eclypse<sup>®</sup>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="product-header">
        <h2>Silhouette No.1 — Vermilion</h2>
      </div>

      <section className="product-section">
        <div id="clothPrice" className="product-details">
          <img alt="selectedCloth" src={selectedClothUrl} className="product-image"/>

          <div className="product-info">
            <p>
              A tailored composition in motion. Cut from structured wool with a
              selected shoulder and refined finish, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </p>
            <div className="product-gallery">
              <img onClick={()=>selectedCloth(0)} src="/utils/cloth3.jpg" alt="img" />
              <img onClick={()=>selectedCloth(1)}  src="/utils/cloth4.jpg" alt="img" />
              <img onClick={()=>selectedCloth(2)} src="/utils/cloth5.jpg" alt="img" />
            </div>
            <div className="price">₹  
              {price} <span>MRP incl. of all taxes</span>
            </div>
            <div className="sizes">
              <label>
                Please select a size <span className="">Size chart</span>
              </label>

              <div className="size-options">
                <button onClick={() => handleClothPrice(0)}>XS</button>
                <button onClick={() => handleClothPrice(1)}>S</button>
                <button onClick={() => handleClothPrice(2)}>M</button>
                <button onClick={() => handleClothPrice(3)}>L</button>
                <button onClick={() => handleClothPrice(4)}>XL</button>
              </div>
            </div>
            <div className="actions">
              <div className="first">Add to Cart</div>
              <div className="second">
                <a href={"/shipping"}>Buy</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-sections">
        <details>
          <summary>
            <p>Size & Fit</p>{" "}
            <div className="">
              <img className="" alt="img" src="/utils/top.png" />
            </div>
          </summary>
          <p>Details about size & fit.</p>
        </details>
        <details>
          <summary>
            <p> Delivery & Returns </p>
            <div className="">
              <img className="" alt="img" src="/utils/top.png" />
            </div>
          </summary>
          <p>Information about delivery & returns.</p>
        </details>
        <details>
          <summary>
            <p>How This Was Made </p>
            <div className="">
              {" "}
              <img className="" alt="img" src="/utils/top.png" />
            </div>
          </summary>
          <p>Manufacturing and sustainability info.</p>
        </details>
      </section>

      <h4 id="customers" className="customer">
        OUR CUSTOMERS
      </h4>

      <section className="testimonials">
        <blockquote>
          <p>{customers.quote}</p>

          <strong>{customers.name}</strong>
          <span>{customers.location}</span>
        </blockquote>

        <sidebar className="">
          <img
            className="customer-img curr-img"
            onClick={() => handleCustomerClick(0)}
            src="/utils/customer1.svg"
            alt="customer"
          />
          <img
            className="customer-img"
            onClick={() => handleCustomerClick(1)}
            src="/utils/customer2.jpg"
            alt="customer"
          />
          <img
            className="customer-img"
            onClick={() => handleCustomerClick(2)}
            src="/utils/customer3.svg"
            alt="customer"
          />
        </sidebar>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <p>
            Eclypse
            <sup>
              <img
                alt="arrow"
                className="small-arrow"
                src="/utils/arrow-right.png"
              />
            </sup>
          </p>
          <a href="#top">
            <img alt="top arrow" className="" src="/utils/top.png" />
          </a>
        </div>
        <div className="combo">
          <div className="footer-nav">
            <div className="linkNav">
              <span>
                <a href="#top">Home</a> / <a href="#top">About</a> /{" "}
                <a href="#clothPrice">Buy</a> /
                <a href="#customers"> Our Customers</a> /{" "}
                <a href="#contact">Contacts</a>
              </span>
            </div>
            <div id="contact" className="footer-contact">
              <p className="contact-tag">CONTACT</p>
              <p>+91 123-456-7890</p>
              <p className="contact-tag">Email</p>
              <p>eclypse@email.com</p>
            </div>
          </div>
          <div className="footer-eclypse">
            <p>&copy; Eclypse 2025</p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
};

export default Home;
