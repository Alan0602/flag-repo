import React, { useEffect, useState } from "react";


const Level1 = () => {
  const [muid, setMuid] = useState("");
  const [showContent, setShowContent] = useState(false);

  const handleMuidChange = (event) => {
    setMuid(event.target.value);
  };

  useEffect(() => {
    const muid = localStorage.getItem("muid");
    if (muid) {
      setMuid(muid.trim());
      setShowContent(true);
    }
  }, []);

  const handleContinueClick = () => {
    if (muid.length >= 5) {
      setShowContent(true);
      //store muid in local storage
      localStorage.setItem("muid", muid);
    } else {
      alert("Please enter a valid muid (at least 5 characters).");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showContent && (
        <div
          style={{
            backgroundColor: "#1c1c1c",
            color: "#fff",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ color: "#e62429" }}>
            Please enter your unqiueID to continue
          </h2>
          <input
            type="text"
            value={muid}
            onChange={handleMuidChange}
            style={{
              backgroundColor: "#fff",
              color: "#1c1c1c",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
              marginTop: "20px",
            }}
          />
          <br />
          <button
            onClick={handleContinueClick}
            style={{
              backgroundColor: "#e62429",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </div>
      )}
      {showContent && (
        <html>
          <body>
            <img
              src="/img1.png"
              alt=""
              srcset=""
              style={{ maxWidth: "100%", margin: "auto" }}
            />
            <br />
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              kxqw.djuhbd.olyh/{" "}
              <a href='notapdf.fpd' target="_blank" rel="noopener noreferrer">
                <span
                  style={{
                    backgroundColor: "#e62429",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Find Me
                </span>{" "}
              </a>
              + Muhammad Kutty Panaparambil Ismai's Son
            </p>
            <a
              href="https://youtu.be/dkwZ_9dZUsA?si=myGcFuUyXzum7WXk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  backgroundColor: "#e62429",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                For Finding Me(Real One)
              </button>
            </a>
            <a
              href="/RawMenCCLVI.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  backgroundColor: "#e62429",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  marginLeft: "20px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                For Finding Me
              </button>
            </a>
          </body>
        </html>
      )}
    </div>
  );
};

export default Level1;
