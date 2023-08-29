import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactUs.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik } from "formik";
import { FaMobileAlt, FaCartPlus } from "react-icons/fa";
import { InputGroup } from "react-bootstrap";

// import reCAPTCHA from "react-google-recaptcha";
import axios from "axios";
const phoneRegExp = /^[0-9]{10}$/;
const ContactUs = () => {
  const schema1 = Yup.object().shape({
    name: Yup.string().min(3).max(23).required("Please enter your name"),
    email: Yup.string().email().required("Please enter Your email"),
    desc: Yup.string().min(10).required("Please enter Description"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const schema2 = Yup.object().shape({
    name: Yup.string().min(3).max(23).required("Please enter your name"),
    email: Yup.string().email().required("Please enter Your email"),
    desc: Yup.string().min(10).required("Please enter Description"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    platform:Yup.string().required('Select Platform'),
    plan:Yup.string().required('Select Plan')
  });
  return (
    <>
      <section className="container-fluid ">
        <div className="d-flex flex-column align-items-center justify-content-center section1 containerForm">
          <div className="row">
            <h2 className="p-2 font-bold">
              Have Some <span className="questionColor">Question?</span>
            </h2>
          </div>
          <div className="row justify-content-center ">
            <div className="containerPara text-center col-md-10">
              <p className="p-2 pb-3">
                Thank you for your interest in our services. Please fill out the
                form below and we will get back to you promptly regarding your
                request.
              </p>
            </div>
          </div>

          <div className="container ">
            <div className="row align-items-center justify-content-center">
              <div className="containerFormInside col-md-8">
                <div className=" p-3">
                  <Tabs
                    defaultActiveKey="Feedback"
                    id="controlled-tab-example"
                    className="mb-3 Tabs"
                  >
                    <Tab eventKey="Feedback" title="Feedback">

                      {/* formik 1 */}
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          phone: "",
                          desc: "",
                        }}
                        validationSchema={schema1}
                       
                        onSubmit={(values,action) => {
                          axios.post('http://192.168.0.93:4000/User/feedback',values).then((res)=>{console.log(res)})

                          // handle form submission
                          console.log(values,'values');
                          action.resetForm();
                        }}
                        
                         
                       
                      >
                        {({
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                        }) => (
                          <Form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-6">
                                {/* feedback form */}

                                <Form.Group id="input_container">
                                  <Form.Control
                                    type="text"
                                    placeholder="Full Name *"
                                    className="feedbackInput mt-3 mx-1"
                                    id="inputFullName"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  {errors.name && touched.name ? (<p>{errors.name}</p>
                                  ) : null}
                                </Form.Group>
                              </div>
                              <div className="col-md-6">
                                <Form.Group>
                                  <Form.Control
                                    type="text"
                                    placeholder="Email *"
                                    className="feedbackInput mt-3 mx-1"
                                    id="inputEmail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="email"
                                  />
                                  {errors.email && touched.email ? (
                                    <p>{errors.email}</p>
                                  ) : null}
                                </Form.Group>
                              </div>
                            </div>
                            <div className="row">
                              <Form.Group>
                                {" "}
                                {/*className="mb-3" */}
                                {/*  my-3 */}
                                <Form.Control
                                  type="text"
                                  placeholder="Phone"
                                  className="feedbackInput mt-3 mx-1"
                                  name="phone"
                                  id="inputCall"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone ? (
                                  <p>{errors.phone}</p>
                                ) : null}
                              </Form.Group>
                            </div>
                            <div className="row">
                              <Form.Group className="mt-3">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  className="feedbackTextArea mx-1 mb-3"
                                  placeholder="Description *"
                                  id="inputDescription"
                                  name="desc"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.desc && touched.desc ? (
                                  <p>{errors.desc}</p>
                                ) : null}
                              </Form.Group>
                            </div>

                            <div className="d-flex align-items-center justify-content-center mb-3 mt-3">
                              <Button
                                variant="primary"
                                type="submit"
                                className="px-5 py-2 feedbackBtn "
                                onSubmit={handleSubmit}
                              >
                                Submit
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </Tab>
                    {/* subscription tab.... */}
                    <Tab eventKey="Subscription" title="Subscription">
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          phone: "",
                          desc: "",
                          platform:"",
                          plan:"",
                        }}
                        validationSchema={schema2}
                        onSubmit={(values,action) => {

                          // handle form submission
                          console.log(values,'values');
                          action.resetForm();
                          // axios.post('',values).then((res)=>{console.log(res)})
                        }}
                        
                      
                      >
                        {({
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                        }) => (
                          <Form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-6">
                                <Form.Group className="mb-3 mx-1">
                                  <InputGroup className="mb-3 align-items-center">
                                    <InputGroup.Text className="userLogo mt-3">
                                      <FaMobileAlt />
                                    </InputGroup.Text>

                                    <Form.Select
                                      aria-label="Default select example"
                                      className="subscriptionSelect mt-3   "
                                      name='platform'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      
                                    
                                    >
                                      <option
                                        disabled="disabled"
                                        selected={true}
                                       
                                        className="disabledOption"
                                      >
                                        --select platform-- *
                                        
                                      </option>
                                      <option value="Android">Android</option>
                                      <option value="Ios">Ios</option>
                                    </Form.Select>
                                    
                                  </InputGroup>
                                </Form.Group>
                                {errors.platform && touched.platform ? (
                                    <p>{errors.platform}</p>
                                  ) : null}
                              </div>
                              <div className="col-md-6">
                                <Form.Group className="mb-3 mx-1">
                                  <InputGroup className="mb-3 align-items-center">
                                    <InputGroup.Text className="userLogo mt-3">
                                      <FaCartPlus />
                                    </InputGroup.Text>

                                    <Form.Select
                                      aria-label="Default select example"
                                      className="subscriptionSelect mt-3 "
                                      name='plan'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <option
                                        value="selectLabel"
                                        selected={true}
                                        disabled
                                      >
                                        --select plan-- *
                                      </option>
                                      <option value="Monthly">
                                        Monthly
                                      </option>
                                      <option value="Annual">Annual</option>
                                      <option value="Business">Business</option>
                                    </Form.Select>
                                  </InputGroup>
                                </Form.Group>
                                {errors.plan && touched.plan ? (
                                    <p>{errors.plan}</p>
                                  ) : null}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                {/* feedback form */}
                                <Form.Group>
                                  <Form.Control
                                    type="text"
                                    placeholder="Full Name *"
                                    className="feedbackInput mx-1 mb-3"
                                    id="inputFullName"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  {errors.name && touched.name? (
                                    <p>{errors.name}</p>
                                  ) : null}
                                </Form.Group>
                              </div>
                              <div className="col-md-6">
                                <Form.Group>
                                  <Form.Control
                                    type="text"
                                    placeholder="Email *"
                                    className="feedbackInput mx-1"
                                    id="inputEmail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="email"
                                  />
                                 {errors.email&& touched.email?<p>{errors.email}</p>:null} 
                                </Form.Group>
                              </div>
                            </div>
                            <div className="row">
                              <Form.Group>
                                <Form.Control
                                  type="text"
                                  placeholder="Phone"
                                  className="feedbackInput mt-3 mx-1"
                                  id="inputCall"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name='phone'
                                />
                               { errors.phone&& touched.phone?<p>{errors.phone}</p>:null}
                              </Form.Group>
                            </div>
                            <div className="row">
                              <Form.Group className="mt-3">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  className="feedbackTextArea mb-3 mx-1"
                                  placeholder="Description *"
                                  id="inputDescription"
                                  name='desc'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.desc && touched.desc?<p>{errors.desc}</p>:null}
                              </Form.Group>
                            </div>
                           
                            <div className="d-flex align-items-center justify-content-center  mb-3 mt-3">
                              <Button
                                variant="primary"
                                type="submit"
                                className=" px-5 py-2 feedbackBtn "
                                onSubmit={handleSubmit}
                              >
                                Submit
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </Tab>
                    {/* <Tab eventKey="Technical Issue" title="Technical Issue">
        Technical issue
      </Tab>
      <Tab eventKey="Write For Us" title="Write For Us" >
        Write For Us
      </Tab> */}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
