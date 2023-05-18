import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">1 December 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            odio, interdum vitae massa eget, posuere bibendum nulla. Maecenas
            egestas sollicitudin justo, sit amet porta tellus ultrices luctus.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
