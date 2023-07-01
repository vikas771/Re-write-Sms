import React from "react";

const Footer = () => {
  return (
    <>
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright &nbsp;
            <a
              className="text-white"
              href="https://aurasoftdigitech.com/"
              target="_blank"
            >
              Aurasoft
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
