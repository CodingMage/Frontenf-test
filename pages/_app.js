import "../styles/globals.css";
import "../styles/SCSS/app.scss";
import { Provider } from "../context";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;
