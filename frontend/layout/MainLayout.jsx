import React from "react";
import Footer from "@/modules/shared/components/Footer";
import Header from "@/modules/shared/components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
