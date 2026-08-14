import { ReactNode } from "react";
import { motion } from "motion/react";
import {
    CheckCircle,
    CheckSquare,
    Trophy,
} from "lucide-react";
import { useParams } from "react-router-dom";
import "@/styles/moduleC-layout.css";

interface ModuleLayoutProps {
    eyebrow: string;
    title: string;
    goal: string;

    simulation: ReactNode;
    explanation: ReactNode;

    activity: ReactNode;

    missionTitle: string;
    missionDescription: ReactNode;

    onComplete: () => void;
    completeLabel?: string;
}

export function ModuleLayout({
    eyebrow,
    title,
    goal,
    simulation,
    explanation,
    activity,
    missionTitle,
    missionDescription,
    onComplete,
    completeLabel
}: ModuleLayoutProps) {

    return (
        <motion.main
            className="module-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            <div className="module-page__container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <section className="module-intro">
                    <div className="module-intro__eyebrow">
                        {eyebrow}
                    </div>

                    <h1>{title}</h1>

                    <p>{goal}</p>
                </section>


                {/* =================================================
                    SIMULATION / EXPLANATION
                ================================================= */}

                <section className="module-learning">

                    <div className="module-learning__simulation">
                        {simulation}
                    </div>

                    <div className="module-learning__explanation">
                        {explanation}
                    </div>

                </section>


                {/* =================================================
                    ACTIVITY
                ================================================= */}

                <section className="module-activity">
                    {activity}
                </section>


                {/* =================================================
                    MISSION / REWARD
                ================================================= */}

                <section className="module-mission">

                    <div className="module-mission__pattern" />

                    <div className="module-mission__icon">
                        <Trophy />
                    </div>

                    <h2>{missionTitle}</h2>

                    <div className="module-mission__description">
                        {missionDescription}
                    </div>

                    <button
                        className="module-button module-button--primary"
                        onClick={onComplete}
                    >
                        <CheckCircle />
                        {completeLabel}
                    </button>

                </section>

            </div>
        </motion.main>
    );
}