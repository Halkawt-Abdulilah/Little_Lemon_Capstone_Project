import React from "react";

import SpecialsCard from "../cards/SpecialsCard";
import image1 from '../../images/bruchetta.svg';
import image2 from '../../images/greek salad.jpg';
import image3 from '../../images/lemon dessert.jpg';

import classes from './Highlights.module.css';

export default function Highlights() {

    const specialItems = [
        {
            id: 2,
            image: image1,
            name: 'Bruchetta',
            price: '$10.99',
            description: 'Savor the perfect harmony of toasted artisan bread topped with ripe tomatoes, fresh basil, and a drizzle of rich balsamic glaze.',
        },
        {
            id: 3,
            image: image2,
            name: 'Greek Salad',
            price: '$4.99',
            description: 'Embark on a culinary voyage to Greece with our authentic Greek salad. A symphony of ingredients that captures the essence of sun-kissed shores.',
        },
        {
            id: 1,
            image: image3,
            name: 'Lemon Cake',
            price: '$3.99',
            description: 'Immerse yourself in the tangy citrus sensation that dances across your palate, balanced perfectly with a delicate sweetness.',
        },
    ];

    return (
        <section className={`${classes.highlightSection } homePadding`}>
            <div className={`${classes.highlightsHeader} flex`}>
                <h1 className={`${classes.title} title`}>Specials of the Week</h1>
                <button className={classes.highlightsButton}>Online Menu</button>
            </div>
            <div className={classes.cards}>
                {
                    specialItems.map((specialItem) => {
                       return <SpecialsCard
                       key={specialItem.id}
                    image={specialItem.image}
                    name={specialItem.name}
                    price={specialItem.price}
                    description={specialItem.description}
                    />
                    })
                }
            </div>
        </section>
    );
}