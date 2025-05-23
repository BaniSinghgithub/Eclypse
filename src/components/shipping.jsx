import React, { useEffect } from "react";
import { useState } from "react";
import "./shipping.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Shipping=()=> {

  const [price, setPrice] = useState(0);
  useEffect(()=>{
    setPrice(localStorage.getItem("Total Amount"));
  },[])

  return (
    <>
      <Navbar />
    <div className="shipping-page">


      <h2 className="page-title">
        <span className=""><Link to={"/"}> &lt; </Link></span> Shipping Address
      </h2>

      <main className="main-content">
        <div className="address-section ">
          <div className="address-form">
            <div className="form-header">
              <div className="radio-selected">
                <span className="radio-selected"></span>
              </div>
              <span>Add New Address</span>
            </div>
            <form>
              <div className="row name">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="First Name" />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Last Name" />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  id="streetAddress"
                  placeholder="Street Address"
                />
              </div>

              <div className="row apt">
                <div className="input-group">
                  <label htmlFor="aptNumber">Apt Number</label>
                  <input type="text" id="aptNumber" placeholder="Apt Number" />
                </div>
                <div className="input-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" placeholder="State" />
                </div>
                <div className="input-group">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" placeholder="Zip" />
                </div>
              </div>

              <div className="row buttons">
                <button className="cancel" type="button">
                  cancel
                </button>
                <button type="submit" className="save">
                  Save This Address
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="summary-section">
          <p className="policy">
            By placing your order, you agree to our company{" "}
            <a href=".">Privacy policy</a> and <a href=".">Conditions of use.</a>
          </p>
          <hr />
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items - Silhouette No. 1 – Vermilion</span>
              <span>{price}</span>
            </div>
            <div className="summary-row">
              <span>Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="summary-row">
              <span>Before tax:</span>
              <span>{Number(price) -1400}</span>
            </div>
            <div className="summary-row">
              <span>Tax Collected:</span>
              <span>1,400</span>
            </div>
            <hr />
            <div className="summary-row total">
              <strong>Order Total:</strong>
              <strong>₹ {Number(price) + 200}</strong>
            </div>
            <button className="place-order">Place Order</button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default Shipping;