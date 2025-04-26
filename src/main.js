import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";
export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {

    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });


    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      console.log("No token found, redirecting to login.");
      alert("Please log in first.");
        navigate("/login"); // Redirect to login page
    }

    //  const handleScroll = () => {
    //    const navbar = document.getElementById("navbar");
    //    if (window.scrollY > 50) {
    //      navbar.classList.add("navbar-colored");
    //    } else {
    //      navbar.classList.remove("navbar-colored");
    //    }
    //  };

    //  window.addEventListener("scroll", handleScroll);
    //  return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm border-bottom border-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#!">
            <i className="fab fa-bootstrap fa-2x me-2"></i>
            <h1 className="h4 m-0">JOB MATCHER</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#action">
                  Action
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQs">
                  FAQs
                </a>
              </li>
              {localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="text-white text-decoration-none"
                      href="/register"
                    >
                      <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          window.location.href = "/login";
                        }}
                        type="button"
                        className="btn btn-danger ms-lg-3 mt-2 mt-lg-0"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="text-white text-decoration-none"
                      href="/register"
                    >
                      <button
                        type="button"
                        className="btn btn-dark ms-lg-3 mt-2 mt-lg-0"
                      >
                        Get Started
                      </button>
                    </a>
                  </li>{" "}
                </>
              )}
              {/*               
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none" href="/register">
                  <button
                    type="button"
                    className="btn btn-dark ms-lg-3 mt-2 mt-lg-0"
                  >
                    Get Started
                  </button>
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none" href="/register">
                  <button
                    type="button"
                    className="btn btn-danger ms-lg-3 mt-2 mt-lg-0"
                  >
                    Logout
                  </button>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="main-screen">
        <div className="container">
          <h1 data-aos="zoom-in" className="text-center p-5">
            JOB MATCHER
          </h1>
          <p className="text-center text-white mb-5" data-aos="fade-up">
            Your gateway to a brighter career. Find your dream job with us
            today!
          </p>
          {/* <div className="row justify-content-center text-center text-white mt-4">
            <div className="col-3">
              <p>
                <span>1</span> Upload Your CV
              </p>
            </div>
            <div className="col-3">
              <p>
                <span>2</span> Get Your Opportunity
              </p>
            </div>
            <div className="col-3">
              <p>
                <span>3</span> Find Your Job
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <section className="py-5 bg-white services" id="services">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">
              Empowering your career journey with tools and services tailored to
              your goals.
            </p>
          </div>
          <div className="row text-center g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card mycard h-100 shadow border-0">
                <div className="card-body">
                  <p className="text-center mb-3 ">
                    {" "}
                    <span>1</span>{" "}
                  </p>

                  <h5 className="card-title">CV Upload</h5>
                  <p className="card-text">
                    Easily upload your CV and build your professional profile in
                    seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <p className="text-center mb-3 ">
                    {" "}
                    <span>2</span>{" "}
                  </p>
                  <h5 className="card-title">Smart Matching</h5>
                  <p className="card-text">
                    Get matched with jobs based on your skills, goals, and
                    preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <p className="text-center mb-3 ">
                    {" "}
                    <span>3</span>{" "}
                  </p>
                  <h5 className="card-title">Career Guidance</h5>
                  <p className="card-text">
                    Receive tips, advice, and insights to boost your job search
                    and career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 cta text-white text-center" id="cta">
        <div className="container" data-aos="zoom-in">
          <h2 className="mb-3 text-dark">Ready to land your dream job?</h2>
          <p className="mb-4">
            Sign up today and let our smart system match you with opportunities
            that suit your skills and passion.
          </p>
          <a href="/register" className="btn btn-light btn-lg">
            Get Started Now
          </a>
        </div>
      </section>

      <section className="py-5 bg-light" id="our-story">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://as2.ftcdn.net/jpg/05/41/28/29/1000_F_541282950_dy9w27XEik2BBxbm65l96v4j9tF2GFTv.jpg"
                alt="Our Story"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">About Us</h2>
              <p>
                Welcome to our job matching platform, where we connect talent
                with opportunity. Our mission is to simplify the job search
                process and help you find the perfect fit for your skills and
                aspirations.
              </p>
              <p>
                We understand that finding the right job can be a daunting task,
                which is why we have created a user-friendly platform that
                streamlines the process. Our advanced algorithms match your
                skills, experience, and preferences with job openings from top
                companies in various industries.
              </p>
              <p>
                <b>Team developer:</b> <br></br>
                1. Hamza : <br></br>
                2. Mohammed <br></br>
                3. Ibrahim <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light" id="faqs">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="text-muted">Have questions? We've got answers!</p>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                >
                  Is Job Matcher free to use?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  Yes! Job Matcher is completely free for job seekers.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  How accurate are the job matches?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Our AI algorithm uses your profile data to provide highly
                  relevant job matches.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                >
                  Can I apply for jobs through the platform?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, you can apply directly to jobs listed on our platform
                  with your uploaded CV.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer bg-dark text-white">
        <div className="container text-center text-light py-2">
          <p className="mb-0 text-white">
            &copy; 2025 Job Matcher. All rights reserved.
          </p>
          <div className="social-icons mt-2">
            <a href="#!" className="me-3">
              <i className="fab fa-facebook-f">
                <img width={24} src="./facebook.png" alt="face" />
              </i>
            </a>
            <a href="#!" className="me-3">
              <i className="fab fa-twitter">
                <img width={24} src="./linkedin (1).png" alt="face" />
              </i>
            </a>
            <a href="#!" className="me-3">
              <i className="fab fa-linkedin-in">
                <img width={24} src="./github.png" alt="face" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
