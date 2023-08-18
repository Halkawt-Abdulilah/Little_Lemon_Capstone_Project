import classes from "./SpecialsCard.module.css";

export default function SpecialsCard(props) {

    return (
        <div className={classes.card}>
            <img src={props.image} alt={props.name} className={classes.image} />
            <div className={`${classes.nameAndPrice} markazi`}>
                <h3>{props.name}</h3>
                <h3 className={`${classes.price}`}>{props.price}</h3>
            </div>
            <p className={`${classes.description} paragraph`}>
                {props.description}
            </p>
            <p className={classes.cta}>Order Now</p>
        </div>
    )
}