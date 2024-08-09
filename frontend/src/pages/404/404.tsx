import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (

    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../../img/new/error.png")} alt="" />
          <h2>Error. We can’t ftind the page you’re looking for.</h2>
          <p>
            Sorry for the inconvenience. 
          </p>
          <form action="#" className="search">
            <input type="text" className="form-control" placeholder="search" />
          </form>
          <Link to="/" className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
);
export default NotFound;