import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              sed, illo animi repellendus, accusantium, consequuntur
              perspiciatis deleniti error pariatur necessitatibus minus eveniet
              explicabo. At repudiandae nesciunt laudantium necessitatibus, in
              molestias quae rerum ex voluptatum tempora cum? Nihil sapiente,
              quae ab quis eius sed provident saepe doloremque quasi soluta
              minima non cumque, molestiae expedita facere dolorum iste veniam
              dolorem tempore modi? Nisi quisquam sunt, earum numquam, ducimus
              aut veritatis sequi, quaerat aliquam enim quod dignissimos
              reprehenderit odit? Alias eos consectetur consequatur, beatae
              quaerat tempora debitis, distinctio expedita tempore amet ipsum
              eum, cum accusantium asperiores ex? Odio aut pariatur minima iusto
              sequi?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
