import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    theme="colored"/>
    <Component {...pageProps} />;
    </>

  )
  
}
