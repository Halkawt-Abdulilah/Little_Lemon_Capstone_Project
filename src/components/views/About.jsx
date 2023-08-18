import chef from "../../images/chef.jpg"
import restaurant from "../../images/restaurant.jpg"
import classes from "./About.module.css";

export default function About() {
    return (
        <>
        <section className={`${classes.aboutSection} homePadding content content-b flex`}>
            <article className={`${classes.article}`}>
            <h1 className="title">Little Lemon</h1>
            <h2 className="subTitle">Chicago</h2>
            <p className={`paragraph`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at
            nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
            blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque
            porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In
            dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.</p>
            </article>
            <div className={`${classes.images}`}>
                <img className={classes.restaurantImage} id="restaurant" src={restaurant} alt="restaurant" />
                <img className={classes.chefImage} id="chef" src={chef} alt="chef" />
            </div>
        </section>
        </>
            );
}