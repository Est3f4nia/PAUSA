import { useState } from "react";
import { ArrowLeft, Bell, CheckCircle, CheckSquare, Eye, Link as LinkIcon, AlertTriangle, PencilIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModuleLayout } from "@/components/layout/ModuleContentLayout";
import "@/pages/courses/firstSteps/styles/module3.css"


export function Module3() {
    const [selectedAnswer, setSelectedAnswer] = useState<"correct" | "incorrect" | null>(null);
    const handleAnswer = (answer: "correct" | "incorrect") => {
        setSelectedAnswer(answer);
    };

    const navigate = useNavigate();

    return (
        <ModuleLayout
            eyebrow="Digital Traps"
            title="Module 3: The Attention Trap"
            goal="Understand how digital platforms use notifications, recommendations and endless scrolling to keep your attention."

            /* =====================================================
               SIMULATION
            ===================================================== */

            simulation={
                <div className="module-simulation">
                    <div className="social-phone">
                        <div className="social-phone__notch" />
                        <div className="social-phone__screen">
                            <div className="social-phone__header">
                                <ArrowLeft />
                                <strong>DailyFeed</strong>
                                <Bell />
                            </div>
                            <div className="social-feed">
                                <div className="social-post">
                                    <div className="social-post__user">
                                        <div className="social-post__avatar">
                                            JD
                                        </div>
                                        <div>
                                            <strong>John Daily</strong>
                                            <span>2 min ago</span>
                                        </div>
                                    </div>
                                    <p>
                                        You won't believe what happened
                                        today. Watch until the end!
                                    </p>
                                    <div className="social-post__image">
                                        <Eye />
                                        <span>Watch video</span>
                                    </div>
                                    <div className="social-post__actions">
                                        <span>♡ 248</span>
                                        <span>💬 42</span>
                                        <span>↗ Share</span>
                                    </div>
                                </div>
                                <div className="social-notification">

                                    <Bell />

                                    <div>
                                        <strong>
                                            You might also like this
                                        </strong>

                                        <span>
                                            7 new posts are waiting for you
                                        </span>
                                    </div>

                                </div>

                                <div className="social-post social-post--suggested">

                                    <div className="social-post__label">
                                        Recommended for you
                                    </div>

                                    <p>
                                        Another video selected just for you...
                                    </p>

                                    <div className="social-post__fake-image" />

                                </div>

                            </div>

                            <div className="social-phone__nav">
                                <span>⌂</span>
                                <span>🔍</span>
                                <span>＋</span>
                                <span>♡</span>
                                <span>●</span>
                            </div>

                        </div>

                    </div>

                    <div className="module-tooltip">
                        Notice how the app keeps giving you another
                        reason to stay: notifications, recommendations
                        and content that never seems to end.
                    </div>

                </div>
            }

            /* =====================================================
               EXPLANATION
            ===================================================== */

            explanation={
                <div className="module-explanation">

                    <h2>
                        <AlertTriangle />
                        Spotting the Digital Trap
                    </h2>

                    <p>
                        Many digital platforms are designed to keep
                        your attention for as long as possible.
                        This does not necessarily mean the content
                        is useful to you.
                    </p>

                    <ul>

                        <li>
                            <Bell />

                            <span>
                                <strong>Notifications:</strong>{" "}
                                Alerts create a reason to return to
                                the application, even when nothing
                                important happened.
                            </span>
                        </li>

                        <li>
                            <Eye />

                            <span>
                                <strong>Endless Content:</strong>{" "}
                                Automatic recommendations make it easy
                                to continue scrolling without deciding
                                whether you actually want to.
                            </span>
                        </li>

                        <li>
                            <LinkIcon />

                            <span>
                                <strong>Personalized Recommendations:</strong>{" "}
                                Platforms learn what catches your
                                attention and show you more of it.
                            </span>
                        </li>

                    </ul>

                </div>
            }

            /* =====================================================
               ACTIVITY
            ===================================================== */

            activity={
                <>
                    <h2>
                        What is the best way to regain control
                        of your attention?
                    </h2>

                    <div className="module-options">

                        <button
                            type="button"
                            className={`module-option ${
                                selectedAnswer === "incorrect"
                                    ? "module-option--incorrect"
                                    : ""
                            }`}
                            onClick={() => handleAnswer("incorrect")}
                        >
                            Keep scrolling until I reach something
                            that feels more useful.

                            {selectedAnswer === "incorrect" && (
                                <span className="module-option__icon">
                                    ✕
                                </span>
                            )}
                        </button>

                        <button
                            type="button"
                            className={`module-option ${
                                selectedAnswer === "correct"
                                    ? "module-option--correct"
                                    : ""
                            }`}
                            onClick={() => handleAnswer("correct")}
                        >
                            <span>
                                Stop, close the app and decide
                                deliberately whether I actually
                                want to continue.
                            </span>

                            {selectedAnswer === "correct" && (
                                <CheckCircle className="module-option__icon" />
                            )}
                        </button>

                    </div>

                    {/* =====================================================
                        INCORRECT FEEDBACK
                    ===================================================== */}

                    {selectedAnswer === "incorrect" && (
                        <div className="module-feedback module-feedback--incorrect">

                            <PencilIcon />

                            <div>
                                <h3>
                                    Not quite.
                                </h3>

                                <p>
                                    Keep scrolling may feel like you are looking
                                    for something more useful, but the app is
                                    designed to keep giving you another thing to watch.
                                </p>

                                <p>
                                    Notifications, recommendations and endless content
                                    can make you stay longer without consciously
                                    deciding to continue. Try closing the app and
                                    deciding whether you actually want to keep using it.
                                </p>
                            </div>

                        </div>
                    )}

                    {/* =====================================================
                        CORRECT FEEDBACK
                    ===================================================== */}

                    {selectedAnswer === "correct" && (
                        <div className="module-feedback">

                            <CheckSquare />

                            <div>
                                <h3>
                                    Exactly!
                                </h3>

                                <p>
                                    Your biggest superpower against the machine is ignoring it.
                                     You are in control of your peace of mind.
                                </p>
                            </div>

                        </div>
                    )}
                </>
            }

            /* =====================================================
               MISSION
            ===================================================== */

            missionTitle="This week's mission: The Pause Before Scrolling"

            missionDescription={
                <p>
                    The next time you receive a notification,
                    <strong>
                        {" "}pause before opening it.
                    </strong>
                    {" "}Ask yourself whether you actually need
                    to respond right now.
                </p>
            }
            onComplete={() =>
                navigate("/firstSteps/course-info")
            }
        />
    );
}