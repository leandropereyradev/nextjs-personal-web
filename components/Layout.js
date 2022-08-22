import Footer from "./Footer";
// import Lang from "./Lang";
import Nav from "./Nav";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <>
      <NavMenu
        menues={[
          ["/", "navMenu-home"],
          ["/portfolio", "navMenu-portfolio"],
          ["/about", "navMenu-about"],
          ["/contact", "navMenu-contact"],
        ]}
      />
      {/* <Lang /> */}
      {children}
      <Nav />
      <Footer />
    </>
  );
};

export default Layout;
