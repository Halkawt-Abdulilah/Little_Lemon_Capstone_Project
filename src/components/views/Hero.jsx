import aboutImage from "../../images/about.jpg";
import classes from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`${classes.aboutSection} flex`}>
            <article className={`${classes.heroItem}`}>
                <h1 className={`${classes.aboutTitle} title`}>Little Lemon</h1>
                <h2 className={`${classes.aboutSub} subTitle`}>Chicago</h2>
                <p className={`${classes.aboutParagraph} paragraph`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque facilis nesciunt fugiat repellat laudantium, aperiam reprehenderit itaque ipsa. Culpa quasi omnis dolorum voluptatem amet corrupti iste ut nesciunt veniam.</p>
                <button className={`${classes.aboutButton} paragraph`}>Reserve a Table</button>
            </article>
            <div>
                <img className={`${classes.aboutImage}`} src={aboutImage} alt="br" />
            </div>
        </section>
    )
}