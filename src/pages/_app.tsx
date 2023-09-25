import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Meta from "./components/Meta";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="grid grid-cols-12 gap-[1rem] px-[0.5em] sm:px-[1em]  my-[1em] sm:my-[3em] md:my[3.5em]">
          <Meta />
          <div className="col-span-12 lg:col-span-3 p-[1em] xs:p-[0em] text-center rounded-2xl bg-white dark:bg-dark-500 ">
            <Sidebar />
          </div>
          <div className="col-span-12 bg-white lg:col-span-9  rounded-2xl flex flex-col overflow-hidden dark:bg-dark-500 ">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
