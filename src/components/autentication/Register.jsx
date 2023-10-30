import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h1>Sign up</h1>
        <input
          style={{
            height: "30px",
            marginTop: "15px",
            outline: "none",
          }}
          type="email"
          placeholder="Email"
        />
        <input
          style={{
            height: "30px",
            marginTop: "15px",
            outline: "none",
          }}
          type="password"
          placeholder="Password"
        />
        <button
          style={{
            background: "hsl(88.39deg 49.73% 63.33%)",
            border: "none",
            width: "200px",
            height: "30px",
            margin: "15px auto",
          }}
        >
          Sign up
        </button>
        <button
          style={{
            background: "hsl(227.37deg 12.26% 30.39%)",
            border: "none",
            height: "35px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sign in with Google
          <GoogleIcon sx={{ marginLeft: "5px" }} />
        </button>
      </div>
    </div>
  );
};

export default Register;
