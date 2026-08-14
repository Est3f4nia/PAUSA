import { useState } from "react";
import { Award, CheckCircle, CheckSquare, Lightbulb, PencilIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModuleLayout } from "@/components/layout/ModuleContentLayout";
import "@/pages/courses/firstSteps/styles/module4.css"


export function Module4() {
    const [selectedAnswer, setSelectedAnswer] = useState<"correct" | "incorrect" | null>(null);
    const handleAnswer = (answer: "correct" | "incorrect") => {
        setSelectedAnswer(answer);
    };
    const [appointmentState, setAppointmentState] = useState<
        "booked" | "confirm" | "cancelled"
    >("booked");

    const navigate = useNavigate();

    return (
        <ModuleLayout

            /* =====================================================
               HEADER
            ===================================================== */

            eyebrow="Civic Participation"

            title="Module 4: My Medical Appointment"

            goal="Build hands-on familiarity and confidence to navigate universal digital health interfaces without fear."


            /* =====================================================
               SIMULATION
            ===================================================== */

            simulation={
                <div className="module4-simulation">

                    <div className="module4-phone">

                        {/* Status bar */}
                        <div className="module4-phone__status">
                            <span>9:41</span>

                            <div className="module4-phone__icons">
                                <span>●</span>
                                <span>◉</span>
                                <span>▰</span>
                            </div>
                        </div>

                        {/* App header */}
                        <div className="module4-phone__header">
                            <span>MyHealth Portal</span>
                        </div>

                        {/* Screen */}
                        <div className="module4-phone__screen">

                            {appointmentState === "booked" && (
                                <>
                                    <div className="module4-success-icon">
                                        <CheckCircle />
                                    </div>

                                    <h3>
                                        Appointment Booked!
                                    </h3>

                                    <p>
                                        Tuesday at 10:00 AM
                                        <br />
                                        Dr. Smith's Office
                                    </p>

                                    <div className="module4-action">

                                        <div className="module4-action__pulse" />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAppointmentState("confirm")
                                            }
                                        >
                                            Cancel or Change Appointment
                                        </button>

                                    </div>
                                </>
                            )}

                            {appointmentState === "confirm" && (
                                <>
                                    <div className="module4-success-icon">
                                        <CheckCircle />
                                    </div>

                                    <h3>
                                        Cancel Appointment?
                                    </h3>

                                    <p>
                                        Tuesday at 10:00 AM
                                        <br />
                                        Dr. Smith's Office
                                    </p>

                                    <div className="module4-action">

                                        <div className="module4-action__pulse" />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAppointmentState("cancelled")
                                            }
                                        >
                                            Yes, Cancel Appointment
                                        </button>

                                    </div>

                                    <div className="module4-action">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAppointmentState("booked")
                                            }
                                        >
                                            Keep Appointment
                                        </button>

                                    </div>
                                </>
                            )}

                            {appointmentState === "cancelled" && (
                                <>
                                    <div className="module4-success-icon">
                                        <CheckCircle />
                                    </div>

                                    <h3>
                                        Appointment Cancelled
                                    </h3>

                                    <p>
                                        Your appointment has been
                                        <br />
                                        successfully cancelled.
                                    </p>

                                    <div className="module4-action">

                                        <div className="module4-action__pulse" />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAppointmentState("booked")
                                            }
                                        >
                                            Done
                                        </button>

                                    </div>
                                </>
                            )}

                        </div>

                        {/* Home indicator */}
                        <div className="module4-phone__home">
                            <span />
                        </div>

                    </div>


                    {/* Simulation explanation */}

                    <div className="module4-simulation__context">

                        <div className="module4-tip">

                            <div className="module4-tip__icon">
                                <Lightbulb />
                            </div>

                            <div>
                                <h3>
                                    Your Turn to Practice
                                </h3>

                                <p>
                                    You did it! Now, let's practice
                                    changing our minds. Tap the
                                    "Cancel" button on the phone to
                                    see how easy it is to undo a
                                    mistake.
                                </p>
                            </div>

                        </div>

                        <div className="module4-simulation__line">
                            <span />
                        </div>

                    </div>

                </div>
            }


            /* =====================================================
               EXPLANATION
            ===================================================== */

            explanation={
                <div className="module4-explanation">

                    <div className="module4-explanation__title">
                        <Award />

                        <h2>
                            You are in control
                        </h2>
                    </div>

                    <p>
                        Digital services are designed so you can
                        review, change or cancel actions. Making a
                        choice on a screen does not mean you have
                        lost control.
                    </p>

                    <ul>

                        <li>
                            <CheckCircle />

                            <span>
                                <strong>Review your choices:</strong>{" "}
                                Take your time before confirming an
                                appointment.
                            </span>
                        </li>

                        <li>
                            <CheckCircle />

                            <span>
                                <strong>Change your mind:</strong>{" "}
                                Look for options such as
                                "Cancel", "Change" or "Back".
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
                        If you tap the wrong button in a public
                        health app, what happens?
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
                            You might break the hospital's
                                computer system or lose your
                                records.

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
                                Nothing bad happens, you can
                                always press a "Back" or "Cancel"
                                button.
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
                                    Tapping the wrong button in an official health
                                    app does not usually mean you have permanently
                                    changed or lost your medical information.
                                </p>

                                <p>
                                    Take a moment and look for options such as
                                    "Back", "Cancel" or "Change". These safety
                                    features allow you to review or undo many
                                    actions before they become final.

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
                                    Spot On!
                                </h3>

                                <p>
                                    Official apps are built with
                                    safety nets. You are always
                                    safe to explore!
                                </p>
                            </div>

                        </div>
                    )}
                </>
            }


            /* =====================================================
               MISSION
            ===================================================== */

            missionTitle="This week's mission: The I Can Do It rule"

            missionDescription={
                <p>
                    Next time you need a real medical appointment,
                    ask your family member to sit next to you while
                    <strong>
                        {" "}YOU press the buttons on your phone.
                    </strong>{" "}
                    You have the skills now!
                </p>
            }

            onComplete={() =>
                navigate("/firstSteps/course-info")
            }

        />
    );
}