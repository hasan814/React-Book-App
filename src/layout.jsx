import PropTypes from "prop-types";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1100px] mx-auto">
      <Header />
      <main className="flex-grow container mx-auto p-4 text-black">
        {children}
      </main>
      <Footer className="bg-gray-800 text-white p-4" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
