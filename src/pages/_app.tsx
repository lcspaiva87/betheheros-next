import "@/styles/globals.css";
import App, { AppContext } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { OngsProvider } from "../context/ongContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <OngsProvider>
          <Component {...pageProps} />
        </OngsProvider>
        <ToastContainer />
      </>
    );
  }
}

export default MyApp;
