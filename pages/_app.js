import "../styles/globals.css";
import "../styles/SCSS/app.scss";
import { Provider } from "../context";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
