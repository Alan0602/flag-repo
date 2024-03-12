import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Spiderman = () => {
  const [muid, setMuid] = useState("");
  const [flag, setFlag] = useState("");
  const [key, setKey] = useState(""); // added this line to store the key
  const [secretKey, setSecretKey] = useState(""); // added this line to store the secret key
  const navigate = useNavigate();
  useEffect(() => {
    const muid = localStorage.getItem("muid");

    if (muid) {
      setMuid(muid);
      setSecretKey(import.meta.env.REACT_APP_CTF_SECRET_KEY); // added this line to store the secret key
      const encrypted = btoa(muid); // modified this line to use base64 encryption
      setFlag(encrypted);
    }
  }, [secretKey]);

  if (!muid) {
    navigate("/level1");
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        filter: "grayscale(100%)", // added this line to make the image monochrome
        textShadow: "0px 0px 10px white", // added this line to add a horror effect to the text
        textAlign: "center", // added this line to center the text
      }}
    >
      <img
        src="/displaynun.jpg"
        alt=""
        style={{ maxWidth: "80vw" }}
      />
      <p
        style={{
          fontSize: "3rem", // added this line to increase the font size
        }}
      >
        Here is your flag
        <span style={{ display: "none", color: "#000000", textShadow: "none" }}>
          {flag}
        </span>
      </p>
      <a href="/submission?show=true" target="_blank" rel="noopener noreferrer">
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          GoTo Next Level
        </button>
      </a>
      <br />
      <p>
        Don't click away in a hurry.
        Make sure you find the flag.
      </p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Don't have a laptop? Don't worry!
        </p>
        <input
          type="text"
          onChange={(e) => setKey(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            boxShadow: "0px 0px 10px white",
            backgroundColor: "black",
            color: "white",
            marginBottom: "10px",
          }}
          placeholder="Enter the key to unlock"
        />
        <p>Hint: The Display has a Nun,<br/> Change this to a CSS Property</p>
        <br />
        <button
          onClick={() => {
            if (key === "display: none;") {
              alert(flag);
            } else {
              alert("Wrong answer. Try again!");
            }
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0px 0px 10px white",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Spiderman;
