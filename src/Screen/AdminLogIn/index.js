import { React, useState } from "react";
import style from "./style.module.css";
import images from "../../asset";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";
import axios from "axios";

export default function AdminLogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [isSelected, setIsSelected] = useState("cafe");
  const [errorMessage, setErrorMessage] = useState("")

  const handleSignin = () => {
    const token = "authToken";
    dispatch(setAuthToken(token));
    navigate("/");
  };

  const handleAdminLogin = async () => {
    if(!userName && !password) {
      setErrorMessage("*UserName and Password are required.")
      return
    }
    try {
      console.log(userName, password);
      const response = await axios.post("http://192.168.100.30:8080/outlet/signIn", {
        email: userName,
        password,
      });
      console.log("SignIn successful: ", response.data);
      //  navigate("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your username and password.")
      console.error("Login failed: ", error);
    }
  };



  return (
    <div className={style.container}>
      <div className={style.logInBox}>
        <div className={style.boxLelt}>
          <div className={style.adminBtnWrapper}>
            <div
              onClick={() => setIsSelected("admin")}
              className={
                isSelected === "admin"
                  ? style.adminBtnGreen
                  : style.adminBtnWhite
              }
            >
              <img
                className={style.selectBtn}
                src={
                  isSelected === "admin"
                    ? images.selectBtn
                    : images.notSelectedBtn
                }
              />
              Admin Panel
            </div>
            <div
              onClick={() => setIsSelected("cafe")}
              className={
                isSelected === "cafe"
                  ? style.adminBtnGreen
                  : style.adminBtnWhite
              }
            >
              <img
                className={style.selectBtn}
                src={
                  isSelected === "cafe"
                    ? images.selectBtn
                    : images.notSelectedBtn
                }
              />
              Cafe Owner
            </div>
          </div>
          <div className={style.logoWrapper}>
            <img className={style.logo} src={images.logo} />
          </div>
          <div className={style.headingWrapper}>
            <div className={style.logoHeading}>
              Welcome to the Admin Panel for{" "}
              <span className={style.bold}>Cuppa!</span>
            </div>
          </div>
        </div>
        <div className={style.boxRight}>
          <div className={style.logInHeading}>Log In</div>
          <div className={style.logInPara}>
            Offering coffee shop owners a platform to enhance their sales with
            Cuppa.
          </div>
          {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
          <div className={style.textFeild}>
            <div className={style.inputHeading}>Username/Email</div>
            <input
              className={style.userInput}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={style.textFeild}>
            <div className={style.inputHeading}>Password</div>
            <input
              className={style.userInput}
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div
            className={style.btnWrapper}
            onClick={handleAdminLogin}
            // onClick={handleSignin}
          >
            <div className={style.btn}>
              Sign In
              <div className={style.arrow}>
                <img className={style.arrowImg} src={images.singInArrow} />
              </div>
            </div>
          </div>

          <div className={style.forgotBtn}>Forgot Password?</div>
          <div className={style.otherAccount}>
            <div className={style.line}></div>
            Sign In with
            <div className={style.line}></div>
          </div>
          <div className={style.otherSignIn}>
            <img className={style.googleLogo} src={images.googleLogo} />
            Continue with Google
          </div>
          <div className={style.otherSignIn}>
            <img className={style.googleLogo} src={images.facebookLogo} />
            Continue with Facebook
          </div>
          <div className={style.lastPara}>
            Don’t have an account?
            <span
              onClick={() => navigate("/signup")}
              className={style.signUpBtn}
            >
              Sign Up Today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
