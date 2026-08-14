import {
  Printer,
  Play,
  BookOpen,
  Mic,
  MessageSquare,
  Users,
  ArrowRight,
} from "lucide-react";

import { motion } from "motion/react";

import "@/styles/dashboards/teacher.css";

export function TeacherDashboard() {
  return (
    <motion.main
      className="teacher-dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
    <div className="teacher-dashboard__container">

      <header className="dashboard-page-header">
        <span className="teacher-dashboard__eyebrow">
          Teacher Portal
        </span>

        <h1>Classroom Dashboard</h1>

        <div className="dashboard-page-subtitle">
          <span className="dashboard-status-dot" />

          <p>
            Today's Module:{" "}
            <strong>Staying Safe Online</strong>
          </p>
        </div>
      </header>


      <div className="teacher-dashboard-grid">

        {/* Left */}
        <div className="teacher-dashboard-primary">

          <section className="dashboard-card dashboard-card--action">
            <div>
              <h2>Ready to begin?</h2>

              <p>
                Your presentation materials are loaded and ready
                to broadcast to student devices.
              </p>
            </div>

            <div className="dashboard-card-actions">

              <button className="dashboard-button dashboard-button--secondary">
                <Printer size={20} />
                Print Handouts
              </button>

              <button className="dashboard-button dashboard-button--primary">
                <Play size={20} />
                Start Theater Mode
              </button>

            </div>
          </section>


          <section className="dashboard-card">

            <div className="dashboard-card-header">
              <BookOpen size={24} />

              <h2>Guided Facilitation Script</h2>
            </div>

            <div className="dashboard-card-content">

              <div className="dashboard-script">

                <div className="dashboard-label">
                  <Mic size={16} />
                  <span>Read Aloud to Group</span>
                </div>

                <blockquote>
                  "Today we will learn how to recognize fake
                  messages on our phones. We will practice looking
                  at text messages to see if they are real or
                  trying to trick us."
                </blockquote>

              </div>


              <div className="dashboard-script">

                <div className="dashboard-label dashboard-label--blue">
                  <MessageSquare size={16} />
                  <span>Discussion Prompt</span>
                </div>

                <div className="dashboard-prompt">

                  <p>
                    Has anyone here ever received a text like this
                    while waiting for a real package?
                  </p>

                  <span>
                    How did it make your body feel?
                  </span>

                </div>

              </div>

            </div>

          </section>

        </div>


        {/* Right */}
        <aside className="teacher-dashboard-progress">

          <section className="dashboard-card dashboard-card--progress">

            <div className="dashboard-progress-header">

              <h2>
                <Users size={24} />
                Learner Progress
              </h2>

              <span>Group A</span>

            </div>

            <p>
              Monitor student progress through the independent
              practice exercises.
            </p>

            {/* Progress items go here */}

            <div className="dashboard-progress-footer">
              <button>
                View Full Classroom List
                <ArrowRight size={20} />
              </button>
            </div>

          </section>

        </aside>

      </div>

    </div>
    </motion.main>
  );
}