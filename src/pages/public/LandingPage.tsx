import { Card } from "@/components/ui/Card";
import { cards } from "@/data/landingPageCards";
import "@/styles/landing.css";
import { Link } from "react-router-dom";

import s2i1 from "@/assets/landing_page/s2i1.webp";
import s2i2 from "@/assets/landing_page/s2i2.webp";

export function LandingPage() {
  return (
    <>

        {/* Hero */}

        <section className="hero">

          <div className="hero-content">
            <h1>PAUSA</h1>

            <p>
              Learn to prevent online scams with interactive lessons.
            </p>

            <Link to="/courses">
              <button className="btn-plus">Get Learning</button>
            </Link>
          </div>

        </section>

        {/* Features */}

        <section className="features">

          <article className="feature">
            <div className="text">
              <h3>Digital Independence</h3>
              <p>
                Designed for people who fear "breaking" the phone —
                not for people who grew up with one.
              </p>
            </div>

            <img src={s2i1} alt="" />
          </article>

          <article className="feature reverse">

            <div className="text">
              <h3>... in a fun and simple way</h3>

              <p>
                No stress, no isolated lessons, no red error states.
                <b> One clear action per screen.</b>
              </p>
            </div>

            <img src={s2i2} alt="" />
          </article>

        </section>

        {/* Values */}

        <section className="values">

          <article>
            
            <h3>Our purpose</h3>
            <p>Teach older adults to spot scams, deepfakes, and manipulation through practice, not lectures. 
              Built with families, not just for them.</p>
          </article>

          <article>
            <h3>Sustainability & Reach</h3>
            <p>Open-licensed with content stored as editable data files. 
              Any civic centre, municipality, or partner can translate or extend modules without engineering support.</p>
          </article>

        </section>

        {/* Cards */}

        <section className="landing-cards">
          <h2>Three Entry Points</h2>

          <div className="landing-card-grid card-grid">
            {cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <div className="overlay">
            <h2>Pick your role and begin</h2>

            <p>
              Your learning journey starts with one simple choice.
            </p>

            <Link to="/login">
              <button className="btn-plus">Get Started</button>
            </Link>
          </div>

        </section>
    </>
  );
}