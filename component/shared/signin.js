import { useState, useContext } from "react";
import { Context } from "../../context/index";
import axiosConfig from "../../helpers/axiosConfig";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

function SignIn(props) {
  //for redirecting
  const router = useRouter();
  // const { state, dispatch } = useContext(Context);

  const [cookie, setCookie] = useCookies(["user"]);

  // User Data
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loginEr, setloginErr] = useState("");

  //Email Validation function
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // signin api request
  const signIn = (e) => {
    setloginErr("");
    if (validateEmail(details.email)) {
      e.preventDefault();
      axiosConfig({
        method: "post",
        url: "/auth/login",
        data: details,
      })
        .then((res) => {
          console.log(res.data.access_token);
          const data = res.data;
          setCookie("user", JSON.stringify(data), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });

          router.push(`/dashboard`);
        })

        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            setloginErr(error.response.statusText);
          }
        });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="login__header">Admin</div>

          <div className="login__sub-header">
            Sign in to your account to continue
          </div>
          <form className="input__contain">
            {/* {validateEmail(details.email) ? "" : "Enter the correct Email"} */}
            <p
              style={{
                marginTop: "-23px",
                color: "red",
                fontSize: "15px",
              }}
            >
              {loginEr}
            </p>
            <div className="input">
              <div className="input__label">Email address</div>
              <div className="input__input">
                <input
                  type="email"
                  value={details.email}
                  required
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="input">
              <div className="input__label">Password</div>
              <div className="input__input">
                <input
                  type="password"
                  value={details.password}
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="btn__contain">
              <div className="signin__btn">
                <button onClick={signIn}>sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
