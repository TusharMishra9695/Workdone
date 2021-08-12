import React, {  useEffect, useState, useCallback } from "react";
import {
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import Data from "../public/data";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  // const history = useHistory();
  // useEffect(()=>{
  // if(localStorage.getItem('user-info')){
  //     history.push('/after-login')
  // }
  // },[])

  // async function validate()
  // {
  //    console.warn(username,password);
  //    let item ={username,password};
  //    let result = fetch('https://fakestoreapi.com/auth/login',{
  //     method:'POST',
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Accept":"application/json"
  //     },
  //     body:JSON.stringify(item)

  // })
  //     result = await result.json();
  //     localStorage.setItem("user-info",JSON.stringify(result))
  //     history.push("/after-login")
  // }

  function Validate(body: string) {
    if (/\b[a-z]|\w[A-Z]/.test(body)) {
      return true;
    }

    return false;
  }
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const result = Data.filter((data) => {
      return username == data.username && password == data.password;
    });
    if (result.length) {
      localStorage.setItem("user", JSON.stringify(result[0]));
      router.push("/after-login");
    } else alert("wrong password");
  }, []);

  useEffect(() => {
    // if (localStorage.getItem("user")) {
    //   router.push("/after-login");
    // }
  }, []);

  // const handleSubmit = useCallback((e)=>{
  //     if(
  // Data.map((data)=>{
  // return true
  // })
  //     )
  //     router.push('/after-login')
  // })

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className="box1" >
          <div style={{ paddingTop: "40px",alignItems:"center",display:"flex",flexDirection:"column" }}>
            <h1>Log in</h1>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <h3>Username</h3>
            <div>
              {" "}
              <TextField
                variant="outlined"
                label="Enter Username"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                }}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text "
                name="username"
                id="username"
              />{" "}
              {!Validate(username) && (
                <p style={{ color: "red" }}>Please Enter Username</p>
              )}{" "}
            </div>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <h3>Password</h3>
            <div>
              {" "}
              <TextField
                type="password"
                variant="outlined"
                label="Enter Password"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                id="password"
              />{" "}
              {!Validate(password) && (
                <p style={{ color: "red" }}>Enter Password in letters</p>
              )}{" "}
            </div>
          </div>
          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            <span>Remember password</span>
            <span
              style={{
                float: "right",
                paddingRight: "25px",
                paddingTop: "7px",
              }}
            >
              Forgot Password ?
            </span>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                height: "40px",
                marginTop: "10px",
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>

          <div
            style={{
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            <span>Privacy Policy</span>
            <span
              style={{
                float: "right",
                paddingRight: "25px",
              }}
            >
              Terms & Condition
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
