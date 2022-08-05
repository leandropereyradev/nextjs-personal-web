import Footer from "./Footer";
import Nav from "./Nav";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <>
        <NavMenu />
        {children}
        <Nav />
        <Footer />
    </>
  );
};

export default Layout;
