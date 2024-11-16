// src/pages/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page" style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn’t exist.</p>
      <button onClick={handleGoHome} style={styles.button}>
        Go Back Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0D0F12", // Dark background
    color: "#00FFB2", // Neon accent color
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "8rem",
    fontWeight: "bold",
    margin: "0",
  },
  message: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#0D0F12",
    backgroundColor: "#00FFB2",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default NotFound;
