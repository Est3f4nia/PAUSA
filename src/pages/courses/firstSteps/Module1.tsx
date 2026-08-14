import { useState } from "react";
import { ArrowLeft, Mail, ArrowUp, AlertTriangle, Link as LinkIcon, CheckCircle, CheckSquare, PencilIcon, HelpCircle } from "lucide-react";
import { ModuleLayout } from "@/components/layout/ModuleContentLayout";
import { useNavigate } from "react-router-dom";
import "@/pages/courses/firstSteps/styles/module1.css"


export function Module1() {
    const [selectedAnswer, setSelectedAnswer] = useState<"correct" | "incorrect" | null>(null);
    const handleAnswer = (answer: "correct" | "incorrect") => {
        setSelectedAnswer(answer);
    };

    const navigate = useNavigate();

    return (
        <ModuleLayout
            eyebrow="Evaluating Sources"
            title="Module 1: The Urgent SMS"
            goal="Identify the language of emotional pressure and artificial time scarcity used by scammers."

            /* =====================================================
               SIMULATION
            ===================================================== */

            simulation={
                <div className="module-simulation">
                    <div className="phone">
                        <div className="phone__notch" />
                        <div className="phone__screen">
                            <div className="phone__header">
                                <ArrowLeft />
                                <div className="phone__avatar">
                                    <Mail />
                                </div>
                                <span>Correos/Post</span>
                            </div>
                            <div className="phone__messages">
                                <div className="phone__message">
                                    <span className="phone__urgent">
                                        URGENT:
                                    </span>
                                    Your package delivery has been
                                    suspended due to an unpaid customs
                                    fee of 1.99€.

                                    If not paid in
                                    <strong> 12 hours</strong>,
                                    the package will be returned.

                                    <a href="#">
                                        https://correos-pay-secure-293.com
                                    </a>
                                </div>
                                <span className="phone__time">
                                    Today 10:42 AM
                                </span>
                            </div>
                            <div className="phone__input">
                                <span>Text Message</span>
                                <button type="button">
                                    <ArrowUp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="module-tooltip">
                        Notice the pressure here? Scammers want you
                        to feel stressed so you act fast and don't
                        think clearly.
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
                        <span>Spotting the Fake</span>
                    </h2>
                    <p>
                        Scammers often use recognizable names like
                        "Post" or "Correos" to seem legitimate.
                    </p>
                    <ul>
                        <li>
                            <AlertTriangle />
                            <span>
                                <strong>Artificial Scarcity:</strong>{" "}
                                "URGENT" and "12 hours" force you
                                to skip logical checks.
                            </span>
                        </li>
                        <li>
                            <LinkIcon />
                            <span>
                                <strong>Suspicious Links:</strong>{" "}
                                Official services rarely send
                                complex links with numbers like
                                "secure-293".
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
                    <HelpCircle color="#e6a33a" />
                    <h2>
                        What is the safest way to handle this text message?
                    </h2>

                    <div className="module-options">

                        {/* Incorrect answer */}
                        <button
                            type="button"
                            className={`module-option ${
                                selectedAnswer === "incorrect"
                                    ? "module-option--incorrect"
                                    : ""
                            }`}
                            onClick={() => handleAnswer("incorrect")}
                        >
                            Pay 1.99€ quickly to make sure the package arrives on time.

                            {selectedAnswer === "incorrect" && (
                                <span className="module-option__icon">
                                    ✕
                                </span>
                            )}
                        </button>

                        {/* Correct answer */}
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
                                Delete the text and check the official delivery app or
                                website yourself.
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
                                    The message is designed to make you act quickly
                                    without checking whether it is legitimate.
                                </p>

                                <p>
                                    Don't use the link in the message or enter your
                                    payment details. Instead, open the official delivery
                                    app or website yourself and check the package there.
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
                                    Excellent Choice!
                                </h3>

                                <p>
                                    Scammers don't want the 1.99€; they want you to type
                                    your credit card details into their fake website.
                                    Always go directly to the official source.
                                </p>
                            </div>

                        </div>
                    )}
                </>
            }

            /* =====================================================
               MISSION
            ===================================================== */

            missionTitle="This week's mission: The 10-Minute Rule"

            missionDescription={
                <p>
                    Share this rule with your family: If a message
                    ever demands immediate action or money, you will
                    <strong>
                        {" "}wait 10 minutes and drink a glass of water
                    </strong>
                    {" "}before doing anything.
                </p>
            }

            onComplete={() => navigate("/firstSteps/course-info")}
        />
    );
}