"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";
import { Modal, Button, Form } from "react-bootstrap";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false); // Lightbox toggler
  const [showModal, setShowModal] = useState(false); // Modal visibility

  // State for form data
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    contact: "",
    email: "",
    state: "",
    city: "",
    pinCode: "",
  });

  // State for form validation
  const [errors, setErrors] = useState({});

  // Modal Handlers
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors: any = {};
    if (!formData.category) errors.category = "Please select a category.";
    if (!formData.fullName) errors.fullName = "Full name is required.";
    if (!formData.contact) errors.contact = "Contact number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.city) errors.city = "City is required.";
    if (!formData.pinCode) errors.pinCode = "Pin code is required.";
    return errors;
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
      setFormData({
        category: "",
        fullName: "",
        contact: "",
        email: "",
        state: "",
        city: "",
        pinCode: "",
      });
      setErrors({});
      handleModalClose();
    }
  };

  return (
    <>
      {/* Lightbox */}
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      {/* Banner */}
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(/images/images1.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <p>
                  Are you <span>ready</span> to attend?
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Biggest Event <br />
                  <span
                    style={{
                      color: "white",
                      fontSize: "43px",
                      fontWeight: "600",
                      fontFamily: "cursive",
                    }}
                  >
                    PURPLE JALLOSH - 2024
                  </span>
                  <br />
                </p>

                <ul>
                  <li>
                    <i className="icofont-compass"></i> PCMC Divyang Bhavan
                    Foundation
                  </li>
                  <li>
                    <i className="icofont-calendar"></i> 17-19 Jan, 2024
                  </li>
                </ul>

                <div className="button-box">
                  <button
                    className="btn btn-primary"
                    onClick={handleModalOpen}
                  >
                    Register Now
                  </button>
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn d-sm-inline"
                  >
                    <i className="icofont-ui-play"></i> Watch Promo Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <Countdown endDate="2024-01-17T00:00:00" />

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shapes/1.png"
            alt="shape1"
            width={77}
            height={77}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src="/images/shapes/2.png"
            alt="shape2"
            width={38}
            height={38}
          />
        </div>
        <div className="shape3 rotateme">
          <Image
            src="/images/shapes/3.png"
            alt="shape3"
            width={51}
            height={57}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shapes/4.png"
            alt="shape4"
            width={29}
            height={29}
          />
        </div>
      </div>

      {/* Registration Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {/* Category */}
            <Form.Group className="mb-3">
              <Form.Label>Select Category</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Visitor"
                  name="category"
                  value="Visitor"
                  checked={formData.category === "Visitor"}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="radio"
                  label="NGO"
                  name="category"
                  value="NGO"
                  checked={formData.category === "NGO"}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="radio"
                  label="Delegate"
                  name="category"
                  value="Delegate"
                  checked={formData.category === "Delegate"}
                  onChange={handleInputChange}
                />
              </div>
              {errors.category && (
                <small className="text-danger">{errors.category}</small>
              )}
            </Form.Group>

            {/* Other Input Fields */}
            {["fullName", "contact", "email", "state", "city", "pinCode"].map(
              (field) => (
                <Form.Group className="mb-3" key={field}>
                  <Form.Control
                    type="text"
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                  {errors[field] && (
                    <small className="text-danger">{errors[field]}</small>
                  )}
                </Form.Group>
              )
            )}

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MainBanner;  