import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "../context/langContext";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Header />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </LangProvider>
  );
}

export default MyApp;
