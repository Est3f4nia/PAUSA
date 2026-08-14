import {
  CheckCircle,
  Copy,
  Link as LinkIcon,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "@/styles/dashboards/family.css";

export function FamilyDashboard() {
  const copyScript = async () => {
    const script =
      "Hey Dad, I saw you learned about how computers can copy voices. That's scary stuff! If you ever get a weird call from me asking for money, what should our Family Safe Word be?";

    await navigator.clipboard.writeText(script);
  };

  return (
    <motion.main
      className="family-dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="family-dashboard__container">

        <header className="family-dashboard__header">
          <div>
            <span className="family-dashboard__eyebrow">
              Family Portal
            </span>

            <h1>Stay connected to their learning</h1>

            <p>
              Follow your family member's digital literacy journey
              and turn what they learn into conversations at home.
            </p>
          </div>

          <div className="family-dashboard__status">
            <ShieldCheck size={22} />
            <span>Private &amp; secure</span>
          </div>
        </header>


        <section className="family-card family-card--mission">
          <div className="family-card__mission-label">
            Your Weekly Mission
          </div>

          <h2>
            Conversation Starter: AI Voice Cloning
          </h2>

          <p className="family-card__description">
            Your parent just completed the "Reality or Fiction"
            module. Use this script to start a meaningful,
            stress-free conversation about digital safety.
          </p>

          <div className="family-script">
            <p>
              "Hey Dad, I saw you learned about how computers can
              copy voices. That's scary stuff! If you ever get a
              weird call from me asking for money, what should our
              Family Safe Word be?"
            </p>
          </div>

          <button
            type="button"
            className="family-button family-button--primary"
            onClick={copyScript}
          >
            <Copy size={20} />
            Copy Script to Clipboard
          </button>
        </section>


        <div className="family-summary-grid">

          <section className="family-card family-summary-card">
            <div>
              <h2>Friday Inbox Digest</h2>

              <div className="family-summary-result">
                <CheckCircle size={38} />

                <p>
                  Great news! Your dad successfully completed the
                  "Reality or Fiction" AI module this week.
                </p>
              </div>
            </div>

            <div className="family-progress">
              <div className="family-progress__bar">
                <span style={{ width: "100%" }} />
              </div>

              <strong>100% Completed</strong>
            </div>
          </section>


          <section className="family-card family-summary-card">
            <div className="family-card__title">
              <LinkIcon size={28} />

              <h2>Family Connection</h2>
            </div>

            <p>
              You are securely connected to your parent's
              anonymous learning profile.
            </p>

            <div className="family-pin">
              <span>PIN</span>
              <strong>7492</strong>
            </div>

            <small>
              Hybrid Security Model: Zero PII collected.
              This code links your accounts privately.
            </small>
          </section>

        </div>


        <div className="family-analytics-grid">

          <section className="family-card family-chart-card">
            <div className="family-chart-header">
              <div>
                <h2>Learning Progress</h2>
                <p>Completed modules</p>
              </div>

              <span className="family-chart-value">
                4 / 5
              </span>
            </div>

            <div className="family-module-chart">

              <div className="family-module-row">
                <span>Digital Basics</span>

                <div className="family-chart-track">
                  <span style={{ width: "100%" }} />
                </div>

                <strong>100%</strong>
              </div>

              <div className="family-module-row">
                <span>Online Safety</span>

                <div className="family-chart-track">
                  <span style={{ width: "100%" }} />
                </div>

                <strong>100%</strong>
              </div>

              <div className="family-module-row">
                <span>Reality or Fiction</span>

                <div className="family-chart-track">
                  <span style={{ width: "100%" }} />
                </div>

                <strong>100%</strong>
              </div>

              <div className="family-module-row">
                <span>Scam Awareness</span>

                <div className="family-chart-track">
                  <span style={{ width: "72%" }} />
                </div>

                <strong>72%</strong>
              </div>

              <div className="family-module-row">
                <span>Privacy Basics</span>

                <div className="family-chart-track">
                  <span
                    className="family-chart-track__pending"
                    style={{ width: "24%" }}
                  />
                </div>

                <strong>24%</strong>
              </div>

            </div>
          </section>


          <section className="family-card family-chart-card">
            <div className="family-chart-header">
              <div>
                <h2>Weekly Activity</h2>
                <p>Learning activity this week</p>
              </div>

              <TrendingUp
                className="family-chart-icon"
                size={25}
              />
            </div>

            <div className="family-week-chart">
              <div className="family-week-bars">

                {[
                  ["Mon", "42%"],
                  ["Tue", "65%"],
                  ["Wed", "30%"],
                  ["Thu", "82%"],
                  ["Fri", "100%"],
                  ["Sat", "18%"],
                  ["Sun", "10%"],
                ].map(([day, height]) => (
                  <div
                    className="family-week-column"
                    key={day}
                  >
                    <span
                      className={`family-week-bar ${
                        day === "Fri"
                          ? "family-week-bar--active"
                          : ""
                      }`}
                      style={{ height }}
                    />

                    <small>{day}</small>
                  </div>
                ))}

              </div>
            </div>
          </section>


          <section className="family-card family-chart-card family-chart-card--areas">
            <div className="family-chart-header">
              <div>
                <h2>Learning Areas</h2>
                <p>Topics explored so far</p>
              </div>
            </div>

            <div className="family-topic-chart">

              <div className="family-topic">
                <div className="family-topic__label">
                  <span className="family-topic__dot family-topic__dot--orange" />
                  Online Safety
                  <strong>35%</strong>
                </div>

                <div className="family-topic__track">
                  <span
                    className="family-topic__fill family-topic__fill--orange"
                    style={{ width: "35%" }}
                  />
                </div>
              </div>


              <div className="family-topic">
                <div className="family-topic__label">
                  <span className="family-topic__dot family-topic__dot--blue" />
                  AI &amp; Media
                  <strong>25%</strong>
                </div>

                <div className="family-topic__track">
                  <span
                    className="family-topic__fill family-topic__fill--blue"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>


              <div className="family-topic">
                <div className="family-topic__label">
                  <span className="family-topic__dot family-topic__dot--green" />
                  Privacy
                  <strong>20%</strong>
                </div>

                <div className="family-topic__track">
                  <span
                    className="family-topic__fill family-topic__fill--green"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>


              <div className="family-topic">
                <div className="family-topic__label">
                  <span className="family-topic__dot family-topic__dot--purple" />
                  Scam Awareness
                  <strong>20%</strong>
                </div>

                <div className="family-topic__track">
                  <span
                    className="family-topic__fill family-topic__fill--purple"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>

            </div>
          </section>

        </div>


        <footer className="family-dashboard__security">
          <ShieldCheck size={18} />

          <span>
            Your family connection is private. No personal
            information is shared through this dashboard.
          </span>
        </footer>

      </div>
    </motion.main>
  );
}
