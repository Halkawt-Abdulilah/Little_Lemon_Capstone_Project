import classes from "./TestimonialCard.module.css"

export default function TestimonialCard(props) {
    return (
        <section className={classes.card}>
            <div className={`${classes.rating} flex`}>
                <div>
                    <h3 className="markazi"> {props.name} </h3>
                    <div>
                        {renderRating(props.rating)}
                    </div>
                </div>
                <img className={classes.image} src={props.image} alt="" />
            </div>
            <p className={classes.comment}> {props.comment} </p>
        </section>
    );
}

const renderRating = (rating) => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? 'filled-star' : 'empty-star';
      starIcons.push(<span key={i} className={`star ${starClassName}`}>&#9733;</span>);
    }
    return starIcons;
  };