import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/index";
import axiosConfig from "../../helpers/axiosConfig";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import BounceLoader from "react-spinners/BounceLoader";
import AuthContext from "../../context/AuthContext";

function SignIn(props) {
  //for redirecting
  const router = useRouter();
  const [btnload, setBtnload] = useState(false);

  const [LoginErr, setLoginErr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      setBtnload(false);
      setLoginErr(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErr("");
    setBtnload(true);
    login({ email, password });
  };

  // signin api request
  // const signIn = (e) => {
  //   setLoginErr("");
  //   if (validateEmail(details.email)) {
  //     setBtnload(true);
  //     e.preventDefault();
  //     axiosConfig({
  //       method: "post",
  //       url: "/auth/login",
  //       data: details,
  //     })
  //       .then((res) => {
  //         const data = res.data;
  //         setCookie("user", JSON.stringify(data), {
  //           path: "/",
  //           maxAge: 3600, // Expires after 1hr
  //           sameSite: true,
  //         });
  //         setBtnload(false);
  //         router.push(`/dashboard`);
  //       })

  //       .catch((error) => {
  //         if (error.response) {
  //           setLoginErr(error.response.statusText);
  //           setBtnload(false);
  //           console.log(error.response);
  //         }
  //       });
  //   }
  // };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="login__header">Admin</div>

          <div className="login__sub-header">
            Sign in to your account to continue
          </div>
          <form className="input__contain" onSubmit={handleSubmit}>
            {/* {validateEmail(details.email) ? "" : "Enter the correct Email"} */}
            <p
              style={{
                marginTop: "-23px",
                color: "red",
                fontSize: "15px",
              }}
            >
              {LoginErr}
            </p>
            <div className="input">
              <div className="input__label">Email address</div>
              <div className="input__input">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input">
              <div className="input__label">Password</div>
              <div className="input__input">
                <input
                  type="password"
                  value={password}
                  minLength="6"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="btn__contain">
              <div className="signin__btn">
                <button>
                  {" "}
                  <span> sign in</span>
                  <BounceLoader size={25} color={"#fb6504"} loading={btnload} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
