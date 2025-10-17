import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Card component that accepts props.children
function Card(props) {
  const cardStyle = {
    border: "2px solid #4A90E2",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px auto",
    width: "320px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };
  return <div style={cardStyle}>{props.children}</div>;
}

// ✅ App component showing how to use Card
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Props Children Example</h1>

      <Card>
        <h2>🌟 Welcome to React!</h2>
        <p>This is the first card using <b>props.children</b>.</p>
      </Card>

      <Card>
        <img
          src="https://placekitten.com/200/200"
          alt="Cute kitten"
          style={{ borderRadius: "50%" }}
        />
        <h3>Meet Kitty 🐱</h3>
        <p>Every card looks consistent because of shared styling.</p>
      </Card>

      <Card>
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "#4A90E2",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Button inside card clicked!")}
        >
          Click Me
        </button>
      </Card>
    </div>
  );
}

// ✅ Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
