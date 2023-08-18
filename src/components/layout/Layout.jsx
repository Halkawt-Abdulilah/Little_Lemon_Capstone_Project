import MainNavigation from "./MainNavigation.jsx";
import Footer from './Footer.jsx';
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
