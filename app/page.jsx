"use client";
import ShowPage from "../components/Home/Generic/ShowPage/ShowPage";
import { ContextProvider } from "../context/StaticContext";
import { ThemeContextProvider } from "../context/ThemeContext";
import Header from "../components/Home/Generic/Header";

const Home = () => {
  return (
    <ContextProvider>
      <ThemeContextProvider>
        <Header />
        
        <ShowPage />
      </ThemeContextProvider>
    </ContextProvider>
  );
};

export default Home;
