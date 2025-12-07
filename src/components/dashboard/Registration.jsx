// Registration.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Change this to your backend URL
const API_BASE_URL = "https://your-backend-domain.com/api";

function Registration() {
  const featuresRef = useRef(null);

  // -------- FORM STATE --------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    altMobile: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
    referralCode: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // -------- LENIS SMOOTH SCROLL --------
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // -------- GSAP SCROLL ANIMATIONS --------
  useEffect(() => {
    if (!featuresRef.current) return;

    const cards = featuresRef.current.querySelectorAll(".feature-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // -------- INPUT HANDLERS --------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // clear error of that field while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // -------- VALIDATION --------
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required.";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits.";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms.";
    }

    setErrors(newErrors);

    // if no errors object keys => valid
    return Object.keys(newErrors).length === 0;
  };

  // -------- SUBMIT HANDLER (API CALL) --------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccessMessage("");

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    // 🔹 Payload that will be sent to backend
    //    Backend team can see exactly what they will receive.
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      altMobile: formData.altMobile || null,
      password: formData.password,
      state: formData.state,
      city: formData.city,
      address: formData.address,
      pincode: formData.pincode,
      referralCode: formData.referralCode || null,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Example: backend returns { success: boolean, message: string }
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setServerError(data.message || "Something went wrong. Please try again.");
      } else {
        setSuccessMessage(data.message || "Registration successful!");

        // Clear form (if you want)
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          altMobile: "",
          password: "",
          confirmPassword: "",
          state: "",
          city: "",
          address: "",
          pincode: "",
          referralCode: "",
          acceptTerms: false,
        });

        setErrors({});
      }
    } catch (err) {
      console.error(err);
      setServerError("Unable to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Small helper to show error under input
  const renderError = (fieldName) =>
    errors[fieldName] ? (
      <span className="reg-error-text">{errors[fieldName]}</span>
    ) : null;

  return (
    <div className="reg-page">
      <div className="reg-bg-blob reg-bg-blob-1" />
      <div className="reg-bg-blob reg-bg-blob-2" />

      <main className="reg-layout">
        {/* LEFT SIDE */}
        <motion.section
          className="reg-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="reg-badge">Life Spark Associates</div>

          <h1 className="reg-title">
             <span>Registration</span> Form
          </h1>

          <p className="reg-subtitle">
            Frontend is fully wired for backend: validation, payload, and API
            call are ready. Backend team just needs to plug in the endpoint.
          </p>

          <ul className="reg-list">
            <li>✓ Clear payload structure for backend</li>
            <li>✓ Validation done on frontend side</li>
            <li>✓ Loading, success & error UI ready</li>
          </ul>
        </motion.section>

        {/* RIGHT SIDE - FORM */}
        <motion.section
          className="reg-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.div
            className="reg-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <header className="reg-card-header">
              <h2>Registration</h2>
              <p>Please enter your information carefully.</p>
            </header>

            {/* SERVER MESSAGES */}
            {serverError && (
              <div className="reg-alert reg-alert-error">{serverError}</div>
            )}
            {successMessage && (
              <div className="reg-alert reg-alert-success">
                {successMessage}
              </div>
            )}

            <form className="reg-form" onSubmit={handleSubmit}>
              {/* FULL NAME */}
              <div className="reg-field">
                <label>Full Name</label>
                <motion.input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                />
                {renderError("fullName")}
              </div>

              {/* EMAIL */}
              <div className="reg-field">
                <label>Email</label>
                <motion.input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                />
                {renderError("email")}
              </div>

              {/* MOBILE + ALT MOBILE */}
              <div className="reg-row">
                <div className="reg-field">
                  <label>Mobile Number</label>
                  <motion.input
                    name="mobile"
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {renderError("mobile")}
                </div>
                <div className="reg-field">
                  <label>Alternate Mobile (Optional)</label>
                  <motion.input
                    name="altMobile"
                    type="tel"
                    placeholder="Alternate number"
                    value={formData.altMobile}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              {/* PASSWORDS */}
              <div className="reg-row">
                <div className="reg-field">
                  <label>Password</label>
                  <motion.input
                    name="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {renderError("password")}
                </div>
                <div className="reg-field">
                  <label>Confirm Password</label>
                  <motion.input
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {renderError("confirmPassword")}
                </div>
              </div>

              {/* STATE + CITY */}
              <div className="reg-row">
                <div className="reg-field">
                  <label>State</label>
                  <motion.select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="">Select state</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="DL">Delhi</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="KA">Karnataka</option>
                    <option value="OTHER">Other</option>
                  </motion.select>
                  {renderError("state")}
                </div>
                <div className="reg-field">
                  <label>City</label>
                  <motion.input
                    name="city"
                    type="text"
                    placeholder="City / Town"
                    value={formData.city}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {renderError("city")}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="reg-field">
                <label>Address</label>
                <motion.textarea
                  name="address"
                  rows="3"
                  placeholder="House no, Street, Area, Landmark"
                  value={formData.address}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                />
                {renderError("address")}
              </div>

              {/* PINCODE + REFERRAL */}
              <div className="reg-row">
                <div className="reg-field">
                  <label>Pincode</label>
                  <motion.input
                    name="pincode"
                    type="text"
                    placeholder="6-digit pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {renderError("pincode")}
                </div>
                <div className="reg-field">
                  <label>Referral / Sponsor ID (Optional)</label>
                  <motion.input
                    name="referralCode"
                    type="text"
                    placeholder="If applicable"
                    value={formData.referralCode}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              {/* TERMS */}
              <div className="reg-field reg-checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    I confirm that the information provided is correct and I
                    agree to the{" "}
                    <button
                      type="button"
                      className="reg-link-btn"
                      onClick={() => alert("Show Terms & Conditions")}
                    >
                      Terms & Conditions
                    </button>
                    .
                  </span>
                </label>
                {renderError("acceptTerms")}
              </div>

              {/* BUTTONS */}
              <div className="reg-actions">
                <motion.button
                  type="submit"
                  className="reg-btn-primary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </motion.button>

                <button
                  type="button"
                  className="reg-btn-secondary"
                  onClick={() =>
                    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                  }
                >
                  Learn more
                </button>
              </div>
            </form>
          </motion.div>
        </motion.section>
      </main>

      {/* FEATURES SECTION */}
      <section className="reg-features" ref={featuresRef}>
        <h3>Why backend will love this?</h3>
        <p className="reg-features-subtitle">
          They get a clean JSON payload and clear success / error handling.
        </p>

        <div className="reg-features-grid">
          <div className="feature-card">
            <h4>Clear Payload</h4>
            <p>
              All fields are mapped into a single payload object with predictable
              keys like fullName, mobile, pincode, etc.
            </p>
          </div>
          <div className="feature-card">
            <h4>Validation Done</h4>
            <p>
              Basic checks like email, mobile, pincode, password match are already
              handled on frontend to reduce bad requests.
            </p>
          </div>
          <div className="feature-card">
            <h4>Standard Response Handling</h4>
            <p>
              Frontend expects a simple JSON: {"{ success, message }"} so backend
              team knows exactly what to return.
            </p>
          </div>
        </div>
      </section>

      <footer className="reg-footer">
        © {new Date().getFullYear()} Worldshopee Enterprises · All rights reserved.
      </footer>
    </div>
  );
}

export default Registration;
