import "../styles/globals.css";
import { ContextProvider } from "../context/StaticContext";
import { ThemeContextProvider } from "../context/ThemeContext";
import Head from "./head";
import Header from "../components/Home/Generic/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body className="xl:flex">
        <ContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
          </ThemeContextProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
