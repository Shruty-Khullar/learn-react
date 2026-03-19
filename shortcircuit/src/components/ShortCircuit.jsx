// import { useState } from "react";

// const ShortCircuit = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     const [user, setUser] = useState("");
//     return (
//         <section className="container short-container">
//             <h1>Welcome to Short Circuit Evaluation</h1>

//             {isLoggedIn && <p>You are logged in</p>}
//             {user ? `Hello ${user}` : "Please log in!"}

//             <div className="grid-three-cols">
//                 {/* If loggedIn, we will go to logout screen and vice versa */}
//                 <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
//                 <button onClick={()=>setUser("Shruty Khullar")}>Set User</button>
//                 <button onClick={()=>setUser("")}>Clear User</button>
//             </div>
//         </section>
//     );
// };

// export default ShortCircuit;
import { useState } from "react";

export default function ShortCircuit() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f0f4f8",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "40px 48px",
        width: "400px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "28px",
          marginBottom: "32px",
          color: "#111"
        }}>
          useState Challenge
        </h1>

        <div style={{ marginBottom: "12px", fontSize: "15px", color: "#333" }}>
          Count: <span style={{ color: "#00bcd4", fontWeight: "600" }}>{count}</span>
        </div>

        <div style={{ marginBottom: "28px", fontSize: "15px", color: "#333" }}>
          Step:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{
              marginLeft: "4px",
              padding: "6px 10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              width: "80px",
              fontSize: "14px",
              outline: "none"
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { label: "Increment", action: () => setCount(c => c + step) },
            { label: "Decrement", action: () => setCount(c => c - step) },
            { label: "Reset",     action: () => setCount(0) },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                flex: 1,
                padding: "10px 0",
                backgroundColor: "#29b6f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#0288d1"}
              onMouseLeave={e => e.target.style.backgroundColor = "#29b6f6"}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}