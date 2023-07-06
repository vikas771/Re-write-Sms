import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Style from "../styles/header.module.css";
import localDetails from "../../utils/localstoragefile";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Login from "@/Component/common-forms/login";
import Navbar from "@/Component/common-forms/navbar";
import Footer from "@/Component/common-forms/footer";
// import 'react-reveal/css/reveal.css';
// import 'react-reveal/css/transition.css';

export default function App({ Component, pageProps }) {

  const [LocalSData, setLocalSData] = useState("")
  

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(()=>{
    const LocalSData = localDetails();
    setLocalSData(LocalSData)
  },[LocalSData])

  return (
    <>
      <div className={Style.MainSectionApp}>
        {LocalSData == null ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <div className={Style.BodyCen}>
              <Component className={Style.content} {...pageProps} />
            </div>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              theme="light"
            />
            <Footer />
          </>
        )}
      </div>

      {/* <Login /> */}
      {/* <Navbar />
          <Component className={Style.content} {...pageProps} />
          <Footer /> */}
    </>
  );
}
