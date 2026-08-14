import {
  ArrowRight,
  Bell,
  BookOpen,
  Brain,
  Building,
  CheckCircle,
  Lock,
  PlayCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "@/styles/dashboards/student.css";

export function StudentDashboard() {
  return (
    <motion.main
      className="student-dashboard"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    > 
      <div className="student-dashboard__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="student-dashboard__header">
          <div>
            <span className="student-dashboard__eyebrow">
              My Learning
            </span>

            <h1>Welcome back</h1>

            <p>
              Continue learning at your own pace.
            </p>
          </div>

          <div className="student-dashboard__secure">
            <ShieldCheck size={21} />
            <span>Safe learning space</span>
          </div>
        </header>


        {/* =================================================
            PROGRESS
        ================================================= */}

        <section className="student-card student-progress-card">

          <div className="student-progress-card__header">
            <div>
              <span className="student-section-label">
                Your Total Progress
              </span>

              <h2>You're doing great!</h2>
            </div>

            <strong className="student-progress-card__percentage">
              25%
            </strong>
          </div>

          <div className="student-progress">
            <div className="student-progress__track">
              <span style={{ width: "25%" }} />
            </div>

            <div className="student-progress__labels">
              <span>1 of 4 modules completed</span>
            </div>
          </div>

        </section>


        {/* =================================================
            CONTINUE LEARNING
        ================================================= */}

        <section className="student-card student-continue-card">

          <div className="student-continue-card__icon">
            <Brain size={34} />
          </div>

          <div className="student-continue-card__content">
            <span className="student-status student-status--active">
              <PlayCircle size={16} />
              In progress
            </span>

            <h2>Artificial Intelligence</h2>

            <p>
              Learn how images, voices and videos can be
              created or changed using artificial intelligence.
            </p>

            <div className="student-lesson-progress">
              <div className="student-lesson-progress__track">
                <span style={{ width: "60%" }} />
              </div>

              <span>60% of this module</span>
            </div>
          </div>

          <Link
            to="/firstSteps/m2"
            className="student-button student-button--primary"
          >
            Continue
            <ArrowRight size={20} />
          </Link>

        </section>


        {/* =================================================
            QUICK SUMMARY
        ================================================= */}

        <section className="student-summary-grid">

          <article className="student-summary-card">
            <div className="student-summary-card__icon student-summary-card__icon--green">
              <CheckCircle size={25} />
            </div>

            <div>
              <strong>1</strong>
              <span>Module completed</span>
            </div>
          </article>


          <article className="student-summary-card">
            <div className="student-summary-card__icon student-summary-card__icon--orange">
              <BookOpen size={25} />
            </div>

            <div>
              <strong>3</strong>
              <span>Lessons completed</span>
            </div>
          </article>


          <article className="student-summary-card">
            <div className="student-summary-card__icon student-summary-card__icon--blue">
              <ShieldCheck size={25} />
            </div>

            <div>
              <strong>4</strong>
              <span>Safety topics explored</span>
            </div>
          </article>

        </section>


        {/* =================================================
            COURSE MODULES
        ================================================= */}

        <section className="student-modules">

          <div className="student-section-header">
            <div>
              <span className="student-section-label">
                Your Course
              </span>

              <h2>First Steps</h2>
            </div>

            <Link
              to="/firstSteps/course-info"
              className="student-text-link"
            >
              View course details
              <ArrowRight size={18} />
            </Link>
          </div>


          {/* Module 1 */}

          <article className="student-module student-module--completed">

            <div className="student-module__icon">
              <Smartphone size={30} />
            </div>

            <div className="student-module__content">

              <div className="student-module__status">
                <CheckCircle size={17} />
                Completed
              </div>

              <h3>Module 1: Phishing & Spoofing</h3>

            </div>

            <Link
              to="/firstSteps/m1"
              className="student-button student-button--secondary"
            >
              Review
            </Link>

          </article>


          {/* Module 2 */}

          <article className="student-module student-module--active">

            <div className="student-module__icon">
              <Brain size={30} />
            </div>

            <div className="student-module__content">

              <div className="student-module__status">
                <PlayCircle size={17} />
                In progress
              </div>

              <h3>Module 2: Artificial Intelligence</h3>

            </div>

            <Link
              to="/firstSteps/m2"
              className="student-button student-button--primary"
            >
              Continue
            </Link>

          </article>


          {/* Module 3 */}

          <article className="student-module student-module--locked">

            <div className="student-module__icon">
              <Bell size={30} />
            </div>

            <div className="student-module__content">

              <div className="student-module__status">
                <Lock size={16} />
                Locked
              </div>

              <h3>Module 3: Emotional Manipulation</h3>

            </div>

            <button
              type="button"
              className="student-button student-button--disabled"
              disabled
            >
              Locked
            </button>

          </article>


          {/* Module 4 */}

          <article className="student-module student-module--locked">

            <div className="student-module__icon">
              <Building size={30} />
            </div>

            <div className="student-module__content">

              <div className="student-module__status">
                <Lock size={16} />
                Locked
              </div>

              <h3>Module 4: Civic Autonomy</h3>
            </div>

            <button
              type="button"
              className="student-button student-button--disabled"
              disabled
            >
              Locked
            </button>

          </article>

        </section>


        {/* =================================================
            RECENT LEARNING
        ================================================= */}

        <section className="student-card student-recent-card">

          <div className="student-section-header">
            <div>
              <span className="student-section-label">
                Recent Learning
              </span>

              <h2>What you've learned</h2>
            </div>
          </div>

          <div className="student-recent-list">

            <div className="student-recent-item">
              <CheckCircle size={22} />

              <div>
                <strong>The Urgent SMS</strong>
                <span>
                  How scammers create a false sense of urgency.
                </span>
              </div>
            </div>

            <div className="student-recent-item">
              <CheckCircle size={22} />

              <div>
                <strong>The Fake WhatsApp</strong>
                <span>
                  How to recognize suspicious conversations.
                </span>
              </div>
            </div>

            <div className="student-recent-item">
              <CheckCircle size={22} />

              <div>
                <strong>The Bank Alert</strong>
                <span>
                  How to stop and verify unexpected messages.
                </span>
              </div>
            </div>

          </div>

        </section>


        {/* =================================================
            HELP / SAFETY REMINDER
        ================================================= */}

        <section className="student-help-card">

          <div className="student-help-card__icon">
            <ShieldCheck size={28} />
          </div>

          <div>
            <h2>Remember: you can always stop</h2>

            <p>
              If a message makes you feel rushed or worried,
              take a moment before clicking, replying or
              sharing information.
            </p>
          </div>

          <Link
            to="/student/course"
            className="student-text-link"
          >
            Review safety tips
            <ArrowRight size={18} />
          </Link>

        </section>

      </div>
    </motion.main>
  );
}
