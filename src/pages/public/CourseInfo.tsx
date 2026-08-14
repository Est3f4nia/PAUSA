import "@/styles/course-info.css";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Check,
    Heart,
    Lock,
    MoreHorizontal,
    Play,
    Sailboat,
} from "lucide-react";

export function CourseInfo() {
    return (
        <motion.main
            className="course-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            {/* =================================================
                COURSE HEADER
            ================================================= */}

            <section className="course-header">

                <div className="course-actions">

                    <Link to="/courses" className="course-back">
                        <ArrowLeft />
                        Back
                    </Link>

                    <button type="button" aria-label="Favorite course">
                        <Heart />
                    </button>

                    <button type="button" aria-label="More options">
                        <MoreHorizontal />
                    </button>

                </div>

                <div className="course-header-info">

                    <div className="course-image">
                    </div>

                    <div className="course-details">

                        <div className="course-var">
                            Your first steps online
                        </div>

                        <h1>
                            First Steps
                        </h1>

                        <p>
                            Your journey into the digital world begins
                            here. Follow the path and learn at your own
                            pace.
                        </p>

                        <Link
                            to="/firstSteps/m1"
                            className="module-button course-start-button"
                        >
                            Start Module
                        </Link>

                    </div>

                </div>

            </section>


            {/* =================================================
                COURSE MAP
            ================================================= */}

            <section className="course-map">

                {/* El camino termina exactamente con el último nodo */}
                <div className="course-map-line" />

                <div className="course-map-list">

                    {/* =================================================
                        MODULE 1 — CITY
                    ================================================= */}

                    <section className="module-card module-card--completed">

                        <div className="module-background module-background--1">
                            
                            <span className="city-cloud city-cloud--1" />
                            <span className="city-cloud city-cloud--2" />
                            <span className="city-cloud city-cloud--3" />

                        </div>

                        <div className="module-content module-content--right">

                            <div className="module-panel">

                                <div className="module-status module-status--completed">
                                    <Check color="white" />
                                </div>

                                <span className="module-label">
                                    COMPLETED
                                </span>

                                <h3>
                                    Module 1: Phishing & Spoofing
                                </h3>

                                <p>
                                    Identify the language of emotional pressure used by scammers and messages that use pressure, urgency or fear to trick you.
                                </p>

                                <Link
                                    to="/firstSteps/m1"
                                    className="module-button"
                                >
                                    Review Module
                                </Link>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        MODULE 2 — DESERT
                    ================================================= */}

                    <section className="module-card module-card--current">

                        <div className="module-background module-background--2">

                            {/* Animated rays */}
                            <span className="desert-rays" />

                        </div>

                        <div className="module-content module-content--left">

                            <div className="module-panel">

                                <div className="module-status module-status--current">
                                    <Play />
                                </div>

                                <span className="module-label">
                                    CURRENT LESSON
                                </span>

                                <h3>
                                    Module 2: Artificial Intelligence
                                </h3>

                                <p>
                                    Spot synthetic media and learn how
                                    to visually verify potentially fake
                                    content.
                                </p>

                                <Link
                                    to="/firstSteps/m2"
                                    className="module-button"
                                >
                                    Continue
                                </Link>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        MODULE 3 — SEA
                    ================================================= */}

                    <section className="module-card module-card--locked">

                        <div className="module-background module-background--3">

                            {/* Paper boat */}
                            <span className="paper-boat">
                                <Sailboat size={70} strokeWidth={1} fill="white"/>
                            </span>

                        </div>

                        <div className="module-content module-content--right">

                            <div className="module-panel">

                                <div className="module-status module-status--locked">
                                    <Lock />
                                </div>

                                <span className="module-label">
                                    NEXT UP
                                </span>

                                <h3>
                                    Module 3: Emotional Manipulation
                                </h3>

                                <p>
                                    Understand how online content can use strong emotions to keep your attention.
                                </p>

                                <Link
                                    to="/firstSteps/m3"
                                    className="module-button"
                                >
                                    Locked
                                </Link>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        MODULE 4 — MOUNTAINS
                    ================================================= */}

                    <section className="module-card module-card--locked module-card--four">

                        <div className="module-background module-background--4-top">

                            {/* Low clouds */}
                            <span className="mountain-cloud mountain-cloud--1" />
                            <span className="mountain-cloud mountain-cloud--2" />

                            {/* Birds */}
                            <span className="mountain-bird mountain-bird--1">
                                ︿
                            </span>

                            <span className="mountain-bird mountain-bird--2">
                                ︿
                            </span>

                            <span className="mountain-bird mountain-bird--3">
                                ︿
                            </span>

                        </div>

                        <div className="module-background--4-bottom" />

                        <div className="module-content module-content--left">

                            <div className="module-panel">

                                <div className="module-status module-status--locked">
                                    <Lock />
                                </div>

                                <span className="module-label">
                                    UPCOMING
                                </span>

                                <h3>
                                    Module 4: Civic Autonomy
                                </h3>

                                <p>
                                    Build confidence using everyday
                                    digital health services safely
                                    and independently.
                                </p>

                                <Link
                                    to="/firstSteps/m4"
                                    className="module-button"
                                >
                                    Locked
                                </Link>

                            </div>

                        </div>

                    </section>

                </div>

            </section>

        </motion.main>
    );
}