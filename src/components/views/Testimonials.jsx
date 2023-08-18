import TestimonialCard from "../cards/TestimonialCard"
import classes from "./Testimonials.module.css"

export default function Testimonials() {

    const testimonials = [
        {
          "name": "John Doe",
          "rating": 5,
          "image": "https://imgs.search.brave.com/kWbnhVMSdjy5eYTD42pfvvpxcOcz1dDAF_sZLn2AjIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L3NvbWV0aGluZ3hz/L3BlcnNvbi0yNC5w/bmc",
          "comment": '"Great restaurant! I love it."'
        },
        {
          "name": "Jane Smith",
          "rating": 4,
          "image": "https://imgs.search.brave.com/kWbnhVMSdjy5eYTD42pfvvpxcOcz1dDAF_sZLn2AjIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L3NvbWV0aGluZ3hz/L3BlcnNvbi0yNC5w/bmc",
          "comment": '"Very satisfied with the quality."'
        },
        {
          "name": "Alex Davis",
          "rating": 3,
          "image": "https://imgs.search.brave.com/kWbnhVMSdjy5eYTD42pfvvpxcOcz1dDAF_sZLn2AjIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L3NvbWV0aGluZ3hz/L3BlcnNvbi0yNC5w/bmc",
          "comment": '"You have to try the Lemon Cake!"'
        }
      ]

    return (
        <section className={`${classes.padded} bg-secondary`}>
            <h1 className="center title color-primary">Testimonials</h1>
            <div className={classes.cards}>
                {testimonials.map((testimonial)=> {
                   return <TestimonialCard
                    name = {testimonial.name}
                    rating = {testimonial.rating}
                    image = {testimonial.image}
                    comment = {testimonial.comment}
                   />
                })}
            </div>
        </section>
    )
}