import { useState } from "react";
import { Lightbulb, Volume2, Share2, Shield } from "lucide-react";
import { motion } from "motion/react";
import { dictionaryWords } from "@/data/dictionary";
import "@/styles/dictionary.css";


export function Dictionary() {

    const [word] = useState(() => {
        const index = Math.floor(
            Math.random() * dictionaryWords.length
        );

        return dictionaryWords[index];
    });

    const handleListen = () => {
        if (!("speechSynthesis" in window)) {
            return;
        }

        const text = `${word.word}. ${word.meaning}. Example: ${word.example}`;

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-EN";
        speech.rate = 0.9;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    };

    const handleShare = async () => {

        const text =
            `📖 ${word.word}\n\n` +
            `${word.meaning}\n\n` +
            `Example: "${word.example}"`;

        if (navigator.share) {
            await navigator.share({
                title: "Intergenerational Dictionary",
                text,
            });

            return;
        }

        await navigator.clipboard.writeText(text);
    };

    return (
        <motion.main
            className="dictionary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >

            {/* =====================================================
                INTRO
            ===================================================== */}

            <header className="dictionary-header">

                <h1>
                  Intergenerational Dictionary
                </h1>
                <p>
                    A new word every day, to understand your
                    grandchildren and children
                </p>

            </header>


            {/* =====================================================
                TIP
            ===================================================== */}

            <section className="dictionary-tip">

                <Lightbulb />

                <div>

                    <h3>
                        Tip
                    </h3>

                    <p>
                        If your grandchild writes a word you
                        don't understand, don't worry! It's
                        normal. Look it up here, and next time
                        you'll recognize it yourself.
                    </p>

                </div>

            </section>


            {/* =====================================================
                WORD CARD
            ===================================================== */}

            <section
                className={`dictionary-card ${
                    word.safety
                        ? "dictionary-card--safety"
                        : ""
                }`}
            >

                <div className="dictionary-card__accent" />

                <div className="dictionary-word">

                    <span className="dictionary-word__label">
                        Word of the Day
                    </span>

                    <h2>
                        {word.word}
                    </h2>

                    <span className="dictionary-word__category">
                        {word.category}
                    </span>

                    <button
                        type="button"
                        className="dictionary-listen"
                        onClick={handleListen}
                    >
                        <Volume2 />
                        Listen
                    </button>

                </div>


                <div className="dictionary-divider" />


                <div className="dictionary-definition">

                    <p>
                        <strong>
                            Meaning:
                        </strong>{" "}
                        {word.meaning}
                    </p>

                    <p className="dictionary-example">

                        <strong>
                            Example:
                        </strong>{" "}

                        "{word.example}"

                    </p>

                </div>


                <button
                    type="button"
                    className="dictionary-share"
                    onClick={handleShare}
                >
                    <Share2 />
                    Share it with your family
                </button>


                <div className="dictionary-streak">
                    <span>🔥</span>

                    You have discovered 5 words
                </div>

            </section>


            {/* =====================================================
                SAFETY NOTE
            ===================================================== */}

            <section className="dictionary-safety">

                <div className="dictionary-safety__title">

                    <Shield />

                    <span>
                        Safety Note
                    </span>

                </div>

                <p>
                    Remember: Words like{" "}
                    <strong>deepfake</strong>,{" "}
                    <strong>bot</strong>,{" "}
                    <strong>spam</strong> or{" "}
                    <strong>phishing</strong> are related to
                    digital risks. Verify, do not trust.
                </p>

            </section>

        </motion.main>
    );
}