import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={`${classes.padding} homePadding footerGrid`}>
            <img src={logo} className={`footer-logo`} alt="" />
                <section className={`${classes.linksList} linkGrid1`}>
                    <h5 className="list-title">Navigation</h5>
                <ul className={`list-ul`}>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">Home</Link></li>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">About</Link></li>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">Menu</Link></li>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">Reservations</Link></li>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">Order Online</Link></li>
                    <li><Link className={`${classes.link} paragraph list-li`} to="/">Login</Link></li>
                </ul>
                </section>
                <section className={`${classes.linksList} linkGrid2`}>
                    <h5 className="list-title">Contact</h5>
                    <ul className={`list-ul`}>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">Phone Number</Link></li>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">Email</Link></li>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">Address</Link></li>
                    </ul>
                </section>
                <section className={`${classes.linksList} linkGrid3`}>
                    <h5 className="list-title">Social Media</h5>
                    <ul className={`list-ul`}>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">Instagram</Link></li>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">LinkedIn</Link></li>
                        <li><Link className={`${classes.link} paragraph list-li`} to="/">Pinterest</Link></li>
                    </ul>
                </section>
        </footer>
    )
}