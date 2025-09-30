import React, { useEffect, useRef, useState } from "react";
import Header from "../Core/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Core/Footer";

const Main = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);
  return (
    <>
      {/* <div ref={headerRef} className="bg-secondary text-white fixed top-0 w-full z-50 md:pr-0 pr-5"  >
        <Header />
      </div> */}
      <main ref={mainRef} className="text-justify  " style={{ marginTop: `${headerHeight}px` }}    >
        <Outlet headerHeight={headerHeight} />
      </main>
      <div>
        <Footer />  
      </div>
    </>
  );
};
export default Main;
