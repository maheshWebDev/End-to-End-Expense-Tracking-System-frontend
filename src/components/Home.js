import React, { useContext } from "react";
import img from "../images/Managing-Money.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="cover-container position-relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div
        className="inner cover text-center position-relative z-index-1"
        style={{
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          border: "1px solid #17a2b8",
        }}
      >
        <h1 className="display-4 " style={{ marginBottom: "10px" }}>
          Welcome to spend wise
        </h1>
        <p
          className="lead"
          style={{ fontSize: "1.5rem", marginBottom: "20px" }}
        >
          Your personal expense tracker for making wise financial decisions.
        </p>
        <div>
          <Link
            to="/Sign-up"
            className="btn btn-lg btn-primary continue"
            style={{ fontSize: "1.25rem" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
