import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <h5 className="contact__info">Contact Information</h5>
            <span className="account">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </span>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email"
              required
            />
            <label htmlhtmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-check my-2">
            <input className="form-check-input" type="checkbox" id="checkbox" />
            <label
              className="check"
              htmlhtmlhtmlFor="gridCheck"
              style={{ fontSize: "13px" }}
            >
              Email me with news and offers
            </label>
          </div>

          <div className="shipping__address my-4">
            <h5 className="shipping__heading my-3">Shipping address</h5>
            <select id="inputState" className="form-select p-3 mb-3">
              <option selected>Select Country...</option>
              <option value="MX">Mexico</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option disabled="" value="">
                ---
              </option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
              <option value="AD">Andorra</option>
              <option value="AM">Armenia</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BA">Bosnia &amp; Herzegovina</option>
              <option value="BR">Brazil</option>
              <option value="BG">Bulgaria</option>
              <option value="CA">Canada</option>
              <option value="BQ">Caribbean Netherlands</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="HR">Croatia</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czechia</option>
              <option value="DK">Denmark</option>
              <option value="EE">Estonia</option>
              <option value="FO">Faroe Islands</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GP">Guadeloupe</option>
              <option value="GG">Guernsey</option>
              <option value="HK">Hong Kong SAR</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="ID">Indonesia</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="LV">Latvia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao SAR</option>
              <option value="MY">Malaysia</option>
              <option value="MT">Malta</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="ME">Montenegro</option>
              <option value="MA">Morocco</option>
              <option value="NL">Netherlands</option>
              <option value="MK">North Macedonia</option>
              <option value="NO">Norway</option>
              <option value="PK">Pakistan</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RE">Réunion</option>
              <option value="RO">Romania</option>
              <option value="SM">San Marino</option>
              <option value="SA">Saudi Arabia</option>
              <option value="RS">Serbia</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="ZA">South Africa</option>
              <option value="KR">South Korea</option>
              <option value="ES">Spain</option>
              <option value="SJ">Svalbard &amp; Jan Mayen</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="TW">Taiwan</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="VA">Vatican City</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
            </select>

            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="fname"
                    required
                  />
                  <label htmlhtmlFor="floatingInputGrid">First Name</label>
                </div>
              </div>

              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="lname"
                    required
                  />
                  <label htmlhtmlFor="floatingInputGrid">Last Name</label>
                </div>
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="address"
                required
              />
              <label htmlhtmlFor="floatingInputGrid">Address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="apartment, suit, etc. (optional)"
                placeholder="apartment, suit, etc. (optional)"
                required
              />
              <label htmlFor="floatingInputGrid">
                Apartment, suit, etc. (optional)
              </label>
            </div>

            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="city"
                    required
                  />
                  <label htmlFor="floatingInputGrid">City</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="postal code"
                    placeholder="postal code"
                    required
                  />
                  <label htmlFor="floatingInputGrid">Postal Code</label>
                </div>
              </div>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="phone"
                required
              />
              <label htmlFor="floatingInputGrid">Phone</label>
            </div>
          </div>

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="checkbox" />
            <label
              className="check"
              htmlhtmlhtmlFor="gridCheck"
              style={{ fontSize: "13px" }}
            >
              Save this information for next time
            </label>
          </div>

          <div className="button">
            <div className="return_to_cart">
              <span>
                <Link to="/cart" className="text-dark">
                  <i className="fa-solid fa-chevron-left"></i>
                </Link>
              </span>
              <span className="return__Cart mx-2">
                <h6>
                  <Link to="/cart" className="text-dark">
                    Return to Cart
                  </Link>
                </h6>
              </span>
            </div>
            <button type="submit" className="btn btn-dark">
            <Link to="/shipping" className="text-white">
              Continue to shipping 
                  </Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
